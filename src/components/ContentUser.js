import { useEffect, useState } from "react";
import amyrobson from "../images/avatars/image-amyrobson.png";
// import juliusomo from "../images/avatars/image-juliusomo.png";
import maxblagun from "../images/avatars/image-maxblagun.png";
// import ramsesmiron from "../images/avatars/image-ramsesmiron.png";

import reply from "../images/icon-reply.svg";
import replyHover from "../images/icon-reply-hover.svg";

function ContentUser(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [data, setData] = useState({});

  function mouseOver(event) {
    let target = event.target;

    if (target.getAttribute("class") == "reply" || target.getAttribute("class") == "delete" || target.getAttribute("class") == "edit") {
      let span = target.children[0];
      span.setAttribute("class", "icon");
    } else if(target.tagName == "FONT") {
      let span = target.parentElement.children[0];
      span.setAttribute("class", "icon");
    } else if(target.tagName == "SPAN") {
      target.setAttribute("class", "icon");
    }
  }

  function mouseOut(event) {
    let target = event.target;
  
    if (target.getAttribute("class") == "reply" || target.getAttribute("class") == "delete" || target.getAttribute("class") == "edit") {
      let span = target.children[0];
      span.removeAttribute("class");
    } else if(target.tagName == "FONT") {
      let span = target.parentElement.children[0];
      span.removeAttribute("class");
    } else if(target.tagName == "SPAN") {
      target.removeAttribute("class");
    }
  }

  useEffect(() => {
    setCurrentUser(props.currentUser);
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

        {(currentUser.username && currentUser.username !== data.user.username) ? (
          <div className="btns">
            <button
              className="reply"
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
              <span></span>Reply
            </button>
          </div>
        ) : (
          <div className="btns">
            <button
              className="delete"
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
              <span></span>Delete
            </button>
            <button
              className="edit"
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
              <span></span>Edit
            </button>
          </div>
        )}
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
