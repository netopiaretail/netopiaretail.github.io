import React from "react";

const PricingCard = ({ price, title, styles, link, onClick, children }) => {
  const handleClick = () => {
    const el = document.getElementById("pricing-btn");
    el.firstChild.ariaExpanded = "true";
    el.nextElementSibling.classList.add("show");
  };

  return (
    <div
      className={`pricing-card col-lg-3 col-sm-8 gap-2 wow fadeIn ${styles}`}
      data-wow-duration="1s"
      data-wow-delay="0.2s"
      onClick={onClick}
    >
      <div className="pricing-card-price">
        {price}
        <span>&euro;/lună</span>
      </div>
      <div className={`pricing-card-content gap-2 d-flex flex-column mt-3`}>
        <div className="pricing-card-title">{title}</div>
        <div className="text">{children}</div>
        <a
          href={link}
          onClick={handleClick}
          className="pricing-card-link text-center fs-6 fw-light"
        >
          Vezi detalii
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
