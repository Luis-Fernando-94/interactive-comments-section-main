import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cards from "./Cards";
import ContentAnswer from "./ContentAnswer";
import InputComment from "./InputComment";
import Footer from "./Footer";

// Action ---------------------------------
import { listComments } from "../actions/listCommentsAction";

function Container() {
  const [currentUser, setCurrentUser] = useState({});
  const [comments, setComments] = useState([]);

  const data = useSelector(state => {return state.fetchData});
  const updatedComments = useSelector(state => {return state.addComment})
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("./data.json").then(res => res.json()).then(res => {
      dispatch(listComments(res));
    })
  }, [])

  useEffect(() => {
    setCurrentUser(data.currentUser);
    setComments(data.comments);
  }, [data]);

  useEffect(() => {
    setComments(updatedComments);
  }, [updatedComments])

  return (
    <div id="container">

      {/* Uma mensagem para os usuários que irão ver esta aplicação */}
      <div id="dev">
        <h3>Esta aplicação está em desenvolvimento ainda.</h3>
        <p>Foi publicado afim de salvar os dados</p>
      </div>
      {/* ------------------------------------------------------ */}



      {comments
        ? comments.map((comment, i) => {
            return (
              <div key={i} className="comment">
                <Cards currentUser={currentUser} comment={comment} />
                <ContentAnswer currentUser={currentUser} comment={comment} />
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
