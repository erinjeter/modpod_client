import React, { useEffect, useState } from "react";
import Podcast from './Podcast';

const RandomPod = () => {
  const [ podcasts, setPodcasts ] = useState([]);
 
  var myHeaders = new Headers();
  myHeaders.append("X-ListenAPI-Key", "d92b6516b8234d67bb4fd1ed4dbdc66c");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
  useEffect(() => {
    fetch('https://listen-api.listennotes.com/api/v2/just_listen', requestOptions)
          .then(res => res.json())
          .then(json => {
              console.log(json)
              setPodcasts(json)
          })
  }, [])

  return (
      <div>
          {podcasts.results.map(
              podcast  => <Podcast
                  title={podcast.title}
                  desc={podcast.description}
                  id={podcast.id} />)}
      </div>
  )
}

export default RandomPod;

// var myHeaders = new Headers();
// myHeaders.append("X-ListenAPI-Key", "d92b6516b8234d67bb4fd1ed4dbdc66c");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// const Podcasts = () => {
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState([]);

//     useEffect(() => {
//       fetch("https://listen-api.listennotes.com/api/v2/just_listen", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//     },[])


//   return (
//     <div className="main">
//       <div className="mainDiv"></div>
//     </div>
//   );
// };








// import React, { useEffect, useState } from "react";
// import Podcast from './Podcast';
// import SearchResult from "./SearchResult";

// const RandomPod = () => {
//   const [ podcasts, setPodcasts ] = useState();
  
//   var myHeaders = new Headers();
//   myHeaders.append("X-ListenAPI-Key", "d92b6516b8234d67bb4fd1ed4dbdc66c");

//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     }
//   useEffect(() => {
//       fetch('https://listen-api.listennotes.com/api/v2/just_listen', requestOptions)
//           .then(res => res.json())
//           .then((json) => {
//               console.log(json)
//               setPodcasts(json.results)
//           })
//   }, [])

//   return (
//     <div>
//     test
//     {podcasts?.results.map(
//         podcast  => <Podcast
//             title={podcast.title_original}
//             desc={podcast.description_original}
//             pid={podcast.id} />)}
// </div>
//   )
// }

// export default RandomPod;