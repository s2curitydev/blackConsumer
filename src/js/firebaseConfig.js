// import * as firebase from "firebase/app";
import firebase from "firebase/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";
// import firebase from "firebase/app";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyB4aOmZmGftgZhJHB-xVhpteJiBEXOfQ1U",
  authDomain: "hi-penticton.firebaseapp.com",
  databaseURL: "https://hi-penticton-default-rtdb.firebaseio.com/",
  projectId: "hi-penticton",
  storageBucket: "hi-penticton.appspot.com",
  messagingSenderId: "669545681142",
  appId: "1:669545681142:web:1a3937e3aac4ac75bc5cd7",
  measurementId: "G-M5QHLFZ6D0",
};

//사용 방법입니다.
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();
