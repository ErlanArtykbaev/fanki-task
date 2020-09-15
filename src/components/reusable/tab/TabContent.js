import React from "react";

const TabContent = props => {
  return (
    <div
      onClick={() => props.onClickTab(props.label)}
      className={props.active === props.label ? "tab-active" : "tab-normal"}
    >
      {props.label}
    </div>
  );
};

export default TabContent;
