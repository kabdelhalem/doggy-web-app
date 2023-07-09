import React, {useEffect, useState} from "react";
// import MobileDatePicker from "./mobile_date_picker.js";
import TimeLine from "./timeline.js";
import {
  Button,
  DateTimePicker,
  Picklist,
  Option,
  Modal,
  CheckboxGroup,
} from "react-rainbow-components";
import {getFamilies} from "../api/family.js";
import {Auth, DataStore} from "aws-amplify";
import {Families, User} from "../models/index.js";
import Navbar from "./navbar.js";
import MobileDatePickerTSX from "./mobile_date_picker.js";

const textStyles = {
  textAlign: "center",
  fontSize: 15,
  padding: "0 16px",
};

const ModalAddNew = () => {
  const [isOpen, setIsOpen] = useState(false);

  const initialState = {
    value: new Date(),
    locale: {name: "en-US", label: "English (US)"},
  };

  const okButtonLocalizedLabel = {
    "en-US": "OK",
    "es-ES": "Aceptar",
    "fr-Fr": "D'accord",
  };

  const cancelButtonLocalizedLabel = {
    "en-US": "Cancel",
    "es-ES": "Cancelar",
    "fr-Fr": "Annuler",
  };
  const containerStyles = {
    width: "200px",
  };

  const [state, setState] = useState(initialState);

  const handleOnClick = () => {
    setIsOpen(true);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const handleOnSave = async () => {
    console.log(state.value);
    console.log(values);

    await DataStore.save(
      new Event({
        Num1: true,
        Num2: true,
        Description: "Lorem ipsum dolor sit amet",
        Date: "Lorem ipsum dolor sit amet",
        Pet: "/* Provide a Pet instance here */",
        familiesID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
      })
    );
  };

  const options = [
    {value: "num1", label: "Number 1", disabled: false},
    {value: "num2", label: "Number 2", disabled: false},
  ];

  const [values, setValues] = useState([]);

  return (
    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
      <div className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
        <Button
          id="button-2"
          variant="brand"
          className="rainbow-m-around_medium"
          label="Add New"
          onClick={handleOnClick}
        />
      </div>
      <Modal
        id="modal-2"
        isOpen={isOpen}
        onRequestClose={handleOnClose}
        title="Modal Header"
        footer={
          <div className="rainbow-flex rainbow-justify_end">
            <Button
              className="rainbow-m-right_large"
              label="Cancel"
              variant="neutral"
              onClick={() => handleOnClose()}
            />
            <Button
              label="Save"
              variant="brand"
              onClick={() => handleOnSave()}
            />
          </div>
        }
      >
        <DateTimePicker
          id="datetimepicker-1"
          label="DateTimePicker label"
          value={state.value}
          onChange={(value) => setState({...state, value})}
          formatStyle="large"
          locale={state.locale.name}
          okLabel={okButtonLocalizedLabel[state.locale.name]}
          cancelLabel={cancelButtonLocalizedLabel[state.locale.name]}
        />
        <CheckboxGroup
          id="checkbox-group-1"
          options={options}
          value={values}
          onChange={setValues}
          label="Checkbox Group Label"
          orientation="horizontal"
          hideLabel
        />
        <Picklist
          style={containerStyles}
          onChange={(value) => setState({value})}
          value={state.value}
          label="Select a Pet"
        >
          <Option name="option 1" label="Experimental Building" />
          <Option name="option 2" label="Empire State" />
          <Option name="option 3" label="Plaza" />
          <Option name="option 4" label="Central Park" />
        </Picklist>
      </Modal>
    </div>
  );
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

  return (
    <>
      <Navbar></Navbar>
      <div className="overflow-auto">
        <div className="flex flex-col items-center justify-center p-10 mx-10 w-screen">
          <div className="p-4">
            <div>{familyName} Family</div>
            <div>{date.toString()}</div>
            {/* <MobileDatePicker setDate={setDate} /> */}
            <MobileDatePickerTSX></MobileDatePickerTSX>
            <TimeLine date={date} />

            <ModalAddNew />
          </div>
        </div>
      </div>
    </>
  );
}
