import React from "react";
import "./style.css";

const Abes_footer = () => {
  return (
    <div>
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <section>
          <h3>Mandatory Disclosures</h3>
          <section style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                padding: "5px",
              }}
            >
              <p>Mandatory Disclosure</p>
              <p>AICTE Approval</p>
              <p>University Affiliation</p>
              <p>Letter Education</p>
              <p>Audited Statement</p>
              <p>Student's Request Form(SIS)</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                padding: "5px",
              }}
            >
              <p>Hostel Rule Booklet</p>
              <p>Refund Policy</p>
              <p>College Policy </p>
              <p>Grievance Redressal Portal</p>
              <p>All Committees</p>
              <p>Report ARIIA 2020</p>
              <p>TEDxABESEC'24 Brochure</p>
              <p>Circulars/Notices</p>
              <p>UGC Section2(f) certificate</p>
              <p>Newsletters</p>
            </div>
          </section>
        </section>
        <section>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>Address</h3>
            <p>19th KM Stone</p>
            <p>NH-09 Ghaziabad</p>
            <p>PIN - 201009</p>
            <p>Phone no. 12071351120</p>
            <p>Email: info@abes.ac.in</p>
          </div>
        </section>

        <section>
          <h3>Important Links</h3>
          {/* <div style={{ display: "flex", flexDirection: "column" }}>
            <p>
              Mandatory Disclosure AICTE Approval University Affiliation Letter
              Education Verification Audited Statement Student's Request Form
              (SIS) Academic Calendar Barrier Free Environment Certificate
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            Mandatory Disclosure AICTE Approval University Affiliation Letter
            Education Verification Audited Statement Student's Request Form
            (SIS) Academic Calendar Barrier Free Environment Certificate
          </div> */}
        </section>
      </footer>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "20px",
          marginTop: "50px",
        }}
      >
        <img
          src="https://www.abes.ac.in/assets/logo-9.webp"
          alt=""
          width={150}
          height={50}
        />
      </div>
    </div>
  );
};

export default Abes_footer;
