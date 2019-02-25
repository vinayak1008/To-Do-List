import React, { Component } from 'react';
import Todolist from './todolist';

class Todo extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p>This is first</p>
                <Todolist />
            </div>
         );
    }
}
 
export default Todo;