import React from "react";
import PricingCard from "../../components/PricingCard";
import Stats from "./Stats";

const Step2 = ({ form, update, ...props }) => {
  const getCardClass = (name, color) => {
    return form.pachet?.name === name
      ? `active ${color}`
      : form.pachet?.name
      ? `${color} inactive`
      : color;
  };

  return (
    <div className="text-start wizard-step-2">
      <h4 className="mb-3">Alege pachetul potrivit business-ului tau:</h4>

      <div className="row justify-content-evenly">
        <PricingCard
          styles={getCardClass("Gratis", "orange")}
          price={"0"}
          onClick={() => update("pachet", { name: "Gratis", price: 0 })}
          title={"Gratis"}
          link={"#pricing"}
        >
          <p>
            Este ideal pentru businessurile care sunt la început de drum și vor
            să înțeleagă mai clar cum își pot gestiona afacerea. Ai acces la
            majoritatea funcționalităților care să te ajute în definirea
            propriului succes
          </p>
        </PricingCard>
        <PricingCard
          styles={getCardClass("Standard", "blue")}
          price={"10"}
          onClick={() => update("pachet", { name: "Standard", price: 10 })}
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
          styles={getCardClass("Premium", "purple")}
          price={"80"}
          onClick={() => update("pachet", { name: "Premium", price: 80 })}
          title={"Premium"}
          link={"#pricing"}
        >
          <p>
            Afacerea ta face parte dintr-o franciză sau reprezinți o franciză și
            ai nevoie de un soft de gestiune și administrare vânzări
            personalizat propriilor nevoi. Scrie-ne și, împreună, vom găsi cea
            mai bună soluție.
          </p>
        </PricingCard>
      </div>

      <Stats {...props} form={form} />
    </div>
  );
};

export default Step2;
