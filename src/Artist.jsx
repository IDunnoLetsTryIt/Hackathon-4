import { useEffect, useState } from "react";
import "./Artist.css"
import { useParams } from "react-router";
import Navigation from "./Navigation";

export default function Artist() {
  const {id} = useParams()
  const [releases, setReleases] = useState();

  const loadData = async () => {
    const response = await fetch(
      `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`
    );
    const data = await response.json();

    setReleases(data.releases);

  };

  useEffect(() => {
    loadData()
}, [])

return (
 
    releases
    ?
    <>
        <Navigation/>
        <div className="releases">
            {
                releases.map(release => {
                    return (
                        <div className="release">
                            <h3>{release.title}</h3>
                            <ul>
                                { 
                                    release['text-representation'].language
                                    ?
                                    <li>Language: {release['text-representation'].language}</li>
                                    :
                                    ""
                                }
                                  { 
                                    release.date
                                    ?
                                    <li>Release date: {release.date}</li>
                                    :
                                    ""
                                }
                                  { 
                                    release.country
                                    ?
                                    <li>Country: {release.country}</li>
                                    :
                                    ""
                                  }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    </>
    :
    <Navigation/>
);

 
}
