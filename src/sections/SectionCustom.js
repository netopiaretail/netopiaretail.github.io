const SectionCustom = ({
  id,
  image,
  imageTitle,
  title,
  titleSpan,
  content,
  btnLink,
  btnText,
  order,
}) => {
  return (
    <section className="bg-color py-5" id={id}>
      <div className="container">
        <div className="row align-items-center p-4">
          <div className={`col-lg-6 px-5 ${order}`}>
            <div
              className="text-center mt-5 wow fadeInRightBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src={image} alt={imageTitle} className="rounded" />
            </div>
          </div>
          <div className="col-lg-6 px-5 text-start">
            <div
              className="mt-5 wow fadeInLeftBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h3 className="title">
                {title} <span>{titleSpan}</span>
              </h3>

              <p className="mt-4">{content}</p>
              <a href={btnLink} className="btn main-btn mt-4">
                {btnText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCustom;
