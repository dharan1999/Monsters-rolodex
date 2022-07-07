import { Component } from "react";
import './card-list.styles.css';
import CardComponent from "../card/card-component.component";

class CardList extends Component {
    render() {
      
        const { monsters } = this.props;
        return (
            <div className="card-list">
               {monsters.map((monster) => {
               const {name,id,email} = monster;
               return (
                    <CardComponent Name={name} Email={email} Id={id}/>
                   
               )})}
            </div>
        );
        
    }
}
export default CardList;