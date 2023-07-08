import React from "react";
import {Card, ActivityTimeline, TimelineMarker} from "react-rainbow-components";

const iconStyles = {width: 32, height: 32};
const container = {width: 500, margin: "auto", marginTop: 36};

const TimeLine = () => {
  return (
    <div style={container}>
      <ActivityTimeline>
        <TimelineMarker
          label="User Sign Up."
          //   icon={<UserSignUpIcon style={iconStyles} />}
          datetime="Yesterday"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore etdolore magna aliqua."
        />
        <TimelineMarker
          label="User phone verified."
          //   icon={<UserVerifiedIcon style={iconStyles} />}
          datetime="Today"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <TimelineMarker
          label="User phone verified."
          //   icon={<UserVerifiedIcon style={iconStyles} />}
          datetime="Today"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </ActivityTimeline>
    </div>
  );
};

export default TimeLine;
