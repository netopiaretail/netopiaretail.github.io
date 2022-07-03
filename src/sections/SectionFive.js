import img1 from "../img/E800.jpg";
import img2 from "../img/dp25.png";
import img3 from "../img/bluecash-50.png";
import img4 from "../img/cantar.jpg";
import Carousel from "react-bootstrap/Carousel";

const SectionFive = () => {
  return (
    <section id="baneficii" className="section-area py-5">
      <div className="container">
        <div className="text-center pb-40">
          <h3 className="title">Hardware</h3>
        </div>
        <div class="row gap-4 justify-content-center">
          <div class="card col-lg-5 col-sm-8 my-4">
            <Carousel variant="dark">
              <Carousel.Item>
                <img className="d-block m-auto" src={img1} alt="First slide" />
                {/* <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
            <div className="text-start mt-4">
              <h5>Dispozitivele noastre</h5>
              <p>
                NETOPIA Retail se integrează instant cu unele dintre cele mai
                bune dispozitive disponibile pe piață.
              </p>
            </div>
          </div>
          <div class="card col-lg-5 col-sm-8 my-4">
            <Carousel variant="dark">
              <Carousel.Item>
                <img className="d-block m-auto" src={img2} alt="First slide" />
                {/* <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img3} alt="Second slide" />
                {/* <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img4} alt="Second slide" />
                {/* <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
            <div className="text-start mt-4">
              <h5>Dispozitivele tale</h5>
              <p>
                NETOPIA Retail se integrează instant cu unele dintre cele mai
                bune dispozitive disponibile pe piață.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
