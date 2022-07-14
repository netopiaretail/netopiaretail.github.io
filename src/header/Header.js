import { useEffect, useState } from "react";
import logo from "../img/logo-blank.svg";
import logo2 from "../img/logo.svg";
import device from "../img/header-hero.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import ParticlesComponent from "../components/Particles";
import SearchBar from "./SearchBar";

const Header = () => {
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
    <header className="header-area">
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={navbar ? "bg-white shadow navbar-sticky" : "bg-transparent"}
      >
        <Container className="position-relative">
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
            <Nav className={navbar ? "gap-1" : "gap-1 text-white"}>
              <Nav.Link href="#features">Soluții</Nav.Link>
              <Nav.Link href="#about">Despre noi</Nav.Link>
              <Nav.Link href="#hardware">Hardware</Nav.Link>
              <Nav.Link href="#pricing">Pachete</Nav.Link>
              <Nav.Link href="#documentatie">Documentație</Nav.Link>
              <Nav.Link
                href="https://sites.google.com/netopia-system.com/netopia-retail-faq"
                target="_blank"
              >
                FAQ
              </Nav.Link>
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
              <SearchBar />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="home" className="header-hero">
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
                <img
                  src={device}
                  className="user-select-none image-bounce"
                  alt="hero"
                />
              </div>
            </div>
          </div>
        </div>
        <ParticlesComponent id={"header"} color={"#fff"} />
      </div>
    </header>
  );
};

export default Header;
