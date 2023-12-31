import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/main";
import TimeLine from "./pages/timeline";
import {Amplify, API, graphqlOperation} from "aws-amplify";

import {withAuthenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsconfig from "./aws-exports";
import {useEffect, useState} from "react";
import Decider from "./pages/decider";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import JoinFamily from "./pages/joinFamily";
import CreateFamily from "./pages/createFamily";
import HasFamily from "./pages/hasFamily";
import {Wrapper} from "./pages/wrapper";
import Settings from "./pages/settings";
import Welcome from "./pages/welcome";
import FeedbackPage from "./pages/feedback";
import NotFound from "./pages/nofound";
Amplify.configure(awsconfig);

function App({signOut, user}) {
  return (
    <>
      <Wrapper>
        <Router>
          <Routes>
            <Route element={<Decider />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/feedback" element={<FeedbackPage />} />
            </Route>
            <Route element={<HasFamily />}>
              <Route path="/getstarted" element={<Welcome />} />
              <Route path="/getstarted/join" element={<JoinFamily />} />
              <Route path="/getstarted/create" element={<CreateFamily />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        {/* <button onClick={signOut}>Sign out</button> */}
      </Wrapper>
    </>
  );
}

export default withAuthenticator(App);
// export default App;
