import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    //this class has access to the todo object
    //which automatically means it can access the properties of this object like : title, status and completed

    getStyleByTaskStatus = () => {
        return {
            background : '#f4f4f4',
            padding : '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
       if (this.props.todo.completed) {
           return {
               textDecoration : 'line-through'
           }
       } else {
           return {
               textDecoration : 'none'
           }
       }
    }
    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyleByTaskStatus()}>
                <p>
                    <input type="checkbox" onChange={this.props.updateTask.bind(this, id)} style={{ margin: '10px' }}></input>
                    {title}
                    {/* use .bind because you need to pass a paramere to the method.. 
                        here we have access to id because we've already destructed the todo properties : title and id up */}
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>
                        X
                    </button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    //this PropTypes is an object not array because this class represents a partical single todo item

    // todos : PropTypes.object.isRequired
}

const btnStyle = {
    background : '#ff0000',
    color : '#fff',
    border : 'none',
    padding : '5px 9px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
}

const itemStyle = {
    backgroundColor : '#f4f4f4'
}

export default TodoItem
