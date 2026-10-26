import { useEffect, useState } from "react";
import Country from "./Country";
import './Countries.css'
const Countries = () => {

  const [countries, setCountries] = useState([])
  const [visitedCountry , setVisitedCountry] = useState([])
  const [visitedFlag , setVisitedFlags] = useState([])

  useEffect(() => {
    fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])

  const handleVisitedCountry = country => {
    console.log("Add this to your visited Country")
    const newVisited = [...visitedCountry, country];
    setVisitedCountry(newVisited);
  }

  const handleVisitedFlags = flag => {
    console.log('Visited Flags')
    const newFlags = [...visitedFlag , flag]
    setVisitedFlags(newFlags)
  }

  return (
    // Visited Countries 
    <div>
      <h3> Countries : {countries.length} </h3>

    <div>
      <h4>Visited Countries : {visitedCountry.length}</h4>
      <ol className="li-style">
        {
          visitedCountry.map(country => <li key={country.cca3}>
            {country.name.common}
          </li>)
        }
      </ol>
    </div>

        {/* visited flags  */}

        <div className="flags-container">
          {
            visitedFlag.map(Flag => <img src={Flag}></img>)
          }
        </div>

        {/* display visited country */}

      <div className="country-container" >
       {
        countries.map((country) => 
          <Country key={country.root}
          handleVisitedCountry = {handleVisitedCountry}
          handleVisitedFlags = {handleVisitedFlags}
          country = {country}
          ></Country>
        )
      }
      </div>
   
    </div>
  );
};

export default Countries;