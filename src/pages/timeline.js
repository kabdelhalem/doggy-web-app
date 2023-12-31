import React, {useContext, useEffect, useState} from "react";
import {Card, ActivityTimeline, TimelineMarker} from "react-rainbow-components";
import {WrapperContext} from "./wrapper";
import {DataStore} from "aws-amplify";
import {Event, Families, Pet} from "../models";

const iconStyles = {width: 32, height: 32};
const container = {width: 500, margin: "auto", marginTop: 36};

const TimeLine = (props) => {
  const date = props.date;

  const {family, loading} = useContext(WrapperContext);

  const [events, setEvents] = useState(null);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const queryEvents = async () => {
      const familyId = family.id;

      const currentDate = new Date(date);
      console.log("selected date = ", currentDate);

      const events = await DataStore.query(Event, (e) =>
        e.and((e) => [
          e.familiesID.eq(familyId),
          // e.updatedAt.contains(localDate.split("T")[0]),
        ])
      );

      const filteredEvents = events.filter((obj) => {
        const localDate = new Date(obj.createdAt)
          .toLocaleDateString()
          .split("T")[0];

        console.log(localDate);
        return (
          localDate ===
          currentDate.toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
          })
        );
      });

      // const events = await DataStore.query(Event, (e) => {
      //   const localDate = new Date(date); // Assuming 'date' is in the format '2023-07-09'

      //   return e.and(e.familiesID.eq(familyId), (e) => {
      //     const updatedAtDate = new Date(e.updatedAt);
      //     const localUpdatedAtDate = new Date(
      //       updatedAtDate.getTime() - updatedAtDate.getTimezoneOffset() * 60000
      //     );
      //     return e.updatedAt.contains(
      //       localUpdatedAtDate.toISOString().split("T")[0]
      //     );
      //   });
      // });

      // Log the events
      console.log("Events in the family:", filteredEvents);
      setEvents(filteredEvents);

      const petIds = Array.from(
        new Set(events.map((event) => event.eventPetId))
      );
      console.log("petIds:", petIds);
      const pets = await DataStore.query(Pet, (u) =>
        u.and((u) => [u.familiesID.eq(familyId), u.id.contains(petIds)])
      );
      console.log("Pets in the family:", pets);
      setPets(pets);
    };
    if (!loading) {
      queryEvents();
    }
  }, [loading, date]);

  return (
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      {!events
        ? null
        : events.map((event) => {
            const pet = pets.find((p) => p.id === event.eventPetId);

            return (
              <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {new Date(event.updatedAt).toLocaleTimeString([], {
                    timeStyle: "short",
                  })}
                </time>
                {!pet ? null : (
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {!event.Num1 && !event.Num2
                      ? `${pet.Name} went outside!`
                      : event.Num1 && !event.Num2
                      ? `${pet.Name} went Number 1!`
                      : !event.Num1 && event.Num2
                      ? `${pet.Name} went Number 2!`
                      : `${pet.Name} went Number 1 and Number 2!`}
                  </h3>
                )}
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  {event.Description}
                </p>
              </li>
            );
          })}
    </ol>
  );
};

export default TimeLine;
