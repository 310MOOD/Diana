import React from "react";

const Scrollable = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        // border: "1px solid black",
        height: "600px",
        marginLeft: "30px",
        marginRight: "30px",
        marginTop: "20px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scrollable;
