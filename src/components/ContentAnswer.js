import { useEffect, useState } from "react";
import ScoreReplies from "./ScoreReplies";
import Replies from "./Replies";

function ContentAnswer(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.comment);
  }, [props]);

  return (
    <div className="contentAnswer">
      {(data.replies && data.replies !== [])
        ? data.replies.map((reply, i) => {
            return (
              <div key={i} id={reply.id} className="cards">
                <ScoreReplies reply={reply} />
                <Replies reply={reply} />
              </div>
            );
          })
        : console.log("waiting (contentAnswer)")}
    </div>
  );
}

export default ContentAnswer;
