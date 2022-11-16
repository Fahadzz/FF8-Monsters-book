import { Component } from "react";
import "./App.css";
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'
// Final Fantasy 8 Monster List
const monstersFF = require('./assets/data/monsters.json');

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      // created to keep track of the search input
      // And to be able to access it anywhere
      searchField: ''
    };
    console.log("Constructor");
  }
  // when do i get the list, how do i get the list, where do i put the list
  // the moment its rendered
  // componentDidMount() {
  //   console.log("componentDidMount");
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) =>
  //       this.setState(
  //         () => {
  //           return { monsters: users };
  //         },
  //         () => {
  //           console.log(this.state);
  //         }
  //       )
  //     );
  // }

  componentDidMount() {
    this.setState(() => {
      return { monsters: monstersFF }
    })
  }

  onSearchChange = (event) => {

    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    console.log("Render from App");
    const { monsters, searchField } = this.state
    const { onSearchChange } = this;

    // In here we are using filter which return Array 
    // it goes throgh the monsters list then return the filtered list 
    const filteredMonsters = monsters.filter((monster) => {
      // it filters the data from the search input and gain access for it from the state
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">FF8-Monsters book</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="Search monsters" className="search-box" />
        <CardList monsters={filteredMonsters} />

      </div>
    );

  }
}

export default App;
