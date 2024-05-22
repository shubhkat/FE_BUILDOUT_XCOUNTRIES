import "./Card.css"

const Card = ({
    flagURL,
    name,
    altName
}) => {
  
//   console.log("Card.jsx Card debug {flagURL, name, altName}::", {flagURL, name, altName});

  return (
    <div className="countryCard">
        <img src={flagURL} alt={altName} width={100} height={100} />
        <h2>{name}</h2>
    </div>
  )
}

export default Card;