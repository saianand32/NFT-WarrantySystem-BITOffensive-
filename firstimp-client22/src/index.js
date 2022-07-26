import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
import "./style.scss";
=======
import "./style.scss"
>>>>>>> 8443316689e8b4d70f79a5bd93f6226c21611028
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
<<<<<<< HEAD
// import { Web3ReactProvider } from "@web3-react/core";
// import Web3 from "web3";

// function getLibrary(provider) {
//   return new Web3(provider);
// }
=======
>>>>>>> 8443316689e8b4d70f79a5bd93f6226c21611028

// store
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
<<<<<<< HEAD
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


=======
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
>>>>>>> 8443316689e8b4d70f79a5bd93f6226c21611028
serviceWorker.unregister();
