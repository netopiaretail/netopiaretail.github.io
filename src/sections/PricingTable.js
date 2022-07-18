import { useCallback } from "react";
import featureCategories from "../resources/pricing.json";

const PricingTable = () => {
  const renderFeature = useCallback((feature) => {
    return (
      <tr key={feature.name}>
        <td className="feature-name">{feature.name}</td>
        <td>
          {feature.textTier1 && feature.textTier1}
          {feature.iconTier1 && <i className={feature.iconTier1} />}
        </td>
        <td>
          {feature.textTier2 && feature.textTier2}
          {feature.iconTier2 && <i className={feature.iconTier2} />}
        </td>
        <td>
          {feature.textTier3 && feature.textTier3}
          {feature.iconTier3 && <i className={feature.iconTier3} />}
        </td>
      </tr>
    );
  }, []);
  const renderFeatureCategory = useCallback((featureCategory) => {
    return (
      <>
        <tr>
          <td className="feature-category-name">{featureCategory.name}</td>
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
              Gratis
            </label>
            <label htmlFor="standard" className="p-2">
              Standard
            </label>
            <label htmlFor="premium" className="p-2">
              Premium
            </label>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className="text-start align-middle">
                  <div className="fs-1">Pachete</div>
                </th>
                <th>
                  <span className="fw-normal">Gratis</span>
                  <br />
                  <span className="price">0 &euro;</span>
                  <span className="period">/luna</span>
                  <br />
                  <span className="link">
                    <a href="/">Alege pachetul</a>
                  </span>
                </th>
                <th>
                  <span className="fw-normal">Standard</span>
                  <br />
                  <span className="price">10 &euro;</span>
                  <span className="period">/luna</span>
                  <br />
                  <span className="link">
                    <a href="/">Alege pachetul</a>
                  </span>
                </th>
                <th>
                  <span className="fw-normal">Premium</span>
                  <br />
                  <span className="price">20 &euro;</span>
                  <span className="period">/luna</span>
                  <br />
                  <span className="link">
                    <a href="/">Alege pachetul</a>
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
                    Începe gratuit
                  </a>
                </td>
                <td>
                  <a className="btn main-btn" href="/">
                    Înscrie-te
                  </a>
                </td>
                <td>
                  <a className="btn main-btn" href="#contact">
                    Contactează-ne
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
