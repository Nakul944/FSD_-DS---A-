import React from "react";
import styles from "./glance.module.css";

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
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <h1 style={{ width: "80%", color: "black", fontSize: "32px" }}>
            ABES at a Glance
          </h1>
          <p style={{ display: "flex", alignItems: "center" }}>
            For over two decades, ABES has firmly established itself in society
            as epitome of outcome-focused learning. Its enduring reputation
            embodies trust and value.
          </p>
        </section>

        <section className={styles.glanceView}>
          <section className={styles.info}>
            <h2>Est. 2000</h2>
            <h2>54</h2>
            <h2>15.77 Acres</h2>
            <h2>375+</h2>
            <h2>107.5 Lacs</h2>
          </section>

          <section className={styles.info}>
            <h2>8090</h2>
            <h2>60 LPA+</h2>
            <h2>500+</h2>
            <h2>9</h2>
          </section>

          <section className={styles.info}>
            <h2>24000+</h2>
            <h2>1692</h2>
            <h2>2690+</h2>
            <h2>15 Lacs</h2>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Abes_glance;
