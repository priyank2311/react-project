import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text =  this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }


  render() {
    const charL = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
      <ol>
        <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it(e.g. in a paragraph).</li>
        <li>Create a new component (=> ValidationComponent) which receives the text length as prop.</li>
        <li>Inside the ValidationComponent either output "Text too short" or "Text too long" depending on the text length(e.g. take 5 as minimum length)</li>
        <li>Create an another component (=> CharComponent) and style it as an inline box(=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
        <li>Render a list of CharComponent where each CharComponent receives a different letter of the entered text(in the initial input field) as a prop.</li>
        <li>When you pick a CharComponent, it should be removed from the entered list</li>
      </ol>
      <p>Hint: Keep in mind that JavaScript strings are basically arrays.</p>
      <hr />
      <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
      <p>{this.state.userInput}</p>
      <Validation inputL = {this.state.userInput.length} />
      {charL}
      </div>
    );
  }
}

export default App;
