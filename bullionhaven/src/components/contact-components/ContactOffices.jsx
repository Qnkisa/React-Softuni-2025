import { useState } from "react";
import OfficeDetails from "./OfficeDetails";
import contactOfficesData from "../../data/contactOfficesData";

export default function ContactOffices(){
    const [selectedOffice, setSelectedOffice] = useState(contactOfficesData[0]);

    return (
        <section className="contact-offices">
          <div className="office-navigation">
            <h3>Our Offices</h3>
            <ul>
              {contactOfficesData.map((office, index) => (
                <li
                  key={index}
                  className={`office-name ${
                    selectedOffice.name === office.name
                      ? "selected-office"
                      : "non-selected-office"
                  }`}
                  onClick={() => setSelectedOffice(office)}
                >
                  {office.name}
                </li>
              ))}
            </ul>
          </div>
          <OfficeDetails
            name={selectedOffice.name}
            address={selectedOffice.address}
            level={selectedOffice.level}
            phone={selectedOffice.phone}
            email={selectedOffice.email}
            hours={selectedOffice.hours}
          />
        </section>
      );
}