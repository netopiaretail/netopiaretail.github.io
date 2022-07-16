import Stats from "./Stats";

const CoolNav = (props) => {
  const steps = [];

  for (let i = 1; i <= props.totalSteps; i++) {
    steps.push(
      <li key={i} className={i === props.currentStep ? "active" : ""}>
        <div>{i}</div>
      </li>
    );
  }

  return (
    <nav className="app-progress-bar">
      <ul>{steps}</ul>
      <Stats {...props} />
    </nav>
  );
};

export default CoolNav;
