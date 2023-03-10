import { useState, useEffect } from 'react'

export default function SearchResults({ searchResults }) {

    return (
        (!searchResults
            ?
            <p>Loading</p>
            :
            searchResults.map( (artist, index) => {
                return (
                    <div key={index}>
                        <a>{artist.name}</a>
                        
                        <ul>
                            <li>
                                aliases: {
                                artist.aliases 
                                ?
                                artist.aliases.map( (alias) => {
                                    return alias.name
                                })
                                :
                                ""
                                } 
                            </li>

                            <li>country: {artist.country}</li>
                            <li>started: {artist['life-span'].begin} finished: {artist['life-span'].end}</li>
                        </ul>
                    </div>
                )}
            )
        )  
    )
}