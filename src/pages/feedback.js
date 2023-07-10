import React, {useEffect, useState} from "react";
import Navbar from "./navbar";
import {Auth, DataStore} from "aws-amplify";
import {useNavigate} from "react-router-dom";
import {Feedback} from "../models/index.js";

const FeedbackPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

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

  const onSubmit = async () => {
    await DataStore.save(
      new Feedback({
        Name: "anon",
        Description: message,
        Email: email,
      })
    );
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div></div>
      <div className=" items-center justify-center p-10 md:w-3/5 mx-auto">
        <form>
          <div class="mb-6">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FeedbackPage;
