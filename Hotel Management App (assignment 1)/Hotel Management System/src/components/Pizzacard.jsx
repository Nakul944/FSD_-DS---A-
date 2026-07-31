import React from "react";

const Pizzacard = () => {
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
          src="https://img.magnific.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?semt=ais_hybrid&w=740&q=80"
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

export default Pizzacard;
