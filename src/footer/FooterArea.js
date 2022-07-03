import img from "../img/contact.svg";
import logo from "../img/logo-blank.svg";
import "./FooterArea.css";
import Particles from "react-tsparticles";

const FooterArea = () => {
  return (
    <footer id="contact" className="footer-area relative py-5">
      <div className="container text-start">
        <div
          className="subscribe-area wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="subscribe-content mt-4">
                <div className="text-center">
                  <img width="70%" src={img} alt="Contact" />
                </div>
                <h2 className="mt-5 subscribe-title">Contact</h2>

                <p className="mt-4 fs-6">
                  Ne poți adresa orice întrebare legat de NETOPIA Retail.
                  Vizitează și pagina de <a href="/">Documentație</a> unde am
                  răspuns celor mai frecvente întrebări.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-4">
                <form action="#">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Nume"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="name"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Telefon"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Oraș"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      placeholder="Tipul de afacere"
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Mesaj"
                    ></textarea>
                  </div>
                  <label>Metoda preferată de contact</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="telefon"
                      id="telefon"
                    />
                    <label className="form-check-label" for="telefon">
                      Telefon
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Email"
                      id="email"
                    />
                    <label className="form-check-label" for="email">
                      Email
                    </label>
                  </div>

                  <submit className="btn main-btn mt-3">Trimite</submit>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-widget pb-5">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div
                className="footer-section mt-5 wow fadeIn text-center"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <a className="logo" href="/">
                  <img
                    className="user-select-none"
                    src={logo}
                    alt="NETOPIA Retail"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-5">
              <div className="footer-link d-flex mt-5 justify-content-md-between">
                <div
                  className="link-wrapper wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div className="footer-title">
                    <h4 className="title">Links</h4>
                  </div>
                  <ul className="link">
                    <li>
                      <a href="/">Politică cookies</a>
                    </li>
                    <li>
                      <a href="/">Politică confidențialitate</a>
                    </li>
                    <li>
                      <a href="/">Termeni și Condiții Generale</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-5">
              <div
                className="footer-contact mt-5 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="footer-title">
                  <h4 className="title">Contact</h4>
                </div>
                <ul className="contact">
                  <li>info@netopia.com</li>
                  <li>
                    Bd. Dimitrie Pompeiu nr 9-9A, Iride Business Park, Cladirea
                    nr. 24, camera 4A, et. 4, sector 2, 020335 BUCUREȘTI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright d-sm-flex justify-content-between">
                <div className="copyright-content">
                  <p className="text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Particles
        id="tsparticles1"
        options={{
          fullScreen: {
            enable: false,
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                size_min: 0.1,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </footer>
  );
};

export default FooterArea;
