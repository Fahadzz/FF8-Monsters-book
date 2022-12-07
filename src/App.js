import { useState, useEffect } from "react"
import "./App.css";
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'
// Final Fantasy 8 Monster List
const monstersFF = require('./assets/data/monsters.json');



export const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState(monstersFF);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }


  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      // it filters the data from the search input and gain access for it from the state
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  return (
    <div className="App">
      <h1 className="app-title">FF8-Monsters book</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search monsters" className="search-box" />
      <CardList monsters={filteredMonsters} />

    </div>
  )
}


export default App;
