import React, { Component } from 'react';
import './App.css';
import SearchBox from '../src/components/search-box/search-box.component.jsx';

import CardList from './components/card-list/card-list.component.jsx';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField : ""
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex </h1>
        <SearchBox placeholder="search monsters" handleChange={e => {this.setState({ searchField : e.target.value})}}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;