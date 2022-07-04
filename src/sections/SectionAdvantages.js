import img1 from "../img/E800.jpg";
import Card from "../components/Card";

const SectionAdvantages = () => {
  return (
    <section id="avantaje" className="section-area py-5">
      <div className="container">
        <div className="text-center pb-40">
          <h3 className="title">Principalele avantaje</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-8 my-4">
            <Card
              image={img1}
              imageTitle={"NETOPIA Payments"}
              title={"Integrare cu metoda de plată NETOPIA Payments"}
              content={
                "Iți oferim acces la o paletă largă de servicii de plată, inovație constantă și standarde internaționale de siguranță și securitate a datelor. Vei putea accepta plăți prin card cu discount preferențial, dar și posibilitatea de a accepta cryptomonede."
              }
            />
          </div>
          <div className="col-lg-3 col-sm-8 my-4">
            <Card
              image={img1}
              imageTitle={"Vanzari"}
              title={"Gestionează vânzările. Simplu, ușor, rapid."}
              content={
                "NETOPIA Retail a dezvoltat funcția de Calcul Automat de Sold pentru a ști în orice moment cât ai de încasat sau de plătit, pe baza istoricului de facturi."
              }
            />
          </div>
          <div className="col-lg-3 col-sm-8 my-4">
            <Card
              image={img1}
              imageTitle={"Personalizeaza"}
              title={"Personalizezi platforma după propriile nevoi"}
              content={
                "NETOPIA Retail este o platformă intuitivă, ușor de folosit și de înțeles. Orice produs poate fi adăugat în câteva minute și poți aranja produsele și categoriile în funcție de cele mai vândute sau cost."
              }
            />
          </div>
          <div className="col-lg-3 col-sm-8 my-4">
            <Card
              image={img1}
              imageTitle={"NETOPIA Card"}
              title={"Card bancar tip business NETOPIA"}
              content={
                "Cardul de business NETOPIA este instrumentul modern și elegant al oamenilor de afaceri din România. Optimizează costurile afacerii tale prin beneficiile unice oferite de cardul de business NETOPIA."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAdvantages;
