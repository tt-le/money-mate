import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Login from './login.js';
import Register from './register.js';
import LandingHeader from './landing-header';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <head>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </head>
        <body>
          <header>
            <LandingHeader />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Routes>
          </main>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
