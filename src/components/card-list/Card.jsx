import "./card.styles.css";
const Card = ({ monster }) => {
  const { name } = monster;
  return (
    <div className="card-container">
      <img
        src={require(`../../assets/imgs/monsters/${name}.png`)}
        alt={`monster ${name}`}
        className="img"
      />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
