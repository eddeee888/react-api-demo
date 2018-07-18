import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./app.js";
import reducer from "./store/reducers";

// *** create/initialise store
function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const middlewares = composeEnhancers(applyMiddleware(thunk));

  return createStore(reducer, initialState, middlewares);
}

const store = configureStore({});

// bootstrap react
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
