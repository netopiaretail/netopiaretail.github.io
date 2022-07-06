import ParticlesComponent from "../components/Particles";

const SectionCustom = ({
  id,
  image,
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
    <section className="bg-color py-5" id={id}>
      <div className="container">
        <div className="row align-items-center p-4">
          <div
            className={`col-lg-6 ${order} text-center mt-5 ${leftAnimation}`}
          >
            <img src={image} alt={imageTitle} className="rounded" />
          </div>
          <div className={`col-lg-6 px-5 text-start mt-5 ${rightAnimation}`}>
            <h3 className="title">
              {title} <span>{titleSpan}</span>
            </h3>

            <p className="mt-4">{content}</p>
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
