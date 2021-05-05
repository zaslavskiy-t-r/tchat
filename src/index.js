import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-rXL4fgONDO4lg5BSmKB_BMPe7EDopDU",
  authDomain: "tchat-1385d.firebaseapp.com",
  projectId: "tchat-1385d",
  storageBucket: "tchat-1385d.appspot.com",
  messagingSenderId: "642370524214",
  appId: "1:642370524214:web:71eacba3d00f95bd2f7497"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      firestore,
      auth
    }}>
      <App/>
    </Context.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
