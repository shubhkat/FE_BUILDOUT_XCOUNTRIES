import React from "react";
import MemoizedFlag from "./components/Flag/Flag";

const App = () => {
  return (
    <>
      <MemoizedFlag />
    </>
  );
};

const MemoizedApp = React.memo(App);

export default MemoizedApp;
