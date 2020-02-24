import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title : '',
        status : ''
    }

    addTodo = (e) => this.setState({ [e.target.name] : e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewTodo(this.state.title);
        this.setState({title : ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display : 'flex'}}>
                <input onChange={this.addTodo} value={this.state.title} type="text" name="title" placeholder="Add Todo Item" style={{ flex : '10', padding : '5px' }}/>
                {/* <input onChange={this.addTodo} value={this.state.status} type="text" name="status" placeholder="Set todo status" style={{ flex : '10', padding : '5px' }}/> */}

                <input type="submit" value="Submit" className="btn" style={{flex : '1'}}/>
            </form>
        )
    }
}

export default AddTodo
