import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/main";
import TimeLine from "./pages/timeline";
import {Amplify, Auth} from "aws-amplify";

import {withAuthenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import {useEffect, useState} from "react";
import Decider from "./pages/decider";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import JoinFamily from "./pages/joinFamily";
import CreateFamily from "./pages/createFamily";
import HasFamily from "./pages/hasFamily";
import {Wrapper} from "./pages/wrapper";
Amplify.configure(awsExports);

function App({signOut, user}) {
  return (
    <>
      <Wrapper>
        <Router>
          <Routes>
            <Route element={<Decider />}>
              <Route path="/" element={<MainPage />} />
            </Route>
            <Route element={<HasFamily />}>
              <Route path="/getstarted/join" element={<JoinFamily />} />
              <Route path="/getstarted/create" element={<CreateFamily />} />
            </Route>
          </Routes>
        </Router>
        {/* <button onClick={signOut}>Sign out</button> */}
      </Wrapper>
    </>
  );
}

export default withAuthenticator(App);
// export default App;
