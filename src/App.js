import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/main";
import TimeLine from "./pages/timeline";
import {Amplify, Auth} from "aws-amplify";

import {withAuthenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import {useEffect, useState} from "react";
Amplify.configure(awsExports);

function App({signOut, user}) {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // Call this function inside an effect or any other appropriate place in your component

    // Retrieve the current authenticated user
    Auth.currentAuthenticatedUser()
      .then((user) => {
        // Access the user's email from the user object
        const email = user.attributes.email;
        console.log("User's email:", email);
        setEmail(email);
      })
      .catch((error) => {
        console.log("Error retrieving user:", error);
      });
  }, []);

  return (
    <>
      <MainPage></MainPage>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
// export default App;
