
import React, { Component } from 'react';

class Counter extends Component {
    componentWillUnmount(){
        console.log('Counter Unmount')
    }
    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };
    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    };

    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>
                <div className="col">
                    <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm"> + </button>
                    <button onClick={()=> this.props.onDecrement(this.props.counter)} 
                        className="btn btn-secondary btn-sm m-2"
                        disabled={this.props.counter.value === 0 ? "disabled":""}>
                         - 
                    </button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm"> x </button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "info";
        return classes;
    }
}
 
export default Counter;