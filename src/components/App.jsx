import { useState, useEffect } from 'react';
import getCountries from '../services/api';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState('All');
  const [countryName, setCountryName] = useState('');
  const [countryCapital, setCountryCapital] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
  const [countryContinent, setCountryContinent] = useState('');

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

  const handleAddFlag = (ev) => {
    setCountryFlag(ev.target.value);
  };

  const handleAddContinent = (ev) => {
    setCountryContinent(ev.target.value);
  };

  const handleAdd = () => {
    const newCountry = {
      name: countryName,
      capital: countryCapital,
      flag: countryFlag,
      continents: [countryContinent],
    };
    setCountries([...countries, newCountry]);
  };

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (continent === 'All' || country.continents.includes(continent))
    );
  });
  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Country Info App</h1>
        <p>
          Explore information about countries and capitals. Add new countries
          and filter through the list
        </p>
      </header>
      <main className='main'>
        <form onSubmit={handleForm}>
          <input
            type='text'
            onChange={handleFilter}
            placeholder='Search by country name'
          />
          <select onChange={(item) => setContinent(item.target.value)}>
            <option>All</option>
            <option>Africa</option>
            <option>North America</option>
            <option>South America</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Oceania</option>
          </select>
        </form>

        <form onSubmit={handleForm}>
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
          <input
            type='text'
            onChange={handleAddFlag}
            placeholder='Add a flag URL'
          />
          <input
            type='text'
            onChange={handleAddContinent}
            placeholder='Add a continent'
          />
          <button onClick={handleAdd}>Add</button>
        </form>

        {filteredCountries.map((country, index) => (
          <article className='article' key={index}>
            <img src={country.flag} alt={`Flag of ${country.name}`} />
            <h2 className='article__country'>{country.name}</h2>
            <p className='article__capital'>{country.capital}</p>
            {Array.isArray(country.continents) &&
              country.continents.map((continent, i) => (
                <p key={i} className='article__continent'>
                  {continent}
                </p>
              ))}
          </article>
        ))}
      </main>
      <footer className='footer'>Copy</footer>
    </>
  );
}

export default App;
