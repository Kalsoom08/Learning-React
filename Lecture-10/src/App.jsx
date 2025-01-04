import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import AllUsers from './Components/AllUsers';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div>
     <NavBar/>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/all-users" element={<AllUsers />} />
        </Routes>
    </div>
 

  );
};

export default App;
