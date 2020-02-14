import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const App = () => {
  axios
    .get('http://localhost:5000/api/players')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
  return (
    <div className="App">

    </div>
  );
}

export default App;
