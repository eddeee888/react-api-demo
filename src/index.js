import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./app.js";
import rootReducer from "./store/rootReducer";
import rootSaga from "./store/rootSaga";

const sagaMiddleware = createSagaMiddleware();

// *** create/initialise store
function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  //put middlewares into this array
  const middlewareArray = [thunk, sagaMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewareArray))
  );

  sagaMiddleware.run(rootSaga);

  return store;
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
