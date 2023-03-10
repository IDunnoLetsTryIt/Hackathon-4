import { useEffect, useState } from "react";
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
                        <ol>
                            <li>{release.title}</li>
                            <li>{release['text-representation'].language}</li>
                            <li>{release.date}</li>
                            <li>{release.country}</li>
                            
                        </ol>
                    )
                })
            }
        </div>
    </>
    :
    <Navigation/>
);

 
}
