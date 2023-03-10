import { useEffect, useState } from "react";

export default function Artist() {
  const id = "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d";
  const [releases, setReleases] = useState();

  const loadData = async () => {
    const response = await fetch(
      `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`
    );
    const data = await response.json();

    // console.log(data)
    setReleases(data.releases);
    // console.log(releases);
  };
//   loadData()
console.log(releases)
  useEffect(() => {
    loadData()
}, [])
return (
 
    releases
    ?
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
    :
    ''
);

 
}
