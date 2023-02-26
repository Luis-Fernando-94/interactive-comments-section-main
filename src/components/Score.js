import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import plusHover from "../images/icon-plus-hover.svg";
import minusHover from "../images/icon-minus-hover.svg";

function Score(props) {
  return (
    <div className="score">
      <img src={plus} onMouseOver={(element) => element.target.src = plusHover} onMouseOut={(element) => element.target.src = plus} alt="plus" />
      <span>{props.data.score}</span>
        <img src={minus} onMouseOver={(element) => element.target.src = minusHover} onMouseOut={(element) => element.target.src = minus} alt="minus" />
    </div>
  );
}

export default Score;