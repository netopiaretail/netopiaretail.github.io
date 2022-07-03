import "./PricingTable.css";

const PricingTable = () => {
  return (
    <section id="pachete" className="mt-70 section-area py-5">
      <div className="container">
        <div className="pricing">
          <div className="pricing-table table-responsive">
            <input
              type="radio"
              name="pachet-type"
              id="free"
              value="free"
              checked
            />
            <label for="free" className="text-white px-2">
              Gratis
            </label>
            <input
              type="radio"
              name="pachet-type"
              id="standard"
              value="standard"
            />
            <label for="standard" className="text-white px-2">
              Standard
            </label>
            <input
              type="radio"
              name="pachet-type"
              id="premium"
              value="premium"
            />
            <label for="premium" className="text-white px-2">
              Premium
            </label>

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
                <tr>
                  <td className="ptable-title">
                    <span>Administrare</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="ptable-title">
                    Creare cont Casier (aplicație/user)
                  </td>
                  <td>X conturi de Casier</td>
                  <td>număr nelimitat de Casier</td>
                  <td>număr nelimitat de Casier</td>
                </tr>
                <tr>
                  <td className="ptable-title">
                    Creare cont de Administrator/Francizat (user backend)
                  </td>
                  <td>X conturi de Administrator</td>
                  <td>număr nelimitat de Administrator</td>
                  <td>număr nelimitat de Administrator (per companie)</td>
                </tr>
                <tr>
                  <td className="ptable-title">Număr de locații</td>
                  <td>o singură locație</td>
                  <td>număr nelimitat de locații</td>
                  <td>
                    număr nelimitat de locații de la mai multe companii (parte a
                    aceluiași grup)
                  </td>
                </tr>
                <tr>
                  <td className="ptable-title">
                    Număr de conturi de administrare
                  </td>
                  <td>o singură entitate de administrare a contului</td>
                  <td>nelimitat entități de administrare a contului</td>
                  <td>nelimitat entități de administrare a contului</td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    <span>Catalog</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="ptable-title">
                    Număr nelimitat de produse și categorii pe care le poți
                    administra
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td className="ptable-title">
                    SKU - căutare pe bază de caracteristici ce înapoiază
                    rezultate totale precum - cantitate, locație sau categorie
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    Acces la baza de date universală Barcode EAN
                  </td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    <span>Dashboard / Rapoarte</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    Interogare încasări în timp real
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    Interogare încasări pe intervale de timp: zi, săptămână,
                    lună
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    Interogare produse vândute în timp real
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    Interogare produse vândute pe intervale de timp: zi,
                    săptămână, lună
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    Top 10 produse / categorii / locații / clienți
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    Rapoarte complete de vânzări, pe produse sau pe categorii
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">Registru de casă</td>
                  <td>Un singur registru de casă</td>
                  <td>număr nelimitat</td>
                  <td>număr nelimitat</td>
                </tr>
                <tr>
                  <td className="ptable-title">Registru de casă în lei</td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">Registru de casă în valută</td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    <span>Facturare</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="ptable-title">
                    Administrare facturi (emise și încasate pentru fiecare
                    furnizor sau partener în parte)
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    Calcul automat de sold (pentru a ști cât trebuie să încasezi
                    sau să achiți)
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td className="ptable-title">
                    Administrare de chitanțe fiscale pentru plățile cash
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    <span>POS</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr></tr>

                <tr>
                  <td className="ptable-title">Terminal bancar</td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td className="ptable-title">
                    Aplicație POS pentru smartphone (android)
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    Sincronizare instantă cu platforma de retail, casa de
                    marcat, cântar, prin aplicația POS pentru smartphone
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    <span>Marketing</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr></tr>
                <tr>
                  <td className="ptable-title">
                    Integrare cu serviciul web2sms
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    <span>Procesare de card</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr></tr>
                <tr>
                  <td className="ptable-title">
                    Posibilitatea integrării pentru plata cu cardul
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td className="ptable-title">
                    Procesarea tranzacțiilor cu cardul preintegrat cu NETOPIA
                    Payments
                  </td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td className="ptable-title">
                    Comision 0 până depășești X număr de vânzări pe lună
                  </td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    Comision 0 pe toată durata contractului
                  </td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    <span>Suport</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr></tr>

                <tr>
                  <td className="ptable-title">Suport tehnic</td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td className="ptable-title">
                    <span>Integrare custom</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr></tr>

                <tr>
                  <td className="ptable-title">
                    Personalizarea soluției NETOPIA Retail pentru propriile
                    nevoi de business
                  </td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>

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
