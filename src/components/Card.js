const Card = ({ image, imageTitle, title, content, styles }) => {
  return (
    <div
      className={`card wow fadeIn`}
      data-wow-duration="1s"
      data-wow-delay="0.2s"
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={imageTitle} height={"100px"} />
        </div>
      )}
      <div className={`card-content mt-3  ${styles}`}>
        <h4 className="card-title">{title}</h4>
        <p className="text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
