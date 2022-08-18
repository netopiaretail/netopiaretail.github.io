import { useCallback } from "react";
import featureCategories from "../resources/pricing.json";
import { Trans, useTranslation } from "react-i18next";

const PricingTable = () => {
  const { t } = useTranslation();

  const renderFeature = useCallback((feature) => {
    return (
      <tr key={feature.name}>
        <td className="feature-name">
          <Trans i18nKey={feature.name}>
            {feature.link ? (
              <a href={feature.link} target="_blank" rel="noreferrer">
                {feature.name}
              </a>
            ) : (
              <span>{feature.name}</span>
            )}
          </Trans>
        </td>
        <td>
          {t(feature.textTier1) && t(feature.textTier1)}
          {feature.iconTier1 && <i className={feature.iconTier1} />}
        </td>
        <td>
          {t(feature.textTier2) && t(feature.textTier2)}
          {feature.iconTier2 && <i className={feature.iconTier2} />}
        </td>
        <td>
          {t(feature.textTier3) && t(feature.textTier3)}
          {feature.iconTier3 && <i className={feature.iconTier3} />}
        </td>
      </tr>
    );
  }, []);
  const renderFeatureCategory = useCallback((featureCategory) => {
    return (
      <>
        <tr>
          <td className="feature-category-name">{t(featureCategory.name)}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {featureCategory.features.map(renderFeature)}
      </>
    );
  }, []);

  return (
    <section>
      <div className="container">
        <div className="pricing-table table-responsive">
          <input type="radio" name="pricing-type" id="free" />
          <input type="radio" name="pricing-type" id="standard" />
          <input type="radio" name="pricing-type" id="premium" />
          <div id="labels" className="pb-3 text-center">
            <label htmlFor="free" className="p-2">
              {t("section10.free")}
            </label>
            <label htmlFor="standard" className="p-2">
              {t("section10.standard")}
            </label>
            <label htmlFor="premium" className="p-2">
              {t("section10.premium")}
            </label>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className="text-start align-middle">
                  <div className="fs-1">{t("menu.l4")}</div>
                </th>
                <th>
                  <span className="fw-normal"> {t("section10.free")}</span>
                  <br />
                  <span className="price">0 &euro;</span>
                  <span className="period">/{t("month")}</span>
                  <br />
                  <span className="link">
                    <a href="/">{t("choose")}</a>
                  </span>
                </th>
                <th>
                  <span className="fw-normal"> {t("section10.standard")}</span>
                  <br />
                  <span className="price">100 &euro;</span>
                  <span className="period">/{t("month")}</span>
                  <br />
                  <span className="link">
                    <a href="/">{t("choose")}</a>
                  </span>
                </th>
                <th>
                  <span className="fw-normal"> {t("section10.premium")}</span>
                  <br />
                  <span className="price">200 &euro;</span>
                  <span className="period">/{t("month")}</span>
                  <br />
                  <span className="link">
                    <a href="/">{t("choose")}</a>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>{featureCategories.map(renderFeatureCategory)}</tbody>
            <tfoot>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <a className="btn main-btn" href="/">
                    {t("hero.btn")}
                  </a>
                </td>
                <td>
                  <a className="btn main-btn" href="/">
                    {t("menu.btn1")}
                  </a>
                </td>
                <td>
                  <a className="btn main-btn" href="#contact">
                    {t("contactUs")}
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
