import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Assuming you're using React Router

import Homepage from './pages/Homepage';
import Submission from './pages/Submission';
import Account from './pages/Account';
import Notfound from './pages/Notfound';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />}>
        </Route>
        <Route path="/account" exact element={<Account />}>
        </Route>
        <Route path="/submission" exact element={<Submission />}>
        </Route>
        <Route path="/not-found" exact element={<Notfound />}>
        </Route>
      </Routes>
    </Router>
  );
};
