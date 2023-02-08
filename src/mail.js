const sendEmail = (body) => {
  const payload = {
    header: "Cerere contact NETOPIA Retail",
    body: body,
  };
  const data = JSON.stringify({
    account: "<string>",
    templateId: "dynamic_template_multiline.html",
    subject: "Contact NETOPIA Retail",
    from: "support@netopia-retail.ro",
    to: [
      // "contact@netopia-retail.ro",
      // "ion@netopia-system.com",
      "ioana.ilie@netopia-system.com",
    ],
    payload: JSON.stringify(payload),
  });
  return fetch(
    "https://europe-west1-netopia-payments.cloudfunctions.net/SendEmail",
    {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
      body: data,
    }
  );
};

export default sendEmail;
