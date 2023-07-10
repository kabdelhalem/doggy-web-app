import React, {useContext, useEffect, useState} from "react";
import Navbar from "./navbar";
import {WrapperContext} from "./wrapper";
import {DataStore} from "aws-amplify";
import {Families, Pet, User} from "../models";

const Settings = () => {
  const {family, loading} = useContext(WrapperContext);

  const [users, setUsers] = useState(null);
  const [pets, setPets] = useState(null);

  const [addNewDog, setAddNewDog] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const familyId = family.id;

      try {
        const family = await DataStore.query(Families, (u) =>
          u.id.eq(familyId)
        );
        console.log(await family[0].Users.values);
        setUsers(await family[0].Users.values);
        setPets(await family[0].Pets.values);
      } catch (error) {
        console.error("Error retrieving users:", error);
      }
    };
    if (!loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-10 mx-auto w-screen">
        <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Settings
        </div>
        <div className="my-2"></div>
        {!users ? null : (
          <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Family Members
              </h5>
              <a class="text-sm font-medium text-gray-600 dark:text-gray-500 cursor-default">
                Add New
              </a>
            </div>
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {users.map((user) => (
                  <li class="pt-3 pb-0 sm:pt-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8"
                          src="/images/user.png"
                          alt="image description"
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {user.Name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          {user.Email}
                        </p>
                      </div>
                      {/* <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2367
                    </div> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div class="flex flex-col pt-3">
              <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Family ID
              </dt>
              <div className="flex flex-row justify-between">
                <dd class="text-lg font-semibold">{family.id}</dd>
                <img
                  class="w-6 h-6 cursor-pointer"
                  src="/images/copy.png"
                  alt="image description"
                  onClick={() => navigator.clipboard.writeText(family.id)}
                />
              </div>
            </div>
          </div>
        )}
        <div className="my-2"></div>
        {!pets ? null : (
          <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Pets
              </h5>
              <a
                onClick={() => setAddNewDog(true)}
                class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
              >
                Add New
              </a>
            </div>
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {pets.map((pet) => (
                  <li class="pt-3 pb-0 sm:pt-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8"
                          src="/images/dog.png"
                          alt="image description"
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {pet.Name}
                        </p>
                      </div>
                      <img
                        class="w-8 h-8 cursor-pointer"
                        src="/images/delete.png"
                        alt="image description"
                        onClick={async () => {
                          const petToDelete = await DataStore.query(
                            Pet,
                            pet.id
                          );
                          DataStore.delete(petToDelete);
                          window.location.reload();
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {!addNewDog ? null : <AddNewDog setAddNewDog={setAddNewDog} />}
      </div>
    </>
  );
};

export default Settings;

const AddNewDog = (props) => {
  const {family, loading} = useContext(WrapperContext);

  const [Name, setName] = useState(null);

  const handleSubmit = async () => {
    try {
      await DataStore.save(
        new Pet({
          Name: Name,
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
          <form>
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Add New
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={() => props.setAddNewDog(false)}
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
            <div class="p-6 space-y-6">
              <div class="flex items-center mb-4">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Dog name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Milou"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={() => {
                  handleSubmit();
                  // props.setModal(false);
                }}
                data-modal-hide="defaultModal"
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <button
                onClick={() => props.setAddNewDog(false)}
                data-modal-hide="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
