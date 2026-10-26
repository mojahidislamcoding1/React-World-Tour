import { useState } from 'react';
import './Country.css'
const Country = ({country , handleVisitedCountry, handleVisitedFlags}) => {

const {name , flags , maps , population , region , startOfWeek , cca2} = country;

  const [visited , setVisited] = useState(false);
  const handleButton = () => {
    setVisited(!visited)
  }
  
  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
      <h3 style={{color : visited ? 'purple' : 'black'}}> {name?.common} </h3>
      <img src= {flags.png} /> <br />
      <a href={maps.googleMaps} target='blank'>Google Maps</a>
      <p>Population : {population}</p>
      <p>Week Start : {startOfWeek}</p>
      <p>Region : {region}</p>
      <p><small>Code : {cca2}</small></p>
      <button onClick={() => handleVisitedCountry(country) } >Mark Visited </button>
      <button onClick={() => handleVisitedFlags(country.flags.png)} >Add Flags</button><br /><br />  
      <button onClick={handleButton}>{visited? 'Visited' : 'Going'}</button> <br/>
      {visited ? 'I have visited this Country ' : ' I want to Visit'}
    </div>
  );
};

export default Country;