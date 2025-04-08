export default function EmployeeComponent({name, img, position}){
    return (
        <div key={name} className="employee-div">
            <img src={img} alt={name} className="employee-image" />
            <div className="employee-div-helper">
                <p className="employee-name">{name}</p>
                <span className="employee-position">{position}</span>
                <div className="employee-div-bg"></div>
            </div>
          </div>
    );
}