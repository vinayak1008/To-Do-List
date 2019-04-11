import React, { Component } from 'react'

export class Addlist extends Component {
    state={
        text: ' '
    }

    onInput = (e) => {
        this.setState({text: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addList(this.state.text);
        this.setState({ text : ' ' });
    }


  render() {
    return (
      <div className="addList">
        <form onSubmit={this.onFormSubmit}>
            <input 
            type="input"
            placeholder="Add List..."
            className="textInput"
            value={this.state.text}
            onChange={this.onInput} 
            />
            <input 
            type="submit"
            value="submit"
            className="btn"
            />
        </form>
      </div>
    );
  }
}

export default Addlist;
