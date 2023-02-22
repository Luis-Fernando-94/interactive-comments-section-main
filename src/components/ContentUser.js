import { useEffect, useState } from "react";
import image from "../images/avatars/image-amyrobson.png";

function ContentUser(props) {
  const [data, setData] = useState({});
  // function addressImage() {
  //   return "." + props.data.user.image.png;
  // }

  useEffect(() => {
    setData(props.data);
  }, [props])

  return (
    <div className="contentUser">
      <header>
        <div className="status">
          <img src={image} alt="avatar" />
          <h4 className="name">{data.user ? data.user.username : console.log("waiting name (contentUser)")}</h4>
          <p className="time">{data.createdAt ? data.createdAt : console.log("waiting time (contentUser)")}</p>
        </div>
        <button className="reply">
          <span></span>Reply
        </button>
      </header>

      <p className="content">{data.content ? data.content : console.log("waiting content (contentUser)")}</p>
    </div>
  );
}

export default ContentUser;
