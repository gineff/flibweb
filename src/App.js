import logo from './logo.svg';
//import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useRealmApp, RealmAppProvider } from "./RealmApp";
import LibraryLayout from "./Components/LibraryLayout";
import Books from "./Components/Books";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import {MONGODB_APP_ID} from './realm.config';

function App() {
  return (
    <div className="App">
      <RealmAppProvider appId={MONGODB_APP_ID}>
        <Router>
          <Navbar/>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/library/popular/day" />} />
              <Route path='/library' element={<LibraryLayout />} >
                <Route path='popular/:period' element={<Books />} />
                <Route path='new/:period' element={<Books />} />
              </Route>
              <Route path='/Login' element={<Login />} />
              <Route path='/SignUp' element={<SignUp />} />

            </Routes>
          </div>
        </Router>
      </RealmAppProvider>
    </div>
  );
}

export default App;
