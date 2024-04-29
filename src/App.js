import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Assuming you're using React Router

import Homepage from './pages/Homepage/Homepage';
import Submission from './pages/Submission/Submission';
import Account from './pages/Account/Account';
import Login from './pages/Login/login'

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/login" exact element={<Login />}/>
        <Route path="/account" exact element={<Account />}/>
        <Route path="/submission/*" element={<Submission />} />
        <Route path="*" render={(props) => <Navigate to="/404" />}/>
      </Routes>
    </Router>
  );
};

export default App;