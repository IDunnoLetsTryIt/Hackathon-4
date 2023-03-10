import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {

  const [searchQueryArtist, setSearchQueryArtist] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect( () => {
    if (searchQueryArtist!=[]) {
    getData()
    }
     }, [searchQueryArtist]
  )
    async function getData() {
      const response = await fetch(
        `http://musicbrainz.org/ws/2/artist?query=${searchQueryArtist}&fmt=json`
      )
      const data = await response.json();
      console.log(data);
      setSearchResults(data.artists)
    }

  return (
    <>
      <SearchBar 
      setSearchQueryArtist = { setSearchQueryArtist }
      />
     
      <SearchResults 
      searchResults  = { searchResults }
      
      />
    </>
  )
}

export default App