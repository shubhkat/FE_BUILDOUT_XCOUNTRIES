import fetchCountries from "../../services/services";
import { useState, useEffect } from "react";
import styles from "./Flag.module.css";
import Card from "../Card/Card";

const Flag = () => {

  const [flagData, setFlagData] = useState([]);

  useEffect(() => {
    return async () => {
      const data = await fetchCountries();
      setFlagData(data);
    }
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
