import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';

import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
