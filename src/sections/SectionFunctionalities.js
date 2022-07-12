import Accordion from "react-bootstrap/Accordion";

const SectionFunctionalities = () => {
  return (
    <section id="functionalitati" className="section-area py-5">
      <div className="container">
        <div className="text-center pb-40">
          <h3 className="title">
            Acces gratuit <span>la funcționalități cheie</span>
          </h3>
        </div>
        <div className="row align-items-start pt-5">
          <Accordion className="row text-start">
            <div className="col-lg-6">
              <Accordion.Item
                className="shadow mb-4 p-2 border-0 wow fadeInLeftBig"
                eventKey="0"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-solid fa-user-gear"></i>
                    Administrare
                  </span>
                  <br />
                  Poți administra întreaga activitate a companiei dintr-o
                  singură pagină web. Creezi conturi de Casier și Manager, cu
                  drepturi limitate.
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <b>Contul de Casier</b> este destinat angajatului care
                    interacționează cu clienții și care scanează produsele, le
                    înregistrează în casă. Nu poate să adauge sau să elimine
                    produse, sau orice alte tipuri de informații despre
                    companie.
                  </p>
                  <p className="py-2">
                    <b>Contul de Manager</b> poate să adauge sau să scoată
                    produse din platformă, dar și să creeze noi categorii de
                    produse. În același timp, poate să:
                  </p>
                  <ul className="ps-4">
                    <li>
                      administreze toate facturile emise și încasate pentru
                      fiecare furnizor sau partener în parte;
                    </li>
                    <li>vadă vânzările pe oră, zi, săptămână sau lună;</li>
                    <li>vizualizeze toate rapoartele;</li>
                  </ul>
                  <p className="py-2">
                    <b>Contul de Admin</b> are aceleași drepturi ca cel de
                    <b> Manager</b> și, în plus, poate să adauge atât conturi de
                    Casier și Manager, cât și companii.
                  </p>
                  <a className="more" href="#pricing">
                    Află mai multe<i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="shadow mb-4 p-2 border-0  wow fadeInLeftBig"
                eventKey="1"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-solid fa-folder-tree"></i>Catalog produse
                  </span>
                  <br /> Poți să adaugi un număr nelimitat de materii prime,
                  produse și categorii, indiferent de specificul magazinului /
                  businessului sau de pachetul ales. Ai funcția de SKU
                  integrată.
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <b>Conturile de Manager și Admin</b> pot adăuga un număr
                    nelimitat de materii prime, produse și de categorii, în
                    funcție de specificul businessului.
                  </p>
                  <p className="py-2">
                    Ai integrată funcția de SKU. Poți căuta orice produs sau
                    matrie și vei vedea care este cantitatea rămasă în stoc,
                    categoria din care face parte, dar și detalii specifice
                    (descriere, preț, TVA etc.).
                  </p>
                  <p className="pb-2">
                    Dacă alegi pachetul standard, obții acces la baza de date
                    universală de Barcode EAN. Astfel, nu va trebui să introduci
                    manual codurile de bară și stocul se actualizează automat în
                    funcție de produs.
                  </p>
                  <a className="more" href="#pricing">
                    Află mai multe<i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="shadow mb-4 p-2 border-0  wow fadeInLeftBig"
                eventKey="2"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-solid fa-chart-line"></i>
                    Rapoarte/Dashboard
                  </span>
                  <br />
                  Indiferent de pachetul ales vei avea informații complete
                  despre afacerea ta, actualizate instant, disponibile atât pe
                  desktop, cât și pe mobile.
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Trebuie să îți refaci stocul? Folosește rapoartele
                    actualizate instant pe care ți le punem la dispoziție și
                    analizează care produse s-au vândut mai bine.
                  </p>
                  <p className="py-2">
                    Dacă lucrezi în HoReCa vei scădea costurile cu produsele la
                    care trebuie să renunți, din cauza termenelor de
                    valabilitate, deoarece știi dinainte ce tip de produs este
                    preferat de clienții tăi.
                  </p>
                  <p className="pb-2">
                    Dacă lucrezi în Retail ai oportunitatea de a înțelege
                    comportamentul de consum și ce categorii de produse se vând
                    mai repede, astfel încât să îți aprovizionezi businessul,
                    constant, cu produse care te ajută să ai profit.
                  </p>
                  <a className="more" href="#pricing">
                    Află mai multe<i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-lg-6">
              <Accordion.Item
                className="shadow mb-4 p-2 border-0 wow fadeInRightBig"
                eventKey="3"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-regular fa-file-lines"></i>Facturare
                  </span>
                  <br />
                  Automatizează procesul de facturare și administrează facturile
                  emise și încasate pentru fiecare furnizor sau partener în
                  parte.
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Facturarea este una dintre cele mai importante activități
                    ale unei afaceri. De aceea, am conceput un mecanism de
                    facturare extrem de ușor de folosit și care îți oferă cele
                    mai relevante informații din câteva click-uri.
                  </p>
                  <p className="py-2">
                    Îți înțelegi și calculezi mult mai bine cash flow-ul prin
                    funcția de Calcul Automat de Sold, care îți spune în orice
                    moment cât trebuie să încasezi sau să achiți.
                  </p>
                  <a className="more" href="#pricing">
                    Află mai multe<i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="shadow mb-4 p-2 border-0 wow fadeInRightBig"
                eventKey="4"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-brands fa-sellsy"></i>Vânzări
                  </span>
                  <br />
                  Casierii pot emite un număr nelimitat de facturi pentru
                  clienți, în doar câteva secunde.
                  <br />
                  Managerii pot administra bonurile fiscale, facturile și
                  chitanțele pentru plățile cash și card.
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lipsa banilor este principalul motiv pentru care
                    întreprinderile mici și mijlocii intră în faliment. Ai
                    nevoie de un aport regulat de numerar, care să-ți permită să
                    plătești facturi, salarii și să investești în dezvoltarea
                    afacerii.
                  </p>
                  <p className="py-2">
                    Prin funcționalitățile noastre vezi în timp real cum
                    evoluează fluxul de numerar. Astfel,
                    <b>Managerul</b> poate analiza în fiecare lună fluxul de
                    numerar și să ia decizii pentru îmbunătățirea acestuia,
                    astfel încât în fiecare lună afacerea să aibă mai multe
                    intrări (de numerar) decât ieșiri (de numerar).
                  </p>
                  <a className="more" href="#pricing">
                    Află mai multe<i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="shadow mb-4 p-2 border-0 wow fadeInRightBig"
                eventKey="5"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-solid fa-credit-card"></i>
                    Plata cu cardul
                  </span>
                  <br />
                  Terminalul de plată (POS) se integrează direct cu NETOPIA
                  Retail. Ai posibilitatea de a folosi o aplicație de terminal
                  de plată (POS) pentru smartphone.
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Dacă folosești NETOPIA Retail îți oferim și o aplicație de
                    smartphone, doar pentru Android, care să funcționeze ca un
                    terminal de plată.
                  </p>
                  <p className="py-2">
                    Dacă alegi pachetul standard îți oferim, gratuit,
                    dispozitive care să te ajute în administrarea magazinului și
                    în vânzare.
                  </p>
                  Îți oferim:
                  <ul className="ps-4 pb-2">
                    <li>;</li>
                    <li>;</li>
                    <li>;</li>
                    <li>;</li>
                  </ul>
                  <a className="more" href="#pricing">
                    Află mai multe<i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SectionFunctionalities;
