import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monster: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => this.setState({monster: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList name="Elder">
          {this.state.monster.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        </CardList>
      </div>
    );
  }
}

export default App;
