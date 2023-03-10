import { useState } from "react";

export default function SearchBar({ setSearchQueryArtist, setResultsPerPage }) {

    const [searchState, setSearchState] = useState("");

    const handleChange = (e) => {
        setSearchState(e.target.value)
    }

    return (
    <>
        <h2>Music Artists Search</h2>
        <div className="search-bar">
            <input type="text" placeholder="find your artist..." onChange={ handleChange}/>
            <br />
            <label htmlFor="results_per_page">Results per page</label>
            <select name="results_per_page" id="results_per_page" onChange={ (e) => {
                setResultsPerPage(e.target.value)
            }}>
                <option value="10" defaultChecked>10</option>
                <option value="20">20</option>
                <option value="40">40</option>
            </select>
            <br />
            
            
            <button onClick={ () => setSearchQueryArtist(searchState) }>Search</button>
        </div>
    </>
    )

} 