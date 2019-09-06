import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseApiKey } from './apikeys';

const firebaseConfig = firebase.initializeApp({
  apiKey: firebaseApiKey,
  authDomain: 'todoist-react-829ba.firebaseapp.com',
  databaseURL: 'https://todoist-react-829ba.firebaseio.com',
  projectId: 'todoist-react-829ba',
  storageBucket: '',
  messagingSenderId: '110833205415',
  appId: '1:110833205415:web:5072fd777ec9313145db82'
});

export { firebaseConfig as firebase };
