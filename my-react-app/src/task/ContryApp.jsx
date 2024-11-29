import React from 'react'
import { useState,useEffect } from 'react'


const ContryApp = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
       .then(response => response.json())
       .then(data => setCountries(data))
       .catch(error => console.log(error))
    }, [])

  return (
    <div>
        {countries.map(country => (
            <div key={country.alpha3Code}>
                <h1>{country.name}</h1>
                <p>{country.capital}</p>
                <img src={country.flag} alt={country.name}/>
            </div>
        ))}
        
    </div>
  )
}

export default ContryApp