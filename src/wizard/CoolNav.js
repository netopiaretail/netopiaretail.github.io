import Stats from "./Stats";

const CoolNav = (props) => {
  const steps = [];
  const currentStep = props.currentStep;

  for (let i = 1; i <= props.totalSteps; i++) {
    const isActive = currentStep === i;
    const isChecked = currentStep > i;

    steps.push(
      <div
        className={`progress-item ${
          isActive ? "active" : isChecked ? "check" : ""
        }`}
      >
        <div
          className={`progress-counter ${
            isActive ? "active" : isChecked ? "check" : ""
          }`}
        >
          {isActive || isChecked ? <i className="fa-solid fa-check" /> : i}
        </div>
      </div>
    );
  }

  return (
    <nav className="app-progress-bar">
      <div className="progress-wrapper">{steps}</div>
      <Stats {...props} />
    </nav>
  );
};

export default CoolNav;
