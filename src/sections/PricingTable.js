import "./PricingTable.scss";
import { useCallback } from "react";

const featureCategories = [
  {
    name: "Administrare",
    features: [
      {
        name: "Creare cont Casier (aplicație/user)",
        textTier1: "X conturi de Casier",
        textTier2: "număr nelimitat de Casierr",
        textTier3: "număr nelimitat de Casier",
      },
      {
        name: "Creare cont de Administrator/Francizat (user backend)",
        textTier1: "X conturi de Administrator",
        textTier2: "număr nelimitat de Administrator",
        textTier3: "număr nelimitat de Administrator (per companie)",
      },
      {
        name: "Număr de locații",
        textTier1: "o singură locație",
        textTier2: "număr nelimitat de locații",
        textTier3:
          "număr nelimitat de locații de la mai multe companii (parte a aceluiași grup)",
      },
      {
        name: "Număr de conturi de administrare",
        textTier1: "o singură entitate de administrare a contului",
        textTier2: "nelimitat entități de administrare a contului",
        textTier3: "nelimitat entități de administrare a contului",
      },
    ],
  },
  {
    name: "Catalog",
    features: [
      {
        name: "Număr nelimitat de produse și categorii pe care le poți administra",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "SKU - căutare pe bază de caracteristici ce înapoiază rezultate totale precum - cantitate, locație sau categorie",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Acces la baza de date universală Barcode EAN",
        iconTier1: "fa-minus",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
    ],
  },
  {
    name: "Dashboard / Rapoarte",
    features: [
      {
        name: "Interogare încasări în timp real",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Interogare încasări pe intervale de timp: zi, săptămână, lună",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Interogare produse vândute în timp real",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Interogare produse vândute pe intervale de timp: zi, săptămână, lună",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Top 10 produse / categorii / locații / clienți",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Rapoarte complete de vânzări, pe produse sau pe categorii",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Registru de casă",
        textTier1: "Un singur registru de casă",
        textTier2: "număr nelimitat",
        textTier3: "număr nelimitat",
      },
      {
        name: "Registru de casă în lei",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Registru de casă în valută",
        iconTier1: "fa-minus",
        iconTier2: "fa-minus",
        iconTier3: "fa-check",
      },
    ],
  },
  {
    name: "Facturare",
    features: [
      {
        name: "Administrare facturi (emise și încasate pentru fiecare furnizor sau partener în parte)",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Calcul automat de sold (pentru a ști cât trebuie să încasezi sau să achiți)",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Administrare de chitanțe fiscale pentru plățile cash",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
    ],
  },
  {
    name: "POS",
    features: [
      {
        name: "Terminal bancar",
        iconTier1: "fa-minus",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Aplicație POS pentru smartphone (android)",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Sincronizare instantă cu platforma de retail, casa de marcat, cântar, prin aplicația POS pentru smartphone",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
    ],
  },
  {
    name: "Marketing",
    features: [
      {
        name: "Integrare cu serviciul web2sms",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
    ],
  },
  {
    name: "Procesare de card",
    features: [
      {
        name: "Posibilitatea integrării pentru plata cu cardul",
        iconTier1: "fa-check",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Procesarea tranzacțiilor cu cardul preintegrat cu NETOPIA Payments",
        iconTier1: "fa-minus",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
      {
        name: "Comision 0 până depășești X număr de vânzări pe lună",
        iconTier1: "fa-minus",
        iconTier2: "fa-check",
        iconTier3: "fa-minus",
      },
      {
        name: "Comision 0 pe toată durata contractului",
        iconTier1: "fa-minus",
        iconTier2: "fa-minus",
        iconTier3: "fa-check",
      },
    ],
  },
  {
    name: "Suport",
    features: [
      {
        name: "Suport tehnic",
        iconTier1: "fa-minus",
        iconTier2: "fa-check",
        iconTier3: "fa-check",
      },
    ],
  },
  {
    name: "Integrare custom",
    features: [
      {
        name: "Personalizarea soluției NETOPIA Retail pentru propriile nevoi de business",
        iconTier1: "fa-minus",
        iconTier2: "fa-minus",
        iconTier3: "fa-check",
      },
    ],
  },
];

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
        <div className="pricing">
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

            <table className="table text-center mt-4" id="pricing-table">
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
