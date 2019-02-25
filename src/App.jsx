import React, { Component } from 'react';
import Todo from './todolist/todo';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
                <Todo />
            </div>
         );
    }
}
 
export default App;