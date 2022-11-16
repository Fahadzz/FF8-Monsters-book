import { Component } from "react";
import  Card  from './Card';
import "./card-list.styles.css"
class CardList extends Component {
    render(){
        console.log(this.props.monsters);
        console.log("Render from CardList")
        // When the props are different the components will  reRender
        const {monsters} = this.props
        return(
            <div className="card-list">
                { monsters.map((monster) => {
                        return (
                            <Card monster={monster} key={monster.id} /> 
                        )
                    })}
            </div>
        )
    }
}

export default CardList;