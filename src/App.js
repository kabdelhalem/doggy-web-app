import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/main";
import TimeLine from "./pages/timeline";
import {Amplify} from "aws-amplify";

import {withAuthenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({signOut, user}) {
  return (
    <>
      <MainPage></MainPage>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

// export default withAuthenticator(App);
export default App;
