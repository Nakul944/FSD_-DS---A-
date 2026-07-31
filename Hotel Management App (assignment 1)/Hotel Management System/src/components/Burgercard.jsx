import React from "react";

const Burgercard = () => {
  return (
    <div>
      <div
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "#0000005d",
          margin: "20px",
          borderRadius: "40px",
          padding: "20px",
        }}
      >
        <img
          src="https://media.istockphoto.com/id/2061716709/photo/grilled-rib-burger.jpg?s=612x612&w=0&k=20&c=QS37W9zjBE3GoOeR8ay3k_DS7oXPH07MBg-WHY5Joac="
          alt=""
          width={350}
          height={250}
        />
        <h1>Pizza</h1>
        <h3>Price : 200 Rs.</h3>
      </div>
    </div>
  );
};

export default Burgercard;
