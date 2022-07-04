import { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../img/logo-blank.svg";
import logo2 from "../img/logo.svg";
import device from "../img/header-hero.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header className="header-area header-hero bg_cover">
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={navbar ? "bg-white shadow navbar-sticky" : "bg-transparent"}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="user-select-none"
              src={navbar ? logo2 : logo}
              alt="NETOPIA Retail"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0">
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="navbarScroll"
            className={"justify-content-end rounded"}
          >
            <Nav className={navbar ? "gap-3 text-black" : "gap-3 text-white"}>
              <Nav.Link href="#features">Soluții</Nav.Link>
              <Nav.Link href="#about">Despre noi</Nav.Link>
              <Nav.Link href="#hardware">Hardware</Nav.Link>
              <Nav.Link href="#pricing">Pachete</Nav.Link>
              <Nav.Link href="#documentatie">Documentație</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link className="btn main-btn fw-bold" href="/">
                Înscrie-te
              </Nav.Link>
              <Nav.Link
                className="login fw-bold"
                href="https://backend.netopia-retail.ro/"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="home" className="header-hero bg_cover">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="header-hero-content text-center">
                <h2
                  className="header-title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.5s"
                >
                  One-stop-shop
                </h2>
                <h3
                  className="header-sub-title wow fadeInUp mb-3"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  pentru nevoile tale de business
                </h3>
                <div className="mb-4">
                  <a
                    href="#pricing"
                    className="btn secondary-btn primary-color wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="1.1s"
                  >
                    Pachete
                  </a>

                  <a
                    className="btn main-btn ms-4 wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="1.1s"
                    data-scroll-nav="0"
                    href="/"
                  >
                    <b>Începe gratuit</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div
                className="header-hero-image text-center wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="1.4s"
              >
                <img src={device} className="user-select-none" alt="hero" />
              </div>
            </div>
          </div>
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
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
      </div>
    </header>
  );
};

export default Header;
