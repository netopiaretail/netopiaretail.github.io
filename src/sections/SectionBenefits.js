import Card from "../components/Card";
import img1 from "../img/automatizare.svg";
import img2 from "../img/analize.svg";
import img3 from "../img/stocks.svg";
import img4 from "../img/rapoarte.svg";

const SectionBenefits = () => {
  return (
    <section id="beneficii" className="section-area">
      <div className="container">
        <div className="text-center">
          <h3 className="title">Principalele beneficii</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-8 my-4">
            <Card
              image={img1}
              imageTitle={"Automatizarea proceselor de lucru"}
              title={"Automatizarea proceselor de lucru"}
              content={
                "Eficientizează afacerea ta cu NETOPIA Retail, printr-un control total asupra activităților de vânzare cu amănuntul: de la gestionarea stocurilor, efectuarea inventarului sau definirea politicii comerciale, până la soluții de fidelizare a clienților și crearea diverselor promoții."
              }
            />
          </div>
          <div className="col-lg-6 col-sm-8 my-4">
            <Card
              image={img2}
              imageTitle={"Analize avansate în timp real"}
              title={"Analize avansate în timp real"}
              content={
                "Prin NETOPIA Retail, cataloagele de produse sunt administrate centralizat. Responsabilii vor putea defini și gestiona în timp real caracteristicile produselor, codurile de bare, etichetele, listele de prețuri generale, listele de discounturi, promoțiile și altele; pentru a fi întotdeauna aproape de cerințele clienților tăi."
              }
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-8 my-4">
            <Card
              image={img3}
              imageTitle={"Administrare de stocuri"}
              title={"Administrare de stocuri"}
              content={
                "Inventarierea cantitativă a tuturor categoriilor de stoc este automatizată. Poți avea o imagine de ansamblu asupra activității de inventariere, în funcție de politica companiei, pe grupe de produse, subgrupe, loturi."
              }
            />
          </div>
          <div className="col-lg-6 col-sm-8 my-4">
            <Card
              image={img4}
              imageTitle={"Rapoarte"}
              title={
                "Rapoarte avansate și identificarea comportamentului de consum"
              }
              content={
                "Analizele avansate de vânzări și profitabilitate din NETOPIA Retail te informează care sunt cele mai vândute produse dar și zonele unde se înregistrează pierderi. Vei identifica și defini o multitudine de criterii care influențează vânzările: perioada, prețul, tipul de produs etc. Astfel, vei putea lua decizii de aprovizionare, discount sau vânzare accelerată informate și care să îți crească profitul."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBenefits;
