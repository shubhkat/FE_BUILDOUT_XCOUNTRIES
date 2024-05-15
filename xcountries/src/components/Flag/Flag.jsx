import fetchCountries from "../../services/services";
import { useState, useEffect } from "react";
import styles from "./Flag.module.css";
import Card from "../Card/Card";

const Flag = () => {

  const [flagData, setFlagData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries();
        setFlagData(data);
      } catch (error) {
        console.error("Error fetching xcountries data:", error);
      }
    };
    fetchData();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {flagData.map((item) => (
        <Card flagURL={item.flags.png} name={item.name.common} altName={item.flags.alt} key={item.cca3} />
        ))}
      </div>
    </div>
  )
}

export default Flag;
