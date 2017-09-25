import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            text: ''
            
        };
    }
    
    
    addReminder(){
      this.props.addReminder(this.state.text);
     
    }
    
    renderReminders(){
        return (
            <ul>
            {
              this.props.reminders.map(reminder => {
                  return (
                  <li key={reminder.id} className="list-group-item"><div>{reminder.text}</div></li>
                  )
              })
            }
            </ul>
            )
    }
    
    
    render(){
        console.log('this.props.reminder',this.props.reminders);
        return (
            <div className="App">
                <div className="title">
                    El Recordatorio
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input 
                            className="form-control"
                            placeholder="tengo que hacer.."
                            onChange={(event) => this.setState({text: event.target.value}) }
                        />
                        <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={() => this.addReminder()}
                        
                        >
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
            
            );
    }
    
}

function mapStateToProps(state){
    return {
        reminders: state.reminder
    };
}
export default connect(mapStateToProps, { addReminder })(App);