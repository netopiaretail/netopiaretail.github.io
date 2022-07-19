import ParticlesComponent from "../components/Particles";

const SectionCustom = ({
  id,
  image,
  imgBackground,
  imageTitle,
  title,
  titleSpan,
  content,
  btnLink,
  btnText,
  swap,
  particles = null,
}) => {
  const leftAnimation = !swap ? "wow fadeInLeftBig" : "wow fadeInRightBig";
  const rightAnimation = swap ? "wow fadeInLeftBig" : "wow fadeInRightBig";
  const order = swap ? "order-2" : "";
  return (
    <section className="bg-color section-area" id={id}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div
            className={`col-lg-6 ${order} text-center my-5 ${leftAnimation}`}
          >
            <img src={image} alt={imageTitle} className="rounded" />
            {imgBackground && <img src={imgBackground} />}
          </div>
          <div className={`col-lg-5 text-start ${rightAnimation}`}>
            <h2 className="title">
              {title} <span>{titleSpan}</span>
            </h2>

            <p className="text">{content}</p>
            <a href={btnLink} className="btn main-btn mt-4">
              {btnText}
            </a>
          </div>
        </div>
        {particles && (
          <ParticlesComponent
            id={id}
            color={particles.color}
            extraClass={particles.extraClass}
          />
        )}
      </div>
    </section>
  );
};

export default SectionCustom;
