import img1 from "../img/team0.jpg";
import img2 from "../img/team.jpg";
import img3 from "../img/team2.png";

const SectionAbout = () => {
  return (
    <section className="bg-color section-area" id={"about"}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div
            className={`col-lg-6 order-1 text-center wow fadeInLeftBig about-grid-image`}
          >
            <img src={img3} className="rounded wow fadeInUp" />
            <img src={img1} className="rounded wow fadeInDown" />
            <img src={img2} className="rounded wow fadeInUp" />
          </div>
          <div className={`col-lg-5 text-start wow fadeInRightBig`}>
            <h2 className="title">Despre noi</h2>

            <p className="text">
              NETOPIA Retail face parte din NETOPIA Group, un conglomerat de
              companii românești care de peste 20 de ani sprijină mediul de
              afaceri românesc din poziția de lider de piață. Datorită
              experienței acumulate, am înțeles nevoile reale ale afacerilor din
              HoReCa și Retail. Prin NETOPIA Retail urmărim să ajutăm afacerile
              mici și mijlocii să devină mai profitabile și să își extindă
              serviciile.
            </p>
            <a href={"#"} className="btn main-btn mt-4">
              Începe gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
