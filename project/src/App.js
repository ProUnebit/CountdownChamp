import React from 'react'
import Clock from './Clock';
import './App.css'
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2018'
        }
    }

    changeDeadLine = () => {
        this.setState({
            deadline : this.state.newDeadLine
        })
    }

    render () {
        return (
            <div className="app">
                <div className="app-title">Countdown to {this.state.deadline}</div>
                <Clock deadline = {this.state.deadline}/>
                <Form inline>
                    <FormControl
                        className="deadline-input"
                        placholder="new date"
                        onChange = {event => this.setState({newDeadLine: event.target.value})}
                    />
                <Button onClick = {this.changeDeadLine}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;
