
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
    renderButton(){
        if(this.props.counter.value === 0) return <button disabled onClick={()=> this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2"> - </button>
        return <button onClick={()=> this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2"> - </button>
    };
    render() {
        console.log('Counter Rendered')
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <span className={this.getBadgeClasses()}>
                            {this.formatCount()}
                        </span>
                    </div>
                    <div className="col-4">
                        <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2"> + </button>
                        {this.renderButton()}
                        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> x </button>
                    </div>
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