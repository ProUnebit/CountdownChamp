import React from 'react'
import Clock from './Clock';
import './App.css'
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'June 04, 2019',
            buttonActivity: true
        }
    }

    componentDidMount() {
        let element = document.getElementsByTagName("Button");
        console.log(element);
    }

    writeInInput = (event) => {
        this.setState({
            newDeadLine: event.target.value,
            buttonActivity: event.target.value !== '' ? false : true
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
