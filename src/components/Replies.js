import { useEffect, useState } from "react";
import amyrobson from "../images/avatars/image-amyrobson.png";

import reply from "../images/icon-reply.svg";
import replyHover from "../images/icon-reply-hover.svg";

function Replies(props) {
  const [data, setData] = useState({});

  function mouseOver(element) {
    let e = element.target;
    let header = document.getElementsByTagName("header");
    let status = document.getElementsByClassName("status");

    for (let i = 0; i < status.length; i++) {
      if (e.getAttribute("reply")) {
        e.children[0].style.background = `url(${replyHover}) no-repeat center`;
        e.style.color = "hsl(239, 57%, 85%)";
        header[i].style.background = "none";
        status[i].style.background = "none";
      } else {
        e.parentElement.children[0].style.background = `url(${replyHover}) no-repeat center`;
        e.parentElement.style.color = "hsl(239, 57%, 85%)";
        header[i].style.background = "none";
        status[i].style.background = "none";
      }
    }
  }

  function mouseOut(element) {
    let e = element.target;
    let header = document.getElementsByTagName("header");
    let status = document.getElementsByClassName("status");

    for (let i = 0; i < status.length; i++) {
      if (e.getAttribute("reply")) {
        e.children[0].style.background = `url(${reply}) no-repeat center`;
        e.style.color = "hsl(238, 40%, 52%)";
        header[i].style.background = "none";
        status[i].style.background = "none";
      } else {
        e.parentElement.children[0].style.background = `url(${reply}) no-repeat center`;
        e.parentElement.style.color = "hsl(238, 40%, 52%)";
        header[i].style.background = "none";
        status[i].style.background = "none";
      }
    }
  }

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
        <button className="reply" onMouseOver={(element) => mouseOver(element)} onMouseOut={(element) => mouseOut(element)}>
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
