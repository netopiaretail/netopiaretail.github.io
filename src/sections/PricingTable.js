import { useCallback } from "react";
import featureCategories from "../resources/pricing.json";

const PricingTable = () => {
  const renderFeature = useCallback((feature) => {
    return (
      <tr key={feature.name}>
        <td className="ptable-title">{feature.name}</td>
        <td>
          {feature.textTier1 && feature.textTier1}
          {feature.iconTier1 && (
            <i className={`fa-solid ${feature.iconTier1}`} />
          )}
        </td>
        <td>
          {feature.textTier2 && feature.textTier2}
          {feature.iconTier2 && (
            <i className={`fa-solid ${feature.iconTier2}`} />
          )}
        </td>
        <td>
          {feature.textTier3 && feature.textTier3}
          {feature.iconTier3 && (
            <i className={`fa-solid ${feature.iconTier3}`} />
          )}
        </td>
      </tr>
    );
  }, []);
  const renderFeatureCategory = useCallback((featureCategory) => {
    return (
      <>
        <tr>
          <td className="ptable-title">
            <span>{featureCategory.name}</span>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {featureCategory.features.map(renderFeature)}
      </>
    );
  }, []);

  return (
    <section id="pricing" className="mt-70 section-area py-5">
      <div className="container">
        <div className="pricing wow fadeInUpBig">
          <div className="pricing-table table-responsive">
            <input type="radio" name="pricing-type" id="free" value="free" />
            <input
              type="radio"
              name="pricing-type"
              id="standard"
              value="standard"
            />
            <input
              type="radio"
              name="pricing-type"
              id="premium"
              value="premium"
            />

            <div id="labels" className="p-3 text-center">
              <label htmlFor="free" className="p-2">
                Gratis
              </label>
              <label htmlFor="standard" className="p-2">
                Standard
              </label>
              <label htmlFor="premium" className="p-2">
                Premium
              </label>
            </div>

            <table className="table text-center" id="pricing-table">
              <thead>
                <tr>
                  <th className="text-start align-middle">
                    <div className="fs-1">Pachete</div>
                  </th>
                  <th id="free-th">
                    <span className="fw-normal">Gratis</span>
                    <br />
                    <span className="ptable-price">0.0 &euro;</span>
                    <span className="ptable-period">/luna</span>
                    <br />
                    <span className="ptable-link">
                      <a href="/">Alege pachetul</a>
                    </span>
                  </th>
                  <th className="highlight" id="standard-th">
                    <span className="fw-normal">Standard</span>
                    <br />
                    <span className="ptable-price">10.0 &euro;</span>
                    <span className="ptable-period">/luna</span>
                    <br />
                    <span className="ptable-link">
                      <a href="/">Alege pachetul</a>
                    </span>
                  </th>
                  <th id="premium-th">
                    <span className="fw-normal">Premium</span>
                    <br />
                    <span className="ptable-price">20.0 &euro;</span>
                    <span className="ptable-period">/luna</span>
                    <br />
                    <span className="ptable-link">
                      <a href="/">Alege pachetul</a>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureCategories.map(renderFeatureCategory)}
                <tr className="section-content">
                  <td>&nbsp;</td>
                  <td id="first-th">
                    <a className="btn main-btn" href="/">
                      Începe gratuit
                    </a>
                  </td>
                  <td id="second-th">
                    <a className="btn main-btn" href="/">
                      Înscrie-te
                    </a>
                  </td>
                  <td id="third-th">
                    <a className="btn main-btn" href="#contact">
                      Contactează-ne
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
