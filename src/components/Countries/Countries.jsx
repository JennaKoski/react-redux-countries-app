import React from "react";
import { useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import axios from "axios";
import { useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  console.log(countries);

  return (
    <div>
      {countries.map((country) => {
        return (
          <CountryCard
            key={country.name.official}
            official={country.name.official}
            languages={country.languages}
          />
        );
      })}
    </div>
  );
};

export default Countries;