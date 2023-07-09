import React, {useState} from "react";
import {
  Card,
  Calendar,
  Picklist,
  PicklistOption,
} from "react-rainbow-components";

const initialState = {
  date: new Date(),
  locale: {name: "en-US", label: "English"},
};

const calendarContainerStyles = {
  width: "28rem",
  height: "27rem",
};
const selectStyles = {
  width: "8rem",
};

const MobileDatePicker = (props) => {
  const [state, setState] = useState(initialState);

  return (
    <div className="">
      <div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto">
        <Card
          style={calendarContainerStyles}
          className="rainbow-p-around_large"
        >
          <Calendar
            id="calendar-1"
            locale={state.locale.name}
            value={state.date}
            onChange={(value) => {
              props.setDate(value);
              setState({...state, date: value});
              console.log(value);
            }}
          />
        </Card>
      </div>
    </div>
  );
};

export default MobileDatePicker;
