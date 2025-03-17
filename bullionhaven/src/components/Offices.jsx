import React, { useState } from "react";

const offices = [
  "New York, Empire State Building",
  "Los Angeles, Sunset Tower",
  "Chicago, Willis Tower",
  "Houston, Galleria",
  "Miami, Brickell Tower",
  "San Francisco, Market Street",
  "Boston, Prudential Tower",
  "Administration office",
];

const employeesData = {
    "New York, Empire State Building": [
      { name: "John Doe", position: "Manager", img: "../src/assets/people-photos/john-doe-edited.png" },
      { name: "Jane Smith", position: "Sales Lead", img: "../src/assets/people-photos/jane-smith-edited.png" },
      { name: "Emily Johnson", position: "HR Specialist", img: "../src/assets/people-photos/emily-johnson-edited.png" },
      { name: "Robert Brown", position: "IT Support", img: "../src/assets/people-photos/robert-brown-edited.png" },
      { name: "Michael Green", position: "Operations Manager", img: "../src/assets/people-photos/michael-green-edited.png" },
    ],
    "Los Angeles, Sunset Tower": [
      { name: "Mike Johnson", position: "Senior Dealer", img: "../src/assets/people-photos/mike-johnson-edited.png" },
      { name: "Sara Connor", position: "Regional Manager", img: "../src/assets/people-photos/sara-connor-edited.png" },
      { name: "David White", position: "Marketing Lead", img: "../src/assets/people-photos/david-white-edited.png" },
      { name: "Sophia Lee", position: "Customer Relations", img: "../src/assets/people-photos/sophia-lee-edited.png" },
      { name: "Ethan Martin", position: "Business Analyst", img: "../src/assets/people-photos/ethan-martin-edited.png" },
    ],
    "Chicago, Willis Tower": [
      { name: "William Scott", position: "Branch Manager", img: "../src/assets/people-photos/william-scott-edited.png" },
      { name: "Natalie Adams", position: "Account Executive", img: "../src/assets/people-photos/natalie-adams-edited.png" },
      { name: "Henry Wilson", position: "Finance Analyst", img: "../src/assets/people-photos/henry-wilson-edited.png" },
      { name: "Olivia Harris", position: "HR Consultant", img: "../src/assets/people-photos/olivia-harris-edited.png" },
      { name: "Jake Thompson", position: "Sales Representative", img: "../src/assets/people-photos/jake-thompson-edited.png" },
      { name: "Emma Walker", position: "Training Coordinator", img: "../src/assets/people-photos/emma-walker-edited.png" },
    ],
    "Houston, Galleria": [
      { name: "Lucas Carter", position: "Project Manager", img: "../src/assets/people-photos/lucas-carter-edited.png" },
      { name: "Chloe Robinson", position: "Senior Engineer", img: "../src/assets/people-photos/chloe-robinson-edited.png" },
      { name: "Daniel Baker", position: "Logistics Coordinator", img: "../src/assets/people-photos/daniel-baker-edited.png" },
      { name: "Grace Mitchell", position: "Operations Supervisor", img: "../src/assets/people-photos/grace-mitchell-edited.png" },
      { name: "Benjamin Rogers", position: "Technical Consultant", img: "../src/assets/people-photos/benjamin-rogers-edited.png" },
      { name: "Ava Hall", position: "Client Manager", img: "../src/assets/people-photos/ava-hall-edited.png" },
    ],
    "Miami, Brickell Tower": [
      { name: "Daniel Evans", position: "Investment Advisor", img: "../src/assets/people-photos/daniel-evans-edited.png" },
      { name: "Sophia Carter", position: "Financial Consultant", img: "../src/assets/people-photos/sophia-carter-edited.png" },
      { name: "Ethan Miller", position: "Real Estate Manager", img: "../src/assets/people-photos/ethan-miller-edited.png" },
      { name: "Madison Young", position: "Business Development", img: "../src/assets/people-photos/madison-young-edited.png" },
      { name: "Jack Wilson", position: "HR Coordinator", img: "../src/assets/people-photos/jack-wilson-edited.png" },
    ],
    "San Francisco, Market Street": [
      { name: "Mason Wright", position: "Tech Lead", img: "../src/assets/people-photos/mason-wright-edited.png" },
      { name: "Ella Anderson", position: "Product Manager", img: "../src/assets/people-photos/ella-anderson-edited.png" },
      { name: "Liam King", position: "Data Analyst", img: "../src/assets/people-photos/liam-king-edited.png" },
      { name: "Zoe Scott", position: "Design Specialist", img: "../src/assets/people-photos/zoe-scott-edited.png" },
      { name: "Noah Bennett", position: "Security Analyst", img: "../src/assets/people-photos/noah-bennett-edited.png" },
      { name: "Avery Russell", position: "Software Engineer", img: "../src/assets/people-photos/avery-russell-edited.png" },
    ],
    "Boston, Prudential Tower": [
      { name: "Ryan Phillips", position: "HR Director", img: "../src/assets/people-photos/ryan-phillips-edited.png" },
      { name: "Olivia Adams", position: "Recruitment Specialist", img: "../src/assets/people-photos/olivia-adams-edited.png" },
      { name: "James Foster", position: "Compliance Officer", img: "../src/assets/people-photos/james-foster-edited.png" },
      { name: "Emily Brooks", position: "Operations Manager", img: "../src/assets/people-photos/emily-brooks-edited.png" },
      { name: "Matthew Sanders", position: "Finance Director", img: "../src/assets/people-photos/matthew-sanders-edited.png" },
      { name: "Grace Peterson", position: "Legal Consultant", img: "../src/assets/people-photos/grace-peterson-edited.png" },
    ],
    "Administration office": [
      { name: "Sarah Morgan", position: "CEO", img: "../src/assets/people-photos/sarah-morgan-edited.png" },
      { name: "William Barnes", position: "CFO", img: "../src/assets/people-photos/william-barnes-edited.png" },
      { name: "Isabella Ross", position: "Head of HR", img: "../src/assets/people-photos/isabella-ross-edited.png" },
      { name: "Alexander Hughes", position: "IT Director", img: "../src/assets/people-photos/alexander-hughes-edited.png" },
      { name: "Charlotte Edwards", position: "Marketing Director", img: "../src/assets/people-photos/charlotte-edwards-edited.png" },
      { name: "Benjamin Carter", position: "Chief Strategy Officer", img: "../src/assets/people-photos/benjamin-carter-edited.png" },
    ],
};

const Offices = () => {
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  return (
    <div className="about-employees">
      <div className="about-offices">
        {offices.map((office) => (
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
          <div key={employee.name} className="employee-div">
            <img src={employee.img} alt={employee.name} className="employee-image" />
            <div className="employee-div-helper">
                <p className="employee-name">{employee.name}</p>
                <span className="employee-position">{employee.position}</span>
                <div className="employee-div-bg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offices;
