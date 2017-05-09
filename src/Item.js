import React, {Component} from 'react';
import ItemDescription from './ItemDescription'
import './Item.css';

class Item extends Component {


    render() {

        //console.log(this.props);

        return (
            <div className="itemwell">
                <div className="cardhead">
                    <h1>{this.props.item.name}</h1>
                </div>
                <div className="card-body">
                    <div className="cardsubhead item-attributes">
                        <h2>Attributes</h2>
                    </div>
                    <div className="cardinfolist">
                        <ul>
                            <li>Weight: {this.props.item.weight} lbs</li>
                            <li>Rarity: {this.props.item.rarity}</li>
                            <li>Type: {this.props.item.type}</li>
                            <li>Damage Type: {this.props.item.dmgType}</li>
                            <li>Magic Item: {this.props.item.magic}</li>
                            <li>Properties: {this.props.item.property}</li>
                            <li>Damage: {this.props.item.dmg1} {this.props.item.dmg2}</li>
                            <li>Roll {this.props.item.roll}</li>
                        </ul>
                    </div>
                    <div className="cardsubhead item-description">
                        <h2>Description</h2>
                    </div>
                        {this.props.item.text && 
                            <ItemDescription text={this.props.item.text} />
                        }
                    <div className="sourcetext">
                        <p>Source: Dungeon Master's Guide, page 153</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
