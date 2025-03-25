import AwardComponent from "./AwardComponent";
import awardsData from "../data/awardsData";


export default function AboutAwards(){
    return (
        <section className="about-awards">
            <h3>Awards</h3>
            <div className="about-awards-grid">
                {awardsData.map((award, index) => (
                    <AwardComponent 
                        key={index}
                        name={award.awardName}
                        image={award.img}
                        description={award.awardDescription}
                    />
                ))}
            </div>
        </section>
    );
}