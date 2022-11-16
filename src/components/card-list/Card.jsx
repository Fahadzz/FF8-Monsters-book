import { Component } from "react";
import "./card.styles.css"
class Card extends Component {
    render(){
        const {name} = this.props.monster
        
        return(
            <div className="card-container">
            <img 
            src={require(`../../assets/imgs/monsters/${name}.png`)}
             alt={`monster ${name}`} 
             className="img" />
            <h2>{name}</h2>
        </div>
        )
    }
}

export default Card