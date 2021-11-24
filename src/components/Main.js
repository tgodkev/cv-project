import React, { Component } from 'react';
import Card from './Card';
import uniqid from "uniqid";

class Main extends Component{

    constructor() {
        super();
    
        this.state = {
          name: {
            text: '', 
            id: uniqid()
          },
          age: {
            text: '', 
            id: uniqid()
          },
          education: {
            text: '', 
            id: uniqid()
          },
          work: {
            text: '', 
            id: uniqid()
          },
          profile: [],
        };
      }

      handleChange = (e) => {
          this.setState({
              name:{
                  text: e.target.value,
                  id: this.state.name.id,
              },
          });
      }

      onSubmitTask = (e) => {
          e.preventDefault();
          this.setState({
              profile: this.state.profile.concat(this.state.name),
              name:{
                  text: '',
                  id: uniqid()
              }
          })
      }



      render(){
        const {name, age, education, work} = this.state;
        
        return(
            <div>
            <form onSubmit={this.onSubmitTask}>
            <label htmlFor="nameInput">Enter your name</label>
            <input
            onChange = {this.handleChange}
            value={name.text}
            type="text"
            id="nameInput"
            />
            <button type="submit">Add Name</button>


            </form>


            <Card profile={name} />

            </div>
        ); 
      }


};

export default Main;