import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';

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
    
    deleteReminder(id){
        console.log("id of reminder", id)
        console.log(this.props)
        this.props.deleteReminder(id)
    }
    
    renderReminders(){
       const reminders = this.props.reminders
       
        return (
            <ul>
            {
              this.props.reminders.map(reminder => {
                  return (
                  <li key={reminder.id} className="list-group-item">
                      <div className="list-item">{reminder.text}</div>
                      <div className="list-item delete-button" onClick={() => this.deleteReminder(reminder.id)}> &#x2715;</div>
                  </li>
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
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input 
                            className="form-control"
                            placeholder="tengo que hacer.."
                            onChange={(event) => this.setState({text: event.target.value}) }
                             onKeyPress = {(event) => {
                                    if (event.key === 'Enter'){
                                      this.addReminder();
                                    }
                                  }}
                        />
                        <button 
                        type="button" 
                        className="add-btn"
                        onClick={() => this.addReminder()}
                        
                        >
                            Guardar
                        </button>
                    </div>
                   
                </div>
                 {this.renderReminders()}
            </div>
            
            );
    }
    
}

function mapStateToProps(state){
    return {
        reminders: state.reminder
    };
}
export default connect(mapStateToProps, { addReminder, deleteReminder })(App);