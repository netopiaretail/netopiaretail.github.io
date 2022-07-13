const PricingCard = ({ price, title, styles, link, onClick, children }) => {
  return (
    <div
      className={`pricing-card col-3 gap-4 wow fadeIn ${styles}`}
      data-wow-duration="1s"
      data-wow-delay="0.2s"
      onClick={onClick}
    >
      <div className="pricing-card-price">
        {price}
        <span>&euro;/lună</span>
      </div>
      <div className={`pricing-card-content gap-4 d-flex flex-column mt-3`}>
        <div className="pricing-card-title">{title}</div>
        <p className="text">{children}</p>
        <a href={link} className="pricing-card-link text-center fs-6 fw-light">
          Vezi detalii
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
