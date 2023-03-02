import { useEffect, useState } from "react";
import ScoreReplies from "./ScoreReplies";
import Replies from "./Replies";

function ContentAnswer(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [data, setData] = useState([]);

  const contentAnswer = document.getElementsByClassName("contentAnswer");

  useEffect(() => {
    setCurrentUser(props.currentUser);
    setData(props.comment);
  }, [props]);

  return (
    <div className="contentAnswer">
      {(data.replies && data.replies !== [])
        ? data.replies.map((reply, i) => {
            return (
              <div key={i} id={reply.id} className="cards cardsAnswer">
                <ScoreReplies reply={reply} />
                <Replies currentUser={currentUser} reply={reply} />
              </div>
            );
          })
        : console.log("waiting (contentAnswer)")}
    </div>
  );
}

export default ContentAnswer;
