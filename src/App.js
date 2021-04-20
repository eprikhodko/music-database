import React, {useState} from "react"

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <AlbumPreview />
      <RecentlyAddedAlbums />
    </div>
  );
}

const Header = () => {

  const [query, setQuery] = useState("")

  const handleChange = event => {
    return setQuery(event.target.value)
  }

  const searchMusic = (event) => {
    event.preventDefault()
    console.log("submitted") 
  }

  return (
    <div className="container-search">
      <form className="form" onSubmit={searchMusic}>
          <label className="label" htmlFor="query">music search</label>
          <input 
              className="search-input" 
              type="text" 
              name="query"
              placeholder="i.e. Ramones" 
              value={query} 
              onChange={handleChange}
          />
          <button className="button-search" type="submit">Search</button>
      </form>
    </div>
  )
}

const AlbumPreview = () => {
    return (
      <div>
        <img src="http://placekitten.com/250/250" alt="album cover"/>
      </div>
    )
}

const RecentlyAddedAlbums = () => {
  return (
    <div>
      <h2>Recently added albums</h2>
        <img src="http://placekitten.com/245/245" alt="album cover"/>
        <img src="http://placekitten.com/246/246" alt="album cover"/>
      </div>
  )
}













export default App;
