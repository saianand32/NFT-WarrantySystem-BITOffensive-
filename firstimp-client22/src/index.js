import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
// import { Web3ReactProvider } from "@web3-react/core";
// import Web3 from "web3";

// function getLibrary(provider) {
//   return new Web3(provider);
// }

// store
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
   
      <Provider store={store}>
        
        {/* <Web3ReactProvider getLibrary={getLibrary}> */}
        <BrowserRouter>
          <App />
          </BrowserRouter>
          {/* </Web3ReactProvider> */}
        
      </Provider>
    
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();
