const IconText = ({ icon, iconTitle }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <div className="flex-1 text-start">{iconTitle}</div>
    </div>
  );
};

export default IconText;
