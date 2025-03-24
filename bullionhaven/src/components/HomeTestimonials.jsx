import { useState } from "react";
import TestimonialElement from "./TestimonialElement";

const testimonials = [
    { personName: "John Carter", date: "March 10, 2024", testimonialText: "Fantastic service! The gold bars I purchased were of top quality and delivered quickly." },
    { personName: "Sarah Lindberg", date: "Feb 28, 2024", testimonialText: "I was hesitant at first, but BullionHaven made investing in silver a breeze!" },
    { personName: "David Miller", date: "March 5, 2024", testimonialText: "Great prices and excellent customer support. Highly recommended!" },
    { personName: "Emily Thompson", date: "Feb 15, 2024", testimonialText: "I love the variety of bullion coins available. Will definitely shop again!" },
    { personName: "James Wilson", date: "Jan 20, 2024", testimonialText: "Fast shipping and transparent pricing. The best place to buy gold online!" },
    { personName: "Sophia Hernandez", date: "March 12, 2024", testimonialText: "Very trustworthy and reliable. Their customer service was top-notch." },
    { personName: "Michael Brown", date: "Feb 18, 2024", testimonialText: "I was impressed with how easy it was to compare different bullion options." },
    { personName: "Emma Davis", date: "Jan 5, 2024", testimonialText: "Great experience! My silver coins arrived in perfect condition." },
    { personName: "Robert White", date: "March 8, 2024", testimonialText: "The premium on gold bars was very reasonable. No hidden fees!" },
    { personName: "Laura Martinez", date: "Feb 10, 2024", testimonialText: "My go-to store for all bullion investments. Secure transactions and great deals." },
    { personName: "Daniel Carter", date: "March 15, 2024", testimonialText: "Their bullion investment guides were super helpful. I feel confident in my purchase!" },
    { personName: "Olivia Bennett", date: "Feb 22, 2024", testimonialText: "I love their customer support. They answered all my questions before I made a purchase!" }
];
  
export default function HomeTestimonials(){
    return (
        <section className="home-testimonials">
            <h4>Our Clients About Us</h4>
            <div className="testimonial-grid">
                {testimonials.map((testimonial, index) => (
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