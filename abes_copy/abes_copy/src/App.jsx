import React from "react";
import Abes_header from "./components/Abes_header";
import Abes_body from "./components/Abes_body";
import Abes_footer from "./components/Abes_footer";
import Abes_glance from "./components/Abes_glance";

const App = () => {
  return (
    <div>
      <Abes_header />
      <Abes_body />
      <Abes_glance />

      <Abes_footer />
    </div>
  );
};

export default App;
