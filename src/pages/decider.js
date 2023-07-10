import {API, Auth, DataStore} from "aws-amplify";
import React, {useContext, useEffect, useState} from "react";
import {User, Families} from "../models";
import MainPage from "./main";
import {Outlet, useNavigate} from "react-router-dom";
import JoinFamily from "./joinFamily";
import {WrapperContext} from "./wrapper";

const Decider = () => {
  const navigate = useNavigate();

  const {hasFamily, loading} = useContext(WrapperContext);

  if (loading === true) {
    return <div>Loading...</div>;
  }

  if (hasFamily) {
    return <Outlet />;
  } else navigate("/getstarted");
  return null;
};

export default Decider;
