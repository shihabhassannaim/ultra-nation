import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

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
  const handleAddCountry = (country) => {
    const newCart =([...cart, country]);
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1>Countries Loaded : {countries.length}</h1>
      <h3>country added : {cart.length}</h3>
      <Cart cart={cart}></Cart>
        {
          countries.map(country => <Country country={country} handleAddCountry = {handleAddCountry}></Country>)
        }
     
    </div>
  );
}

export default App;
