import Card from "./Card";
import "./card-list.styles.css";
const CardList = ({ monsters }) => (
  // When the props are different the components will  reRender

  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);


    
export default CardList;
