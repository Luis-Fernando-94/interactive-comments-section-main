import "./App.css";
import Container from "./components/Container";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Reducers ---------------------------------
import { listCommentsReducer, addCommentReducer } from "./reducers/commentsReducer";

function App() {
  const allReducer = combineReducers({
    fetchData: listCommentsReducer,
    addComment: addCommentReducer
  })
  const store = createStore(allReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

export default App;
