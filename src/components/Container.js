import { useState, useEffect } from "react";
import Cards from "./Cards";
import ContentAnswer from "./ContentAnswer";
import InputComment from "./InputComment";
import Footer from "./Footer";

function Container() {
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    setComments(data.comments);
  }, [data]);

  return (
    <div id="container">
      {comments
        ? comments.map((comment, i) => {
            return (
              <div key={i} className="comment">
                <Cards comment={comment} />
                <ContentAnswer comment={comment} />
              </div>
            );
          })
        : console.log("waiting (comments)")}
      <InputComment />
      <Footer />
    </div>
  );
}

export default Container;
