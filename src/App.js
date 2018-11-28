import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
      greetings: 'Hello World!'
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDimiss = this.onDimiss.bind(this);
  }

  onDimiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    const { list, searchTerm } = this.state;

    return (
      <div className="App">
        <h1>{this.state.greetings}</h1>

        <hr />

        <Search 
          onChange={this.onSearchChange}
          value={searchTerm}
        />

        <hr />

        <Table 
          list={list}
          pattern={searchTerm}
          onDimiss={this.onDimiss}
        />
      </div>
    );
  }
}

class Search extends Component {
  render () {
    const { value, onChange} = this.props;
    return (
      <form>
        <input 
          type="text" 
          onChange={onChange} 
          value={value}  
        />
      </form>      
    );
  }
}

class Table extends Component {
  render () {
    const { list, pattern, onDimiss} = this.props;
    return (
      <div>
        {
          list.filter(isSearched(pattern)).map( item => 
            <div key={item.objectID}>
              <a href={item.url}>{item.title}</a>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => onDimiss(item.objectID)}
                  type="button"
                >
                  Dimiss
                </button>
              </span>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
