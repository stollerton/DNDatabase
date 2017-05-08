import React, {Component} from 'react';
import Item from "./Item"

class Items extends Component {

    render() {
        console.log(this.props);
        if (this.props.items) {
            return (
                <div className="Items">
                    <h2>{this.props.items.length}
                        Items!</h2>
                    <ul className="Items">
                        {this
                            .props
                            .items
                            .map(function (item, key) {
                                return (
                                    <Item key={key} item={item}></Item>
                                );
                            })
                        }
                    </ul>
                </div>
            );
        } else {
            return (
                <h2>No items!</h2>
            )
        }
    }
}

export default Items;