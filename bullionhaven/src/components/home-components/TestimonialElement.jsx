export default function TestimonialElement({personName, testimonialDate, testimonialText}){
    return (
        <div className="testimonial-div">
            <div className="star-flex">
                <img src="/website-icons/star-icon.png" alt="" />
                <img src="/website-icons/star-icon.png" alt="" />
                <img src="/website-icons/star-icon.png" alt="" />
                <img src="/website-icons/star-icon.png" alt="" />
                <img src="/website-icons/star-icon.png" alt="" />
            </div>
            <p className="tesitimonial-person-name">{personName}</p>
            <p className="testimonial-date">{testimonialDate}</p>
            <span>{testimonialText}</span>
        </div>
    );
}