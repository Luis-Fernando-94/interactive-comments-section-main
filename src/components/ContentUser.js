import { useEffect, useState } from "react";
import amyrobson from "../images/avatars/image-amyrobson.png";
// import juliusomo from "../images/avatars/image-juliusomo.png";
import maxblagun from "../images/avatars/image-maxblagun.png";
// import ramsesmiron from "../images/avatars/image-ramsesmiron.png";

import reply from "../images/icon-reply.svg";
import replyHover from "../images/icon-reply-hover.svg";

function ContentUser(props) {
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
    setData(props.data);
  }, [props]);

  return (
    <div className="contentUser">
      <header>
        <div className="status">
          <img src={maxblagun} alt="avatar" />
          <h4 className="name">
            {data.user
              ? data.user.username
              : console.log("waiting name (contentUser)")}
          </h4>
          <p className="time">
            {data.createdAt
              ? data.createdAt
              : console.log("waiting time (contentUser)")}
          </p>
        </div>
        <button className="reply" onMouseOver={(element) => mouseOver(element)} onMouseOut={(element) => mouseOut(element)}>
          <span></span>Reply
        </button>
      </header>

      <p className="content">
        {data.content
          ? data.content
          : console.log("waiting content (contentUser)")}
      </p>
    </div>
  );
}

export default ContentUser;
