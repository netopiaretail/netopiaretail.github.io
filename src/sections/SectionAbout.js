import img1 from "../img/team0.jpg";
import img2 from "../img/team.jpg";
import img3 from "../img/team2.jpg";
import { useTranslation } from "react-i18next";

const SectionAbout = () => {
  const { t } = useTranslation();

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
            <h2 className="title">{t("section4.title")}</h2>

            <p className="text">{t("section4.text")}</p>
            <a href={"#"} className="btn main-btn mt-4">
              {t("hero.btn")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
