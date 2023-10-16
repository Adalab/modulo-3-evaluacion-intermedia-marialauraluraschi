import { useState, useEffect } from 'react';
import getCountries from '../services/api';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState('All');
  const [countryName, setCountryName] = useState('');
  const [countryCapital, setCountryCapital] = useState('');

  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const handleFilter = (ev) => {
    setSearch(ev.target.value);
  };

  const handleAddName = (ev) => {
    setCountryName(ev.target.value);
  };

  const handleAddCapital = (ev) => {
    setCountryCapital(ev.target.value);
  };

  const handleAdd = () => {
    const newCountry = {
      name: countryName,
      capital: countryCapital,
    };
    setCountries([...countries, newCountry]);
  };

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (continent === 'All' || country.continent === continent)
    );
  });

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Country Info App</h1>
        <p>
          Explore information about countries and capitals. Add new
          countries and filter through the list
        </p>
      </header>
      <main className='main'>
        <form onSubmit={handleForm}>
          <input
            type='text'
            onChange={handleFilter}
            placeholder='Search by country name'
          />
          <input
            type='text'
            onChange={handleAddName}
            placeholder='Add a country name'
          />
          <input
            type='text'
            onChange={handleAddCapital}
            placeholder='Add a capital'
          />
          <button onClick={handleAdd}>Add</button>
        </form>

        {filteredCountries.map((country, index) => (
          <article className='article' key={index}>
            <h2 className='article__country'>{country.name}</h2>
            <p className='article__capital'>{country.capital}</p>
          </article>
        ))}
      </main>
      <footer className='footer'>Copy</footer>
    </>
  );
}

export default App;
