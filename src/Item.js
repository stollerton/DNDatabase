import React, {Component} from 'react';
import './Item.css';

class Item extends Component {
    render() {
        return (
            <div className="itemwell">
                <div className="cardhead">
                    <h1>Bag of Holding</h1>
                </div>
                <div className="card-body">
                    <div className="cardsubhead item-attributes">
                        <h2>Attributes</h2>
                    </div>
                    <div className="cardinfolist">
                        <ul>
                            <li>Weight: 15 lbs</li>
                            <li>Rarity: Uncommon</li>
                        </ul>
                    </div>
                    <div className="cardsubhead item-description">
                        <h2>Description</h2>
                    </div>
                    <div className="descriptiontext">
                        <p>This bag has an interior space considerably larger than its outside
                            dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can
                            hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs
                            15 pounds, regardless of its contents. Retrieving an item from the bag requires
                            an action.</p>
                        <p>If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and
                            its contents are scattered in the Astral Plane. If the bag is turned inside out,
                            its contents spill forth, unharmed, but the bag must be put right before it can
                            be used again. Breathing creatures inside the bag can survive up to a number of
                            minutes equal to 10 divided by the number of creatures (minimum 1 minute), after
                            which time they begin to suffocate.</p>
                        <p>Placing a bag of holding inside an extradimensional space created by a
                            Heward's handy haversack, portable hole, or similar item instantly destroys both
                            items and opens a gate to the Astral Plane. The gate originates where the one
                            item was placed inside the other. Any creature within 10 feet of the gate is
                            sucked through it to a random location on the Astral Plane. The gate then
                            closes. The gate is one-way only and can't be reopened.</p>
                    </div>
                    <div className="sourcetext">
                        <p>Source: Dungeon Master's Guide, page 153</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
