import React, { useEffect, useState } from "react";
import Podcast from "./Podcast";
import SearchResult from "./SearchResult";
import {
    CardColumns,
    Label,
    Input,
    Form,
    FormGroup,
  } from "reactstrap";

var myHeaders = new Headers();
myHeaders.append("X-ListenAPI-Key", "d92b6516b8234d67bb4fd1ed4dbdc66c");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const RandomPod = () => {
   const [podcasts, setPodcasts] = useState([]);
   const podFetch = () => {
      fetch("https://listen-api.listennotes.com/api/v2/just_listen", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setPodcasts(json.results);
      });
    };

    // useEffect(() => {
        podFetch();
      // }, []);


//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//     },[])
  return (
    <div className="main">
      <div className="mainDiv">
      {/* <CardColumns className="col d-flex align-content-start flex-wrap">
      {results.map((podcast) => (
          <Podcast
            title={podcast.title_original}
            desc={podcast.description_original}
            pid={podcast.id}
          />
        ))}
        </CardColumns> */}

        <CardColumns className="col d-flex align-content-start flex-wrap">
        {podcasts.map((podcast) => (
          <SearchResult podcast={podcast} />
        ))}
      </CardColumns>

      </div>
    </div>
  );
};



// const Podcasts = (props) => {
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState([]);
//   return (
//     <div className="main">
//       <div className="mainDiv">Podcast Page</div>
//     </div>
//   );
// };
export default RandomPod;