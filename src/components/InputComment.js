import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import juliusomo from "../images/avatars/image-juliusomo.png";

// Actions ------------------------------
import { addComment } from "../actions/listCommentsAction";

function InputComment() {
  const [text, setText] = useState("");

  const data = useSelector(state => {return state.fetchData});
  const dispatch = useDispatch();

  function changeText(event) {
    let value = event.target.value;
    setText(value);
  }

  function addCommentEvent(event) {
    event.preventDefault();
    if (text) {
      dispatch(addComment(data, text));
      setText("");
    }
  }

  return (
    <div className="addComment">
      <img src={juliusomo} alt="user image" />
      <form>
        <input onChange={changeText} type="text" placeholder="Add a comment..." value={text} />
        <input onClick={addCommentEvent} type="submit" value="send" />
      </form>
    </div>
  );
}

export default InputComment;