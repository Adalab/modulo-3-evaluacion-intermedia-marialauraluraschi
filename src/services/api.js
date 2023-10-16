const getCountries = () => {
    return fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,region')
      .then((response) => response.json())
      .then((response) => {
        const result = response.map(country => ({
          name: country.name.common,
          capital: country.capital,
          flag: country.flags.png,
          continent: country.continent,
        }));
        return result;
      });
  };
  
  export default getCountries;
  
  