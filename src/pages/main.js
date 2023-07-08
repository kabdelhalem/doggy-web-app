import React, {useState} from "react";
import MobileDatePicker from "./mobile_date_picker.js";
import TimeLine from "./timeline.js";
import {
  Button,
  DateTimePicker,
  Picklist,
  PicklistOption,
  Modal,
  CheckboxGroup,
} from "react-rainbow-components";

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

  const [state, setState] = useState(initialState);

  const handleOnClick = () => {
    setIsOpen(true);
  };

  const handleOnClose = () => {
    setIsOpen(false);
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
              onClick={() => handleOnClose()}
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
        />
      </Modal>
    </div>
  );
};

export default function MainPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10 mx-10">
        <MobileDatePicker />
        <TimeLine></TimeLine>
        <ModalAddNew />
      </div>
    </>
  );
}
