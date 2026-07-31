import React from "react";

const Mathsbook = () => {
  return (
    <div
      style={{
        height: "500px",
        border: "2px solid red",
        backgroundColor: "lightblue",
        padding: " 20px",
      }}
    >
      <h2>
        <span style={{ color: "maroon" }}>Book</span>{" "}
        <span style={{ color: "blue" }}>Shop</span>
      </h2>
      <img
        src="https://rukminim2.flixcart.com/image/480/640/xif0q/book/a/q/o/the-maths-book-original-imahfs6qehgpgwkz.jpeg?q=90"
        alt=""
        height={"290px"}
        width={"290px"}
      />

      <h3 style={{ color: "black" }}>Maths Book</h3>
      <h5 style={{ color: "black" }}> Price : 500 Rs.</h5>
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

export default Mathsbook;
