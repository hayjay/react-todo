import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About';
import { render } from '@testing-library/react';
// import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import axios from 'axios'

class App extends Component {
  state = {
    todos : []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos : res.data}));
  }

  //TOGGLE COMPLETE
  updateTask = (task_id) => {
    console.log(task_id);
    this.setState({
      todos : this.state.todos.map(current_todo => {
        if (current_todo.id === task_id) {
          //just toggle this todo to the next state which could either be true or false
          current_todo.completed = !current_todo.completed
        }
        return current_todo;
      }) 
    })
  }

  deleteTodo = (todo_id) => {
    // console.log(todo_id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo_id}`)
      .then(res => this.setState(
        {
        // copy the entire existing todo list using the spread operator [...]
        //filter each existing todo item by the newly deleted todo using the (todo_id params passed in to this function)
        todos : [...this.state.todos.filter(todo => todo.id !== todo_id)]
        }
      ));
    
  }

  createTodo = (title) => {
    // console.log(title);
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title : title,
      completed : false
      //we need to use the spread operator to copy the existing todo items first and add new item to the list.
      //we dont wana set the state directly but we need to add to the existing state
    }).then(res => this.setState({ todos : [...this.state.todos, res.data] }))
  }
  
  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            {/* Wrapping components with Route means means our home route should load both AddTodo component and Todos component */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addNewTodo={this.createTodo}/>

                <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} updateTask={this.updateTask}/>

              </React.Fragment>
            )} />
            {/* Another route i.e page */}
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  } 
}

export default App;
