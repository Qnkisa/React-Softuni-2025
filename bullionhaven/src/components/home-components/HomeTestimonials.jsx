import TestimonialElement from "./TestimonialElement";
import testimonialsData from "../../data/testimonialsData";

  
export default function HomeTestimonials(){
    return (
        <section className="home-testimonials">
            <h4>Our Clients About Us</h4>
            <div className="testimonial-grid">
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialElement 
                        key={index}
                        personName={testimonial.personName}
                        testimonialDate={testimonial.date}
                        testimonialText={testimonial.testimonialText}
                    />
                ))}
            </div>
        </section>
    );
}