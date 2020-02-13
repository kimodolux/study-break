import React from 'react';
import Timer from './Timer'

export default class TimeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hours: 0,
            minutes: 0,
            submitted: false
         };
      }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({'submitted': true });
    }
    handleChange = (event) => {
        this.setState({minutes: event.target.value});
    }
    handleClick = (event) => {
        this.setState({'submitted': false });
    }

    render() {
      
      if(this.state.submitted){
        return (
            <div>
            <Timer minutes={this.state.minutes}/>
            <button onClick={this.handleClick}>
                Change Timer
            </button>
            </div>
        );
      } 
      else{
        return (
            <form onSubmit={ this.handleSubmit }>
              <p>How many minutes do you want to focus for:</p>
              <input
                type="number"
                name="Minutes"
                min='0'
                onChange={this.handleChange}
              />
              <input
                type="submit"
              />
            </form>
          );
      } 
    }
  }