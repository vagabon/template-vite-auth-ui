// src/firebase.js
import { AppConf } from 'conf/AppConf';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: AppConf.VITE_FIREBASE_APIKEY,
  authDomain: AppConf.VITE_FIREBASE_AUTHDOMAIN,
  projectId: AppConf.VITE_FIREBASE_PROJECTID,
  storageBucket: AppConf.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: AppConf.VITE_FIREBASE_MESSAGINGSENDID,
  appId: AppConf.VITE_FIREBASE_APPID,
  measurementId: AppConf.VITE_FIREBASE_MEASUREMENTID,
};

const firebaseApp = initializeApp(firebaseConfig);

export const messaging = getMessaging(firebaseApp);

export const generateToken = () => {
  return getToken(messaging, { vapidKey: AppConf.VITE_FIREBASE_PRIVATEKEY })
    .then((currentToken) => {
      if (currentToken) {
        return Promise.resolve(currentToken);
      }
      console.error('No registration token available. Request permission to generate one.');
      return Promise.resolve(undefined);
    })
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });
};

export { getToken };
