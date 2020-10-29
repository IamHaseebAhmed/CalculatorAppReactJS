import "./display.css";

const Display = (props) => {
  return (
    <div className="c_display">
      <div>
        <p className="secScreen">{props.secCalc}</p>
        <h1 className="primScreen">{props.primCalc}</h1>
      </div>
    </div>
  );
};

export default Display;
