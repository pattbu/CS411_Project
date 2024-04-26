import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Assuming you're using React Router

import Homepage from './pages/Homepage';
import Submission from './pages/Submission';
import Account from './pages/Account';
import Notfound from './pages/Notfound';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/account" exact element={<Account />}/>
        <Route path="/submission/*"  element={<Submission />}/>
        <Route path="/not-found"  element={<Notfound />}/>
        <Route login="/login" exact element={<Notfound />}/>
      </Routes>
    </Router>
  );
};
