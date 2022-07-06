import Header from "./header/Header";
import SectionFeatures from "./sections/SectionFeatures";
import SectionCustom from "./sections/SectionCustom";
import image1 from "./img/Group 1 (8).png";
import image2 from "./img/section2.svg";
import image3 from "./img/angajati.png";
import image4 from "./img/section3.png";
import SectionFunctionalities from "./sections/SectionFunctionalities";
import SectionBenefits from "./sections/SectionBenefits";
import SectionHardware from "./sections/SectionHardware";
import SectionAdvantages from "./sections/SectionAdvantages";
import FooterArea from "./footer/FooterArea";
import PricingTable from "./sections/PricingTable";
import WizardStep from "./wizard";
import { useEffect } from "react";
import WOW from "wowjs";

function App() {
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
        imageTitle={"Dashboard"}
        title={"O singură platformă"}
        titleSpan={"pentru orice afacere"}
        content={
          "Crește profitul afacerii tale printr-o platformă simplă de folosit și fără costuri. Optimizează operațiunile și eficientizează activitatea angajaților tăi, prin automatizări simple și ușor de înțeles."
        }
        btnLink={""}
        btnText={"Începe gratuit"}
        particles={{
          color: "#000",
          width: "50%",
          extraClass: "left",
        }}
      />
      <SectionFunctionalities />
      <SectionCustom
        id={"about"}
        image={image2}
        imageTitle={"Despre noi"}
        title={"Despre noi"}
        content={
          "NETOPIA Retail face parte din NETOPIA Group, un conglomerat de companii românești care de peste 20 de ani sprijină mediul de afaceri românesc din poziția de lider de piață. Datorită experienței acumulate, am înțeles nevoile reale ale afacerilor din HoReCa și Retail. Prin NETOPIA Retail urmărim să ajutăm afacerile mici și mijlocii să devină mai profitabile și să își extindă serviciile."
        }
        btnLink={""}
        btnText={"Începe gratuit"}
        swap={true}
      />
      <SectionCustom
        id={"employee"}
        image={image3}
        imageTitle={"Angajați"}
        title={"Pentru angajați:"}
        titleSpan={"Intuitiv, simplu, rapid"}
        content={
          "Am dezvoltat un soft de gestiune și vânzare care nu are nevoie de training special. Platforma noastră este creată pentru optimizarea maximă a procesului de învățare, astfel încât orice angajat va putea să vândă într-un timp foarte scurt. Procesul de vânzare este ușor de urmărit și rapid, astfel încât timpul de așteptare al clienților să fie cât mai mic."
        }
      />
      <SectionCustom
        id={"managers"}
        image={image4}
        imageTitle={"Angajați"}
        title={"Pentru manager:"}
        titleSpan={"Instant, simplu, rapid"}
        content={
          "Când ai de administrat o afacere, stocuri, parteneri, facturi, angajați, ai nevoie de ajutor, pentru a putea fi eficient, atât în ceea ce privește timpul, dar și costurile. NETOPIA Retail îți permite să ai o viziune clară asupra a tot ce ceea ce înseamnă afacerea ta, din câteva click-uri, atât pe telefonul mobil, cât și pe desktop. Cele mai importante informații îți vor fi prezentate, întotdeauna, atunci când te loghezi, iar meniul îți permite să ajungi instant în secțiunea de care ai nevoie."
        }
        btnLink={""}
        btnText={"Începe gratuit"}
        swap={true}
      />
      <SectionBenefits />
      <SectionHardware />
      <SectionAdvantages />
      <PricingTable />
      <WizardStep />
      <FooterArea />
      <a href="#" className="back-to-top">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default App;
