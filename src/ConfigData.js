import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import './ConfigData.css';

class ConfigData extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            dataValue: ""
        }
    }
    getInitialState() {
        return {showModal: false};
    }

    close = () => {
        this.setState({showModal: false});
    }

    open = () => {
        this.setState({showModal: true});
    }

    onDataChange = (event) => {
        this.setState({dataValue: event.target.value});
        this.props.onDbUpdate(event.target.value);
    }

    render() {
        return (
            <div className="ConfigData text-center">
                <Button bsStyle="warning" bsSize="large" onClick={this.open}>
                    Set Data URL
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Set Data URL</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <input type="text" className="bigText" onChange={this.onDataChange} value={this.state.dataValue} />
                        <p>Provide your own DND Data json and we will do the rest.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ConfigData;
