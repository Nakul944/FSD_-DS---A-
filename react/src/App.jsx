import React from "react";
import Book from "./component/Book";
import Chemistrybook from "./component/Chemistrybook";
import Physicsbook from "./component/Physicsbook";
import Mathsbook from "./component/Mathsbook";

const App = () => {
  return (
    <div>
      <Chemistrybook />
      <Physicsbook />
      <Mathsbook />
    </div>
  );
};

export default App;
