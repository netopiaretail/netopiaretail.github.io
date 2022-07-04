import Card from "../components/Card";
import IconText from "../components/IconText";

const retailList = [
  { icon: "fas fa-store", iconTitle: "Magazin universal" },
  {
    icon: "fas fa-basket-shopping",
    iconTitle: "Magazin IT&C & Electrocasnice",
  },
  {
    icon: "fas fa-shirt",
    iconTitle: "Magazin de îmbrăcăminte",
  },
  {
    icon: "fas fa-user",
    iconTitle: "Farmacie",
  },
  {
    icon: "fas fa-eye-dropper",
    iconTitle: "Beauty",
  },
  {
    icon: "fas fa-cash-register",
    iconTitle: "Cash & Carry",
  },
  {
    icon: "fas fa-cart-shopping",
    iconTitle: "Hypermarket",
  },
  {
    icon: "fas fa-cart-flatbed",
    iconTitle: "Supermarket",
  },
  {
    icon: "fas fa-percent",
    iconTitle: "Discounter",
  },
  {
    icon: "fas fa-shop",
    iconTitle: "Proximitate",
  },
  {
    icon: "fas fa-newspaper",
    iconTitle: "News & Convenience",
  },
  {
    icon: "fas fa-book",
    iconTitle: "Librărie & Papetărie",
  },
];

const horecaList = [
  {
    icon: "fas fa-mug-hot",
    iconTitle: "Ceainărie",
  },
  {
    icon: "fas fa-cake-candles",
    iconTitle: "Cofetărie",
  },
  {
    icon: "fas fa-mug-saucer",
    iconTitle: "Cafenea",
  },
  {
    icon: "fas fa-wheat-awn",
    iconTitle: "Brutărie",
  },
  {
    icon: "fas fa-bread-slice",
    iconTitle: "Patiserie & Covrigărie",
  },
  {
    icon: "fas fa-martini-glass-citrus",
    iconTitle: "Pub",
  },
  {
    icon: "fas fa-blender",
    iconTitle: "Berărie",
  },
  {
    icon: "fas fa-wine-glass",
    iconTitle: "Vinotecă & Cramă",
  },
  {
    icon: "fas fa-fish-fins",
    iconTitle: "Pescărie",
  },
];

const SectionFeatures = () => {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-10">
            <div className="text-center pb-4">
              <h3 className="title">
                Softul de gestiune și administrare vânzări NETOPIA Retail &nbsp;
                <span>
                  conține soluții și programe IT de tip On Cloud și Android
                  pentru:
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row mb-5 justify-content-center">
          <div className="col-lg-6 col-sm-12 p-3">
            <Card
              title={"Retail"}
              content={
                "Administrezi fiecare aspect al afacerii tale dintr-un mediu sigur. Gestionezi afacerea prin funcționalități de: facturare, inventar, stocuri și vânzări. Ai acces nelimitat la rapoarte clare, pe baza cărora să îți structurezi deciziile de business și să îți crești afacerea, dintr-o singură platformă simplă și intuitivă."
              }
              styles={"text-start"}
            />
          </div>

          <div className="col-lg-6 col-sm-12 p-3 d-grid gap-2 grid-columns-2">
            {retailList.map((el, index) => (
              <IconText
                key={index + el}
                iconTitle={el.iconTitle}
                icon={el.icon}
              />
            ))}
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-12 p-3 d-grid  gap-2 grid-columns-2">
            {horecaList.map((el, index) => (
              <IconText key={index} iconTitle={el.iconTitle} icon={el.icon} />
            ))}
          </div>
          <div className="col-lg-6 col-sm-12 p-3">
            <Card
              title={"HoReCa"}
              content={
                "Indiferent de specificul afacerii tale, produsele tale se bazează pe o rețetă care conține materii prime. Prin NETOPIA Retail poți gestiona fiecare rețetă în funcție de cantitatea de materie primă folosită pe zi, săptămână sau lună. Împreună cu funcțiile de gestiune de stocuri, inventar, vânzări și facturare, îți oferim toate instrumentele necesare pentru a găsi rețeta de succes a afacerii tale, dintr-o singură platformă simplă și intuitivă."
              }
              styles={"text-start"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
