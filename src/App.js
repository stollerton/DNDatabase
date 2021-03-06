import React, {Component} from 'react';
import NavBar from './NavBar';
import Spell from './Spell';
import Items from './Items';
import ConfigData from './ConfigData';
import $ from 'jquery'; 
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        
        this.state = {
            db: JSON.parse(localStorage.getItem('compendium') || 'false')
        };

        console.log(this.state);

        
    }

    onDbUpdate(newDb){
        console.log("onDbUpdate", newDb);
        if (newDb){
            $.ajax(
            {
                url: newDb, 
                success: function(result){
                    console.log('got db', result.compendium);
                    localStorage.setItem('compendium', JSON.stringify(result.compendium));
                }, error: function (result) {
                    console.log('error getting db', result)
                }
            }
            );
        } else {
            localStorage.removeItem('compendium');
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header"></div>
                <NavBar></NavBar>
                <ConfigData onDbUpdate={this.onDbUpdate} />
                {this.state.db != false &&
                    <div className="itemwell">
                        <h4>Classes {this.state.db.class.length}</h4>
                        <h4>Spells {this.state.db.spell.length}</h4>
                        <h4>Feats {this.state.db.feat.length}</h4>
                        <h4>Race {this.state.db.length}</h4>
                        <h4>Monster {this.state.db.monster.length}</h4>
                        <h4>Background {this.state.db.background.length}</h4>
                        <h4>Items {this.state.db.item.length}</h4>
                    </div>
                }
                
                <div className="pagecontainer">
                    <Spell></Spell>
                    <Items items={this.state.db.item} />
                </div>
            </div>
        );
    }
}

export default App;
