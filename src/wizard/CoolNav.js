const CoolNav = (props) => {
  const steps = [];
  const currentStep = props.currentStep;

  for (let i = 1; i <= props.totalSteps; i++) {
    const isActive = currentStep == i;
    const isChecked = currentStep > i;

    console.log("is", isChecked);

    steps.push(
      <li
        className={`col-2 progress-step-${i} ${
          isActive ? "active" : isChecked ? "check" : ""
        }`}
        key={i}
      >
        <div className={`${isActive ? "active" : isChecked ? "check" : ""}`}>
          {isActive || isChecked ? <i className="fa-solid fa-check" /> : i}
        </div>
      </li>
    );
  }

  return (
    <nav className="app-progress-bar">
      <ul>{steps}</ul>
    </nav>
  );
};

export default CoolNav;
