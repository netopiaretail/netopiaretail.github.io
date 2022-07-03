import "./Card.css";

const IconText = ({ icon, iconTitle }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <div>{iconTitle}</div>
    </div>
  );
};

export default IconText;
