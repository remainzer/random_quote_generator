import React from 'react';
import './App.css';
import quoteAuthor from './quotes-api.mjs';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateQuoteAndAuthor = this.updateQuoteAndAuthor.bind(this)
  }

  componentDidMount () {
    this.updateQuoteAndAuthor();
  }
  handleClick = () => {
    this.updateQuoteAndAuthor();
  }
  updateQuoteAndAuthor () {
    const quotesAndAuthor = quoteAuthor;
    const randomNumber = Math.floor(Math.random() * quotesAndAuthor.length);
    this.setState ({
      quote: quotesAndAuthor[randomNumber].quote,
      author: quotesAndAuthor[randomNumber].author
    });
  }

  render () {
    const quoteAuthor = this.state.quote + " -" +this.state.author;
    return (
      <div className="App">
        <div id="quote-box">

          <p id="text"><svg id="svg" xmlns="http://www.w3.org/2000/svg" height="45" width="30" viewBox="0 0 448 512"> <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>{this.state.quote}</p>
          <p id="author">{this.state.author}</p>
          <button id="new-quote" onClick={this.handleClick}>New Quote</button>
          <div id="helperDIV">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteAuthor)}`} target="_blank" rel="noreferrer"></a>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
