import React, {setState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './components/Navbar';

import "./styles.css";
import Players from './components/Players';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
       console.log(res.data)
       this.setState({
         players: res.data
       })})
      .catch(error => {console.log(error)})
      
  }



  render(){ 
  return (
    <div className="App">
      <Navbar />
      <div className="playerContainer">
      
        {this.state.players.map( player => {
          return (
            <Players
            key={player.key}
            name={player.name}
            country={player.country}
            searches={player.searches} />
        )})}
      

      </div>
    </div>
  );
} 
}

export default App;
