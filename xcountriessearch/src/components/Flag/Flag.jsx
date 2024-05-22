import fetchCountries from "../../services/services";
import React, { useState, useEffect } from "react";
import styles from "./Flag.module.css";
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
    fetchData();
  }, [])

  const handleChange = async (event) => {
    const searchText = event.target.value;
    const filteredData = await flagData.filter((item) => {
      const countryName = item.name.common.toLowerCase();
      const searchCountryText = searchText.toLowerCase();
      return countryName.includes(searchCountryText);
    });
    setSearchData(filteredData);
    setValue(searchText);
  }

  const dataToDisplay = value ? searchData : flagData;

  return (
    <div>
      <div className={styles.appBar}>
        <input type="text" className={styles.search} placeholder="Search for countries..." onChange={handleChange} value={value} />
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {dataToDisplay.length > 0 && dataToDisplay.map((item) => (
            <Card flagURL={item.flags.png} name={item.name.common} altName={item.flags.alt} key={item.cca3}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Flag;
