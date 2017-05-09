import React, {Component} from 'react';
import './Spell.css';
import $ from 'jquery'; 

class Spell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="spellwell">
                <div className="spellcardhead">
                    <h1>Fireball</h1>
                </div>
                <div className="spellcard-body">
                    <div className="spellcardsubhead spell-specifics">
                        <h2>Specifics</h2>
                    </div>
                    <div className="spellcardinfolist">
                        <ul>
                            <li>Spell Level: 3</li>
                            <li>Spell School: Evocation</li>
                            <li>Classes: Cleric (Light), Sorcerer, Warlock (Fiend), Wizard, Fighter (Eldritch Knight)</li>
                            <li>Cast Time: 1 action</li>
                            <li>Range: 150 feet</li>
                            <li>Components: V, S, M (a tiny ball of bat guano and sulfur)</li>
                            <li>Duration: Instantaneous</li>
                        </ul>
                    </div>
                    <div className="spellcardsubhead spell-description">
                        <h2>Description</h2>
                    </div>
                    <div className="spelldescriptiontext">
                        <p>A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.</p>
                        <p>The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.</p>
                        <p>At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.</p>
                    </div>
                </div>        
             </div>
        );
    }
}

export default Spell;