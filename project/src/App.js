import React from 'react'
import Clock from './Clock';
import './App.css'
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'June 04 2019',
            buttonActivity: true
        }
    }

    regExpForInput = /\b[\Da-z]{3,9}\b\s(0?[1-9]|[12][0-9]|3[01])\s(201[89]|20[2-9][0-9]|2[1-9][0-9][0-9]|[3-9][0-9][0-9][0-9])\b/i;

    componentDidMount() {
        let element = document.getElementsByTagName("Button")[0];
        console.log(element);
    }

    // defaultValueRemove = (event) => {
    //     event.target.value = '';
    // }

    writeInInput = (event) => {

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
                        className="deadline-input"
                        placholder="new date"
                        onChange = {this.writeInInput}
                    />
                <Button
                    bsStyle="info"
                    disabled = {this.state.buttonActivity}
                    onClick = {this.changeDeadLine}
                    >Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;
