import React from "react";

const Dog = (props) => {
  return (
    <div className="child">
      <img style={{ width: 150, height: 150 }} src={props.url} alt="hi" />
    </div>
  );
};

export default Dog;
