import { useState } from "react";

export default function SearchBar({ setSearchQueryArtist }) {

    const [searchState, setSearchState] = useState("");

    const handleChange = (e) => {
        setSearchState(e.target.value)
    }

    return (
    <>
        <h2>Music Artists Search</h2>
        <div className="search-bar">
            <input type="text" placeholder="search for..." onChange={ handleChange}/>
            <br />
            
            <button onClick={ () => setSearchQueryArtist(searchState) }>Search</button>
        </div>
    </>
    )

} 