import React, {useContext, useEffect, useState} from "react";
// import MobileDatePicker from "./mobile_date_picker.js";
import TimeLine from "./timeline.js";
import {
  Button,
  DateTimePicker,
  Picklist,
  Option,
  CheckboxGroup,
} from "react-rainbow-components";
import {getFamilies} from "../api/family.js";
import {Auth, DataStore} from "aws-amplify";
import {Families, Pet, User, Event} from "../models/index.js";
import Navbar from "./navbar.js";
import MobileDatePickerTSX from "./mobile_date_pickertsx.js";
import {WrapperContext} from "./wrapper.js";
import Banner from "./banner.js";

const textStyles = {
  textAlign: "center",
  fontSize: 15,
  padding: "0 16px",
};

export default function MainPage() {
  const [familyName, setFamilyName] = useState(null);

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const retrieveEmail = async () => {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          // Access the user's email from the user object
          const email = user.attributes.email;
          console.log("User's email:", email);
          queryUser(email);
        })
        .catch((error) => {
          console.log("Error retrieving user:", error);
        });
    };
    const queryUser = async (email) => {
      try {
        // Find the user with the target email address
        const users = await DataStore.query(User);

        console.log(users.filter((u) => u.Email === email)[0]);

        if (users.filter((u) => u.Email === email).length === 0) {
          return;
        } else {
          queryFamily(users.filter((u) => u.Email === email)[0]);
        }
      } catch (error) {
        console.error("Error querying users:", error);
      }
    };

    const queryFamily = async (user) => {
      try {
        const families = await DataStore.query(Families, user.familiesID);

        // Log the families that include the user
        console.log("Families that include the user:", families);
        if (families) {
          setFamilyName(families.Family_Name);
        }
      } catch (error) {
        console.error("Error querying families:", error);
      }
    };

    retrieveEmail();
  }, []);

  const [modal, setModal] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <Banner />
      <div className="">
        <div className="flex flex-col items-center justify-center p-10 mx-auto w-screen">
          <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {familyName} Family
          </div>
          <div className="md:w-2/5">
            <MobileDatePickerTSX setDate={setDate}></MobileDatePickerTSX>
          </div>

          <TimeLine date={date} />

          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setModal(!modal)}
          >
            Add New
          </button>
          {!modal ? null : <Modal setModal={setModal}></Modal>}
        </div>
      </div>
    </>
  );
}
const Modal = (props) => {
  const {family, loading} = useContext(WrapperContext);

  const [num1, setNum1] = useState(false);
  const [num2, setNum2] = useState(false);
  const [desc, setDesc] = useState(null);

  const [pets, setPets] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);

  const [showDropdown, setShowDropdown] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      const familyId = family.id;

      const pets = await DataStore.query(Pet, (u) => u.familiesID.eq(familyId));
      console.log("pets", pets);
      console.log("is empty? ", pets.length === 0);
      setPets(pets);
    };

    if (!loading) {
      fetchPets();
    }
  }, [loading]);

  const handleSubmit = async () => {
    const fetchedPet = await DataStore.query(Pet, (p) =>
      p.id.eq(selectedPet.id)
    );
    console.log("fetched pet", fetchedPet[0]);

    try {
      await DataStore.save(
        // console.log(
        new Event({
          Num1: num1,
          Num2: num2,
          Description: desc,
          Pet: fetchedPet[0],
          familiesID: family.id,
        })
      );
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Add New
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
              onClick={() => props.setModal(false)}
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          {!pets ? null : pets.length !== 0 ? (
            <div class="p-6 space-y-6">
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={num1}
                  onClick={() => setNum1(!num1)}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Number 1
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={num2}
                  onClick={() => setNum1(!num2)}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Number 2
                </label>
              </div>
              <div class="flex items-center mb-4">
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write a Description"
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <div class="flex items-center mb-4">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  {!selectedPet ? `Select a Pet${" "}` : selectedPet.Name}
                  <svg
                    class="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class={
                    showDropdown
                      ? "hidden"
                      : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  }
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {!pets
                      ? null
                      : pets.map((pet) => (
                          <li
                            onClick={() => {
                              setSelectedPet(pet);
                              setShowDropdown(true);
                            }}
                          >
                            <div class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              {pet.Name}
                            </div>
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div class="p-6 space-y-6">
              <div class="flex items-center mb-4">
                <div className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  No pets found! Please create a pet in settings
                </div>
              </div>
            </div>
          )}
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            {!pets ? null : pets.length !== 0 ? (
              <button
                onClick={() => {
                  handleSubmit();
                  // props.setModal(false);
                }}
                data-modal-hide="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => {
                  // props.setModal(false);
                }}
                data-modal-hide="defaultModal"
                type="button"
                class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Submit
              </button>
            )}
            <button
              onClick={() => props.setModal(false)}
              data-modal-hide="defaultModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
