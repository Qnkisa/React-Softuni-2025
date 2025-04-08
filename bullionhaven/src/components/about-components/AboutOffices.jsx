import React, { useState } from "react";
import EmployeeComponent from "./EmployeeComponent";
import officesData from "../../data/officesData";
import employeesData from "../../data/employeesData";



export default function AboutOffices(){
  const [selectedOffice, setSelectedOffice] = useState(officesData[0]);

  return (
    <section className="about-employees">
      <div className="about-offices">
        {officesData.map((office) => (
          <button
            key={office}
            className={`about-selection-button ${
              selectedOffice === office ? "about-selected" : "about-non-selected"
            }`}
            onClick={() => setSelectedOffice(office)}
          >
            {office}
          </button>
        ))}
      </div>
      <div className="about-employees-images">
        {employeesData[selectedOffice]?.map((employee) => (
          <EmployeeComponent
            key={employee.name}
            name={employee.name}
            img={employee.img}
            position={employee.position}
          />
        ))}
      </div>
    </section>
  );
};

