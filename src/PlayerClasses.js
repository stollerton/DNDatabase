import React, {Component} from 'react';

class PlayerClasses extends Component {
    constructor(props) {
        super(props);

        

        this.state = {
            db: JSON.parse(localStorage.getItem('compendium') || '{}')
        };

        console.log(this.state);

        
    }


    render() {
        return (
            <div className="PlayerClasses">
                
            </div>
        );
    }
}

export default PlayerClasses;
