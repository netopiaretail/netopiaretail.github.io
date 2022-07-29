import React from "react";
import { useTranslation } from "react-i18next";

const PricingCard = ({
  price,
  title,
  styles,
  link,
  onClick,
  children,
  from,
}) => {
  const { t } = useTranslation();

  const handleClick = () => {
    const el = document.getElementById("pricing-btn");
    el.firstChild.click();
  };

  return (
    <div
      className={`pricing-card col-lg-3 col-sm-8 gap-2 wow fadeIn ${styles}`}
      data-wow-duration="1s"
      data-wow-delay="0.2s"
      onClick={onClick}
    >
      <div className="pricing-card-price">
        {from && <span>{t("from")}</span>}
        {price}
        <span>&euro;/{t("month")}</span>
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
