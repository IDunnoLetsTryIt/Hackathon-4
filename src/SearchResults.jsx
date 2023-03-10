import { useState, useEffect } from 'react'

export default function SearchResults({ searchResults }) {

    return (
        (!searchResults
            ?
            <p>Loading</p>
            :
            searchResults.map( (result, index) => {
                return (
                    <div key={index}>
                        <a>{result.name} </a>
                        <br />
                    </div>
                )}
            )
        )  
    )
}