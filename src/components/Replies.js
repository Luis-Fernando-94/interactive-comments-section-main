import { useEffect, useState } from "react";
import amyrobson from "../images/avatars/image-amyrobson.png";

function Replies(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.reply);
  }, [props]);
  return (
    <div className="replies">
      <header>
        <div className="status">
          <img src={amyrobson} alt="avatar" />
          <h4 className="name">
            {data.user
              ? data.user.username
              : console.log("waiting name (replies)")}
          </h4>
          <p className="time">
            {data.createdAt
              ? data.createdAt
              : console.log("waiting time (replies)")}
          </p>
        </div>
        <button className="reply">
          <span></span>Reply
        </button>
      </header>

      <p className="content">
        {data.content ? data.content : console.log("waiting content (replies)")}
      </p>
    </div>
  );
}

export default Replies;
