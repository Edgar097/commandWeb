import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/navbar';
import Counters from './components/counters';

class App extends Component{
  state = {
    counters: [
        {id:1, value:4, tags:['tag 1','tag 2','tag 3']},
        {id:2, value:0, tags:['tag 1','tag 2','tag 3']},
        {id:3, value:0, tags:['tag 1','tag 2','tag 3']},
        {id:4, value:0, tags:['tag 1','tag 2','tag 3']}
    ]
  };

  handleDelete = counterId => {
      let counters = this.state.counters.filter(counter => counter.id !== counterId); 
      this.setState({counters});  
  };
  handleReset = () =>{
      const counters = this.state.counters.map(counter=>{
          counter.value=0;
          return counter;
      })
      this.setState({counters})
  };
  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value ++;
      this.setState({counters}) 
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value --;
    this.setState({counters})
  }
  render(){
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(counter=>counter.value>0).length}/>
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;