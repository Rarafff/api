import React, { useEffect, useState } from 'react';
import Form from './Form';

function Country() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFormData = (formData) => {
    setName(formData.name);
    setPhoneNumber(formData.phoneNumber);
  }
  <Form handleFormData={handleFormData}></Form>

  const handleCountrySelect = (event) => {
    const selectedCountryCode = event.target.value;
    setSelectedCountry(selectedCountryCode);
    const selectedData = countries.find((country) => country.countryInfo.iso2 === selectedCountryCode);
    setCountryData(selectedData);
  }

  useEffect(() => {
    // Function to fetch country data
    const loadCountries = async () => {
      try {
        const response = await fetch("https://corona.lmao.ninja/v2/countries");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };
    loadCountries();
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="countrySelect" className='mb-2 '>Select a Country:</label>
        <br />
        <select
          id="countrySelect"
          value={selectedCountry}
          onChange={handleCountrySelect}
        >
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.countryInfo.iso2}>
              {country.country}
            </option>
          ))}
        </select>
      </div>
      {countryData && (
        <div>
          <h2>{countryData.country}</h2>
          <p>Name: {name}</p>
          <p>Phone Number: {phoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default Country;
