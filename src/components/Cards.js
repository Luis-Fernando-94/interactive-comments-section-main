import { useEffect, useState } from "react";
import Score from "./Score";
import ContentUser from "./ContentUser";

function Cards(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.comment);
  }, [props]);

  return (
    <div id={data.id} className="cards">
      <Score data={data} />
      <ContentUser data={data} />
    </div>
  );
}

export default Cards;
