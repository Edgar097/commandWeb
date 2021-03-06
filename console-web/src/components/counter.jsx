
import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };
    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    };
    renderTags(){
        if(this.props.counter.tags.length === 0) return <p>There are no tags!</p>
        return <ul>
            {this.props.counter.tags.map(tag => 
            <li key={tag}>{tag}</li>
            )}
        </ul>
    };
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {this.renderTags()}
                {this.props.counter.tags.length === 0 && 'Please add new tags'}
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