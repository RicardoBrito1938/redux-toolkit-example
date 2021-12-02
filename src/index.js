import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import userReducer from "./feature/user";
import themeReducer from "./feature/theme";
import pokemonNameReducer from "./feature/pokemonName";

import { pokemonApi } from "./services/pokemon";
import { githubAPI } from "./services/githubUser";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    pokemonName: pokemonNameReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [githubAPI.reducerPath]: githubAPI.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([pokemonApi.middleware, githubAPI.middleware])
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
