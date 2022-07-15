const IconText = ({ icon, iconTitle }) => {
  return (
    <div
      className="icon-container d-flex flex-column align-items-center justify-content-center"
      style={{ backgroundImage: icon }}
    >
      <div className="icon-card">
        <i className={icon}></i>
      </div>
      <div className="icon-text ">{iconTitle}</div>
    </div>
  );
};

export default IconText;
