import React, {Component} from 'react';
import './ItemDescription.css';

class ItemDescription extends Component {

    render() {
        if (Array.isArray(this.props.text)){
            return (
                <div className="ItemDescription">
                    {this.props.text.map(function (item, key) {
                            return (
                                <p key={key}>{item}</p>
                            );
                        })
                    }
                </div>
            );
        } else {
            return <p>{this.props.text}</p>;
        }
        
    }
}

export default ItemDescription;
