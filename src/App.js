import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        console.log(data);
        const names = data.map(country => country.name)
      })
      .catch(error => console.log(error))
  }, [])
  const handleAddCountry = (country) => console.log('adding country' , country);
  return (
    <div className="App">
      <h1>Countries Loaded : {countries.length}</h1>
        {
          countries.map(country => <Country country={country} handleAddCountry = {handleAddCountry}></Country>)
        }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
