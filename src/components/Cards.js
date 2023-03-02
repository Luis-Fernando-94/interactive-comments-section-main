import { useEffect, useState } from "react";
import Score from "./Score";
import ContentUser from "./ContentUser";

function Cards(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setCurrentUser(props.currentUser);
    setComments(props.comment);
  }, [props]);

  return (
    <div id={comments.id} className="cards">
      <Score data={comments} />
      <ContentUser currentUser={currentUser} data={comments} />
    </div>
  );
}

export default Cards;
