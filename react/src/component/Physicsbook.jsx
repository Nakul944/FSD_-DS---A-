import React from "react";

const Physicsbook = () => {
  return (
    <div
      style={{
        height: "500px",
        border: "2px solid red",
        backgroundColor: "lightgreen",
        padding: " 20px",
      }}
    >
      <h2>
        <span style={{ color: "red" }}>Book</span>{" "}
        <span style={{ color: "blue" }}>Shop</span>
      </h2>
      <img
        src="https://www.shutterstock.com/shutterstock/photos/1269017023/display_1500/stock-vector-physics-open-book-with-doodles-and-lettering-education-vector-illustration-1269017023.jpg"
        alt=""
        height={"290px"}
        width={"290px"}
      />

      <h3 style={{ color: "black" }}>Physics Book</h3>
      <h5 style={{ color: "black" }}> Price : 600 Rs.</h5>
      <button
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "black",
        }}
      >
        Click to buy
      </button>
    </div>
  );
};

export default Physicsbook;
