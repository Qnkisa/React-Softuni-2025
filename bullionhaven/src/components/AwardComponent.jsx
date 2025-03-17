export default function AwardComponent({name, image, description}){
    return (
        <div className="award-component">
            <img src={image} alt="" />
            <div className="award-component-line"></div>
            <p className="award-name">{name}</p>
            <span className="award-description">{description}</span>
        </div>
    )
}