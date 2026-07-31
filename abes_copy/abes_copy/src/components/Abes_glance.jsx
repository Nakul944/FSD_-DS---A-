import React from "react";
import "./glance.css";

const Abes_glance = () => {
  return (
    <div>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h1 style={{ width: "80%", color: "black", fontSize: "32px" }}>
            ABES at a Glance
          </h1>
          <p style={{ textAlign: "center" }}>
            For over two decades, ABES has firmly established itself in society
            as epitome of outcome-focused learning. Its enduring reputation
            embodies trust and value.
          </p>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <h2>Est. 2000</h2>
          <h2>8090</h2>
          <h2>24000+</h2>
        </section>
      </main>
    </div>
  );
};

export default Abes_glance;
