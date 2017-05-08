import React, {Component} from 'react';
import $ from 'jquery'; 

class Spell extends Component {
    constructor(props) {
        super(props);

        
        
        this.state = {
            db: JSON.parse(localStorage.getItem('compendium') || '{}')
        };

        console.log(this.state);

        
    }


    render() {
        return (
            <div className="Spell">
                A Spell
            </div>
        );
    }
}

export default App;
