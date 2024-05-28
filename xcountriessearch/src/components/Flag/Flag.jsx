import fetchCountries from "../../services/services";
import React, { useState, useEffect } from "react";
import "./Flag.css";
import Card from "../Card/Card";

const Flag = () => {

  const [flagData, setFlagData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries();
        setFlagData(data);
      } catch (error) {
        console.error(error);
      }
    };
    (async function data () {
      await fetchData();
    })();
  }, [])

  const handleChange = (event) => {
    const searchText = event.target.value;
    const searchCountryText = searchText.toLowerCase();
    const filteredData = flagData.filter((item) => {
      const countryName = item.name.common.toLowerCase();
      return countryName.includes(searchCountryText);
    });
    setSearchData(filteredData);
    setValue(searchText);
  }

  const dataToDisplay = value ? searchData : flagData;

  return (
    <div>
      <div className="appBar">
        <input type="text" className="search" placeholder="Search for countries..." onChange={handleChange} value={value} id="search"/>
      </div>
      <div className="container">
        <div className="grid">
          {dataToDisplay.length > 0 && dataToDisplay.map((item) => (
            <Card flagURL={item.flags.png} name={item.name.common} altName={item.flags.alt} key={item.cca3}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Flag;
