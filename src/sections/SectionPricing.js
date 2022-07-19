import PricingCard from "../components/PricingCard";
import Accordion from "react-bootstrap/Accordion";
import PricingTable from "./PricingTable";

const SectionPricing = () => {
  return (
    <section id="pricing" className="section-area">
      <div className="container">
        <div className="text-center pb-4">
          <h3 className="title">Pachete</h3>
        </div>
        <div className="row justify-content-evenly gap-4">
          <PricingCard
            styles={("Gratis", "orange")}
            price={"0"}
            title={"Gratis"}
            link={"#pricing"}
          >
            <p>
              Este ideal pentru businessurile care sunt la început de drum și
              vor să înțeleagă mai clar cum își pot gestiona afacerea. Ai acces
              la majoritatea funcționalităților care să te ajute în definirea
              propriului succes
            </p>
          </PricingCard>
          <PricingCard
            styles={("Standard", "blue")}
            price={"10"}
            title={"Standard"}
            link={"#pricing"}
          >
            <p>
              Ai deja câțiva ani de activitate, între 2 și 4 magazine și îți
              dorești să te extinzi. Ce primești în plus sunt:
            </p>
            <ul>
              <li>baza de coduri universală EAN;</li>
              <li>preintegrare cu NETOPIA Payments pentru plățile online;</li>
              <li>administrare facilă a mai multor locații.</li>
            </ul>
          </PricingCard>
          <PricingCard
            styles={("Premium", "purple")}
            price={"80"}
            title={"Premium"}
            link={"#pricing"}
          >
            <p>
              Afacerea ta face parte dintr-o franciză sau reprezinți o franciză
              și ai nevoie de un soft de gestiune și administrare vânzări
              personalizat propriilor nevoi. Scrie-ne și, împreună, vom găsi cea
              mai bună soluție.
            </p>
          </PricingCard>
        </div>

        <Accordion className="pt-5 wow fadeInUpBig" id="pricing-table">
          <Accordion.Item eventKey="0">
            <Accordion.Header id="pricing-btn">
              Funcționalități Pachete
            </Accordion.Header>
            <Accordion.Body>
              <PricingTable />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default SectionPricing;
