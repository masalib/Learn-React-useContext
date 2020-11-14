import React from "react";
import Grandchild from "./Grandchild";

const ChildrenApp = () => {
  console.log("children");
  return (
    <>
      <div>
        <h2>childrenApptest</h2>
        <Grandchild />
      </div>
    </>
  );
};

export default ChildrenApp;
