import {Component} from 'react';
import './card.styles.css';
class CardComponent extends Component{
    render() {
        return (
            <div className="card-container" key={this.props.Id}>
                <img alt={`monster ${this.props.Name}`} src={`https://robohash.org/${this.props.Id}?set=set2`}/> 
                <h2>{this.props.Name}</h2>
                <p>{this.props.Email}</p>
             </div>
        );
    }
}
export default CardComponent;