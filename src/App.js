import React, { useState } from 'react';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import RawTxnPage from './RawTxnPage';
import WidgetPage from './WidgetPage';

const OKTO_CLIENT_API_KEY = '60e5a15f-84f2-4cb4-9bf1-49749fa06a26';
function App() {
 console.log('App component rendered');
 const [authToken, setAuthToken] = useState(null);
 const handleLogout = () => {
    console.log("setting auth token to null")
    setAuthToken(null); // Clear the authToken
  };
 return (
   <Router>
     <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
       <Routes>
         <Route path="/" element={<LoginPage setAuthToken={setAuthToken} authToken={authToken} handleLogout={handleLogout}/>} />
         <Route path="/home" element={authToken ? <HomePage authToken={authToken} handleLogout={handleLogout}/> : <Navigate to="/" />} />
         <Route path="/raw" element={authToken ? <RawTxnPage authToken={authToken} handleLogout={handleLogout}/> : <Navigate to="/" />} />
         <Route path="/widget" element={authToken ? <WidgetPage authToken={authToken} handleLogout={handleLogout}/> : <Navigate to="/" />} />       
       </Routes>
     </OktoProvider>
   </Router>
 );
}
export default App;