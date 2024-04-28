import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Assuming you're using React Router

import Homepage from './pages/Homepage/Homepage';
import Submission from './pages/Submission/Submission';
import Account from './pages/Account/Account';
import Notfound from './pages/Notfound';

function App() {
  
  
  //https://clerk.com/blog/building-a-react-login-page-template
  
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/account" exact element={<Account />}/>
        <Route path="/submission/*"  element={<Submission />}/>
        <Route path="/not-found"  element={<Notfound />}/>
      </Routes>
    </Router>
  );
};


//<Route login="/login" exact element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
export default App;