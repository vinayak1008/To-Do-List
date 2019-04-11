import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-dom-router';
import Todolist from './todolist';
import './todo.scss';
import Addlist from './addlist';
import Header from './header';
import axios from 'axios';

class Todo extends Component {
    state = { 
        list : []
     }

     componentDidMount() {
         axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ list : res.data }))
     }

     onCheckList = (id) => {
        this.setState({ list: this.state.list.map(lists => {
            if(lists.id === id){
                lists.completed = !lists.completed;
            }
            return lists;
        }) });
     }

     delList = (id) => {
         axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
         .then(res =>  this.setState({ list: [...this.state.list.filter(list => list.id !== id)] }));        ;
     }
     
     addList = (text) => {
         axios.post('https://jsonplaceholder.typicode.com/todos',{
             title: text,
             completed: false
         } )
         .then(res => this.setState({ list: [...this.state.list, res.data] }) );         
     }

    render() { 
        return ( 
            <div className="toDo">
                <div className="container">
                    <Header />
                    <Addlist addList={this.addList}/>
                    <Todolist lists={this.state.list} 
                    onChecklist={this.onCheckList} 
                    delList={this.delList} 
                    />
                </div>
            </div>
         );
    }
}
 
export default Todo;