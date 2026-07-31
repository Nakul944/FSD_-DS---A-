import React from "react";
import Pizzacard from "./Pizzacard";
import Teacard from "./Teacard";
import Burgercard from "./Burgercard";

const HMfrontpage = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src="https://www.abes.ac.in/assets/Logo.webp"
          alt=""
          width={180}
          height={70}
        />
        <h1 style={{ width: "90%" }}>Welcome to ABES Hotel</h1>
      </header>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Pizzacard />
        <Teacard />
        <Burgercard />
      </div>
      <footer>
        <h4>Address - 19th KM Stone NH-09 Ghaziabad (UP) PIN - 201009</h4>
      </footer>
    </div>
  );
};

export default HMfrontpage;
