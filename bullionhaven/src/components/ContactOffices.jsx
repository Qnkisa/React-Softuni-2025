import { useState } from "react";
import OfficeDetails from "./OfficeDetails";

const offices = [
    {
      name: "New York, Empire State Building",
      address: "350 5th Ave, New York, NY 10118",
      level: "Level 5",
      phone: "(212) 555-1234",
      email: "nyc@bullionhaven.com",
      hours: "09:00 - 18:00"
    },
    {
      name: "Los Angeles, Sunset Tower",
      address: "8358 Sunset Blvd, Los Angeles, CA 90069",
      level: "Level 3",
      phone: "(310) 555-5678",
      email: "la@bullionhaven.com",
      hours: "09:00 - 18:00"
    },
    {
      name: "Chicago, Willis Tower",
      address: "233 S Wacker Dr, Chicago, IL 60606",
      level: "Level 7",
      phone: "(312) 555-9876",
      email: "chicago@bullionhaven.com",
      hours: "09:00 - 18:00"
    },
    {
      name: "Houston, Galleria",
      address: "5085 Westheimer Rd, Houston, TX 77056",
      level: "Level 2",
      phone: "(713) 555-4321",
      email: "houston@bullionhaven.com",
      hours: "09:00 - 18:00"
    },
    {
      name: "Miami, Brickell Tower",
      address: "801 Brickell Ave, Miami, FL 33131",
      level: "Level 10",
      phone: "(305) 555-6789",
      email: "miami@bullionhaven.com",
      hours: "09:00 - 18:00"
    },
    {
      name: "San Francisco, Market Street",
      address: "1 Market St, San Francisco, CA 94105",
      level: "Level 4",
      phone: "(415) 555-2468",
      email: "sf@bullionhaven.com",
      hours: "09:00 - 18:00"
    },
    {
      name: "Boston, Prudential Tower",
      address: "800 Boylston St, Boston, MA 02199",
      level: "Level 6",
      phone: "(617) 555-1357",
      email: "boston@bullionhaven.com",
      hours: "09:00 - 18:00"
    }
];
  

export default function ContactOffices(){
    const [selectedOffice, setSelectedOffice] = useState(offices[0]);

    return (
        <section className="contact-offices">
          <div className="office-navigation">
            <h3>Our Offices</h3>
            <ul>
              {offices.map((office, index) => (
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