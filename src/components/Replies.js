import { useEffect, useState } from "react";
import amyrobson from "../images/avatars/image-amyrobson.png";

function Replies(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    setCurrentUser(props.currentUser);
    setData(props.reply);
  }, [props]);

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

  function replyComments(event) {
    const input = document.getElementsByClassName("addComment")[0];

    if (event.target.getAttribute("class") == "reply") {
      let button = event.target;
      let comment = button.parentElement.parentElement.parentElement.parentElement.parentElement;
      comment.append(input);
      input.style.width = "100%";
    } else if(event.target.tagName == "FONT" || event.target.tagName == "SPAN") {
      let button = event.target.parentElement;
      let comment = button.parentElement.parentElement.parentElement.parentElement.parentElement;
      comment.append(input);
      input.style.width = "100%";
      input.style.marginTop = "0";
    }

  }

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
          {currentUser.username && currentUser.username == data.user.username ?
          <span className="currentUser">you</span> : console.log("_")}
          <p className="time">
            {data.createdAt
              ? data.createdAt
              : console.log("waiting time (replies)")}
          </p>
        </div>
          {currentUser.username && currentUser.username !== data.user.username ? (
            <div className="btns">
              <button
                className="reply"
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                onClick={replyComments}
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
        <span className="replyingTo">@{data.replyingTo ? data.replyingTo + " " : console.log("_")}</span>
        {data.content ? data.content : console.log("waiting content (replies)")}
      </p>
    </div>
  );
}

export default Replies;
