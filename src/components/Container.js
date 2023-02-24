import { useState, useEffect } from "react";
import Cards from "./Cards";
import ContentAnswer from "./ContentAnswer";
import InputComment from "./InputComment";

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
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Luis-Fernando-94">Luis Fernando</a>.
      </div>
    </div>
  );
}

export default Container;
