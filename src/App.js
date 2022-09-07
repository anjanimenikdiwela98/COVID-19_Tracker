import React, { useEffect, useState } from 'react';
import{
  FormControl,
  MenuItem,
  Select
} from "@mui/material";
import './App.css';

function App() {
  const[countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')
  //STATE = how to write a variable in REACT
  //https://disease.sh/v3/covid-19/countries
  //USEEFFECT =Runs a piece of code
  //based on a given condition

  useEffect(() => {
    //This code inside here will run once when the componenr loads and not again
    //async -> send a request, wait for it do something with info
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) =>{
        const countries = data.map((country) =>(
          {
            name: country.country, //United States, United Kingdom, France
            value: country.countryInfo.iso2,  //USA, UK, FR
          }
        ))
        setCountries(countries)
      })
    }
    getCountriesData()

  }, [])

  const onCountryChange =async (event) => {
    const countryCode = event.target.value
    console.log("Y0000 >>>>>>", countryCode)

    setCountry(countryCode);
  }

  return (
    <div className="App">
      <div className="app__header">

      
      <h1>COVID-19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
          {/* Loop through all the countries and show a dropdown list of the options */}

          <MenuItem value="worldwide">Worldwide</MenuItem>
          {
            countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))
          }

          {/* <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option 2</MenuItem>
          <MenuItem value="worldwide">Option 3</MenuItem>
          <MenuItem value="worldwide">Option 4</MenuItem> */}

        </Select>
      </FormControl>
      </div>
        <div className="app__stats">


      {/*InfoBoxs */}
      {/*InfoBoxs */}
      {/*InfoBoxs */}
      </div>

      {/*Table */}
      {/*Graph */}

      {/*Map */}
    </div>
  );
}

export default App;
