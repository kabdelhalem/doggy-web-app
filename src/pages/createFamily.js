import {Auth, DataStore} from "aws-amplify";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Families, User} from "../models";

const CreateFamily = () => {
  const navigate = useNavigate();

  const handleCreateFamilyClick = () => {
    navigate("/getstarted/join"); // Navigate to the specified route
  };

  const [familyName, setFamilyName] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const retrieveEmail = async () => {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          // Access the user's email from the user object
          const email = user.attributes.email;
          setEmail(email);
        })
        .catch((error) => {
          console.log("Error retrieving user:", error);
        });
    };
    retrieveEmail();
  }, []);

  const handleSubmit = async () => {
    const newFamily = await DataStore.save(
      new Families({
        Family_Name: familyName,
        Users: [],
        Pets: [],
        Events: [],
      })
    );
    const familyID = newFamily.id;

    await DataStore.save(
      new User({
        Name: name,
        familiesID: familyID,
        Email: email,
      })
    );
    // navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setFamilyName(e.target.value)}
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Family Name
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <div className="text-sm text-gray-900">
              Click to create a family
            </div>
            <button
              onClick={() => handleSubmit()}
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create a Family
            </button>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <div className="text-sm text-gray-900">Already have a family?</div>
            <button
              formNoValidate
              type="button"
              onClick={() => handleCreateFamilyClick()} // Handle button click to navigate
              class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Join a Family
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateFamily;
