import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {

  const [people, setPeople] = useState([])
  
  useEffect(() => {
    getPeople();
  }, [])
  
  const getPeople = async () => {
    const response = await axios.get('/people');
    setPeople(response.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {people.map(person => (
            <li key={person.id}>{person.name} is {person.age} years old</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
