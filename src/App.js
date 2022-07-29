import Header from "./header/Header";
import SectionFeatures from "./sections/SectionFeatures";
import SectionCustom from "./sections/SectionCustom";
import image1 from "./img/screenDash.png";
import image11 from "./img/graph.png";
import image3 from "./img/angajati.png";
import image4 from "./img/section3.png";
import image5 from "./img/bg-image2.png";
import image6 from "./img/bg-image.png";
import SectionFunctionalities from "./sections/SectionFunctionalities";
import SectionBenefits from "./sections/SectionBenefits";
import SectionHardware from "./sections/SectionHardware";
import SectionAdvantages from "./sections/SectionAdvantages";
import FooterArea from "./footer/FooterArea";
import WizardStep from "./wizard";
import { useEffect } from "react";
import WOW from "wowjs";
import SectionPricing from "./sections/SectionPricing";
import SectionAbout from "./sections/SectionAbout";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    new WOW.WOW({
      live: false,
      mobile: false,
    }).init();
  }, []);

  return (
    <div className="App">
      <Header />
      <SectionFeatures />
      <SectionCustom
        id={"onePlatform"}
        image={image1}
        imgBackground={image11}
        imageTitle={"Dashboard"}
        title={t("section2.title")}
        titleSpan={t("section2.subtitle")}
        content={t("section2.text")}
        btnLink={""}
        swap={true}
        btnText={t("hero.btn")}
      />
      <SectionFunctionalities />
      <SectionAbout />
      <SectionCustom
        id={"employee"}
        image={image3}
        imgBackground={image5}
        imageTitle={"Angajați"}
        title={t("section5.title")}
        titleSpan={t("section5.subtitle")}
        content={t("section5.text")}
      />
      <SectionCustom
        id={"managers"}
        image={image4}
        imgBackground={image6}
        imageTitle={"Angajați"}
        title={t("section6.title")}
        titleSpan={t("section6.subtitle")}
        content={t("section6.text")}
        btnLink={""}
        btnText={t("hero.btn")}
        swap={true}
      />
      <SectionBenefits />
      <SectionHardware />
      <SectionAdvantages />
      <SectionPricing />
      <WizardStep />
      <FooterArea />
      <a href="#" className="back-to-top">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default App;
