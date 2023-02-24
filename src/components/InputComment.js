import juliusomo from "../images/avatars/image-juliusomo.png";

function InputComment() {
  return (
    <div className="addComment">
      <img src={juliusomo} alt="user image" />
      <form>
        <input type="text" placeholder="Add a comment..." />
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default InputComment;