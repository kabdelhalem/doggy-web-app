import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";

const MobileDatePickerTSX = (props) => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
    props.setDate(newValue.startDate);
  };

  return (
    <Datepicker
      value={value}
      onChange={handleValueChange}
      asSingle={true}
      useRange={false}
    />
  );
};
export default MobileDatePickerTSX;
