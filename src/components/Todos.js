import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    updateTask = () => {
        console.log('Hello!');
    }
    render() {
        return (
            this.props.todos.map((each_todo) => ( 
                <TodoItem deleteTodo={this.props.deleteTodo} updateTask={this.props.updateTask} key={each_todo.id} todo={each_todo}/> 
            ))
        )
        
    }
}

//PropTypes
Todos.propTypes = {
    // this PropTypes is an array because this class houses multiple todo items
    todos : PropTypes.array.isRequired,
    updateTask : PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired
}

export default Todos;
