import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import AppWrapper from "./components/AppWrapper";
import todosSaga from "./sagas/todosSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(todosSaga);

const App = () => (
  <Provider store={store}>
    <div>
      <AppWrapper />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
