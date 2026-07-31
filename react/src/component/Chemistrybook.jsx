import React from "react";

const Chemistrybook = () => {
  return (
    <div
      style={{
        height: "500px",
        border: "2px solid red",
        backgroundColor: "coral",
        padding: " 20px",
      }}
    >
      <h2>
        <span style={{ color: "maroon" }}>Book</span>{" "}
        <span style={{ color: "blue" }}>Shop</span>
      </h2>
      <img
        src="https://m.media-amazon.com/images/I/715cwMkhspL._AC_UF1000,1000_QL80_.jpg"
        alt=""
        height={"290px"}
        width={"290px"}
      />

      <h3 style={{ color: "black" }}>Chemistry Book</h3>
      <h5 style={{ color: "black" }}> Price : 700 Rs.</h5>
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

export default Chemistrybook;
