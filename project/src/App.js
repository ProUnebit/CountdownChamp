import React from 'react'
import Clock from './Clock';
import { Form, FormControl, Button, HelpBlock } from 'react-bootstrap';
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'June 04 2019',
            buttonActivity: true
        }
    }

    regExpForInput = /^\b[\Da-z]{3,9}\b\s(0?[1-9]|[12]\d|3[01])\s(201[89]|20[2-9]\d|2[1-9]\d{2}|[3-9]\d{3})$/i;

    writeInInput = event => {

        event.preventDefault();

        this.setState({
            newDeadLine: event.target.value,
            buttonActivity: !this.regExpForInput.test(event.target.value)
        })
    }

    changeDeadLine = () => {
        this.setState({
            deadline : this.state.newDeadLine
        })
    }

    render () {
        return (
            <div className="app">
                <div className="app-title">Countdown to <span>{this.state.deadline}</span></div>
                <Clock deadline = {this.state.deadline}/>
                <Form inline>
                    <FormControl
                        bsSize="lg"
                        type="text"
                        placeholder="Enter date"
                        className="deadline-input"
                        onChange = {this.writeInInput}
                    />
                <Button
                    bsStyle="info"
                    bsSize="lg"
                    disabled = {this.state.buttonActivity}
                    onClick = {this.changeDeadLine}
                    >Submit</Button>
                <HelpBlock
                    className = {this.state.buttonActivity ? 'helpblock' : 'helpblock-success'}
                    >{!this.state.buttonActivity ? '👍' : "This form format is: 'Month DD YYYY'"}
                </HelpBlock>
                </Form>
            </div>
        )
    }
}

export default App;
