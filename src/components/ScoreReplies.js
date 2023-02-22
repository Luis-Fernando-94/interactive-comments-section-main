import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";

function ScoreReplies(props) {
  return (
    <div className="score">
      <img src={plus} alt="plus" />
      <span>{props.reply.score}</span>
      <img src={minus} alt="minus" />
    </div>
  );
}

export default ScoreReplies;