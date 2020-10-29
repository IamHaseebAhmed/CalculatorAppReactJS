import "./keypad.css";

const Keypad = (props) => {
  return (
    <div className="keypad">
      <div>
        <button name="%" onClick={e => props.onClick(e.target.name)}>%</button>
        <button className="orangeBtn" name="CE" onClick={e => props.onClick(e.target.name)}>CE</button>
        <button className="orangeBtn" name="C" onClick={e => props.onClick(e.target.name)}>C</button>
        <button name="D" onClick={e => props.onClick(e.target.name)}>DEL</button>
      </div>
      <div>
        <button name="7" onClick={e => props.onClick(e.target.name)}>7</button>
        <button name="8" onClick={e => props.onClick(e.target.name)}>8</button>
        <button name="9" onClick={e => props.onClick(e.target.name)}>9</button>
        <button name="*" onClick={e => props.onClick(e.target.name)}>&times;</button>
      </div>
      <div>
        <button name="4" onClick={e => props.onClick(e.target.name)}>4</button>
        <button name="5" onClick={e => props.onClick(e.target.name)}>5</button>
        <button name="6" onClick={e => props.onClick(e.target.name)}>6</button>
        <button name="-" onClick={e => props.onClick(e.target.name)}>-</button>
      </div>
      <div>
        <button name="1" onClick={e => props.onClick(e.target.name)}>1</button>
        <button name="2" onClick={e => props.onClick(e.target.name)}>2</button>
        <button name="3" onClick={e => props.onClick(e.target.name)}>3</button>
        <button name="+" onClick={e => props.onClick(e.target.name)}>+</button>
      </div>
      <div>
        <button name="0" onClick={e => props.onClick(e.target.name)}>0</button>
        <button name="." onClick={e => props.onClick(e.target.name)}>.</button>
        <button name="/" onClick={e => props.onClick(e.target.name)}>&#247;</button>
        <button className="specialBtn" name="=" onClick={e => props.onClick(e.target.name)}>=</button>
      </div>
    </div>
  );
};

export default Keypad;
