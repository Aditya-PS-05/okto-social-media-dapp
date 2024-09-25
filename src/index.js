import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
root.render(
 <React.StrictMode>
   <GoogleOAuthProvider clientId = "614667171011-41dh132tq9kh9mole3v37dfklahq188o.apps.googleusercontent.com">
     <App />
   </GoogleOAuthProvider>
 </React.StrictMode>
);