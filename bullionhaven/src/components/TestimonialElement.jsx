export default function TestimonialElement({personName, testimonialDate, testimonialText}){
    return (
        <div className="testimonial-div">
            <div className="star-flex">
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>
            <p className="tesitimonial-person-name">{personName}</p>
            <p className="testimonial-date">{testimonialDate}</p>
            <span>{testimonialText}</span>
        </div>
    );
}