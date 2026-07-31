import React from "react";
import "./style.css";
const Abes_header = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <img
          src="https://www.abes.ac.in/assets/Logo.webp"
          alt=""
          width={250}
          height={100}
        />
        <section>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              listStyleType: "none",
              color: "white",
            }}
          >
            <a
              href=""
              style={{
                padding: "10px",
                fontSize: "1.3vw",
                textDecoration: "none",
                color: "white",
              }}
            >
              <li>About</li>
            </a>
            <a
              href=""
              style={{
                padding: "10px",
                fontSize: "1.3vw",
                textDecoration: "none",
                color: "white",
              }}
            >
              <li>Academics</li>
            </a>
            <a
              href=""
              style={{
                padding: "10px",
                fontSize: "1.3vw",
                textDecoration: "none",
                color: "white",
              }}
            >
              <li>Admissions</li>
            </a>
            <a
              href=""
              style={{
                padding: "10px",
                fontSize: "1.3vw",
                textDecoration: "none",
                color: "white",
              }}
            >
              <li>Club</li>
            </a>
            <a
              href=""
              style={{
                padding: "10px",
                fontSize: "1.3vw",
                textDecoration: "none",
                color: "white",
              }}
            >
              <li>Campus</li>
            </a>
            <a
              href=""
              style={{
                padding: "10px",
                fontSize: "1.3vw",
                textDecoration: "none",
                color: "white",
              }}
            >
              <li>Placement</li>
            </a>
            <a
              href=""
              style={{
                padding: "10px",
                fontSize: "1.3vw",
                textDecoration: "none",
                color: "white",
              }}
            >
              <li>Research</li>
            </a>
            <a
              href=""
              style={{
                padding: "10px",
                fontSize: "1.3vw",
                textDecoration: "none",
                color: "white",
              }}
            >
              <li>Entrepenuership</li>
            </a>
          </ul>
        </section>
      </header>
    </div>
  );
};
export default Abes_header;
