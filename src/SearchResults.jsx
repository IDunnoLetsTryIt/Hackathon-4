import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function SearchResults({ searchResults }) {
    return (
        (!searchResults
            ?
            <p>Loading</p>
            :
            searchResults.map( (artist, index) => {
                return (
                    <div key={index}>
                        <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
                        <ul>
                            {
                            artist.aliases 
                            ?
                            <li>
                                {
                                artist.aliases.map( (alias) => {
                                    return 'aliases:' + alias.name
                                })} 
                            </li>
                            :
                            ""}

                            {
                            artist.country
                            ?
                            <li>country: {artist.country} </li>
                            :
                            ""}               
                            
                            {
                            artist['life-span'].begin
                            ?
                            <li>started: {artist['life-span'].begin}</li>
                            :
                            ""}

                            {artist['life-span'].end
                            ?
                            <li>ended: {artist['life-span'].end}</li>
                            :
                                ""}
                        </ul>
                    </div>
                )}
            )
        )  
    )
}