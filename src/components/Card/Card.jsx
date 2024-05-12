/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Card.module.css"

const Card = ({
    flagURL,
    name,
    altName
}) => {
  
//   console.log("Card.jsx Card debug {flagURL, name, altName}::", {flagURL, name, altName});

  return (
    <div className={styles.card}>
        <img src={flagURL} alt={altName} width={100} height={100} />
        <h2>{name}</h2>
    </div>
  )
}

const MemoizedCard = React.memo(Card);

export default MemoizedCard;