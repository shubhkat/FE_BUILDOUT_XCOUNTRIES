import React, { useEffect } from "react";
import fetchCountries from "../../services/services";
import { useState } from "react";
import styles from "./Flag.module.css";
import MemoizedCard from "../Card/Card";

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
        <MemoizedCard flagURL={item.flags.png} name={item.name.common} altName={item.flags.alt} key={item.cca3} />
        ))}
      </div>
    </div>
  )
}

const MemoizedFlag = React.memo(Flag);
export default MemoizedFlag;
