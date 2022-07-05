import React from "react";
import Stats from "./Stats";

const Step4 = (props) => {
  return (
    <div>
      <div className={"text-center"}>
        <h3>This is the last step in this example!</h3>
        <hr />
      </div>
      <Stats {...props} />
    </div>
  );
};

export default Step4;
