import React, { Component } from 'react';

class Toselect extends Component {
    
    onStyle = () => {
        return {
            textDecoration : this.props.list.completed ? "line-through" : "none"
        }
    }

    render() { 
        return (
            <div className="toSelect" style={this.onStyle()} >
                <h2>
                    <input type="checkbox" onChange={() => this.props.onChecklist(this.props.list.id)} />
                    {this.props.list.title}
                    <button onClick={() => this.props.delList(this.props.list.id)} >X</button>
                 </h2>
            </div>
       );
    
    }
}
  
export default Toselect;