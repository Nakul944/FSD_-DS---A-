import React from "react";

const Teacard = () => {
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3j4KRWNWiUdlWyk8geWQacoWabodVFR3X5idkpHVGvQ&s"
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

export default Teacard;
