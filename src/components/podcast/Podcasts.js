import React, { useEffect, useState } from "react";
import Podcast from "./Podcast";
import SearchResult from "./SearchResult";

const baseURL = "https://listen-api.listennotes.com/api/v2";
//const search = "dogs"
const endpt = "search";
// const sort_by_date = 0
// const len_max = 30
// const genre_ids = ""
// const published_after = 0
// const language = "English"
const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  // const [ results, setResults ] = useState([]);
  const [search, setSearch] = useState("");
  const [sort_by_date, setSort_By_Date] = useState("");
  const [len_max, setLen_Max] = useState("");
  const [genre_ids, setGenre_Ids] = useState("");
  const [published_after, setPublished_After] = useState("");
  const [language, setLanguage] = useState("");
  //const [search, setSearch] = useState("");
  // const [ startDate, setStartDate ] = useState('');
  // const [ endDate, setEndDate ] = useState('');
  // const [ pageNumber, setPageNumber ] = useState(0);
  
  var myHeaders = new Headers();
  myHeaders.append("X-ListenAPI-Key", "d92b6516b8234d67bb4fd1ed4dbdc66c");
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const podFetch = () => {
    fetch(
      `${baseURL}/${endpt}?q=${search}&sort_by_date=${sort_by_date}&offset=0&len_max=${len_max}&genre_ids=${genre_ids}&published_after=${published_after}&only_in=title%2Cdescription&language=${language}&safe_mode=0`,
      requestOptions
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setPodcasts(json.results);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    podFetch();
  };
  return (
    <div className="main">
      <form onSubmit={(e) => handleSubmit(e)}>
        <span>Enter search term (required): </span>
        <input
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {podcasts.map(podcast=> (
        <SearchResult podcast={podcast} />
      ))}
    </div>
  );
};
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
// const Podcasts = (props) => {
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState([]);
//   return (
//     <div className="main">
//       <div className="mainDiv">Podcast Page</div>
//     </div>
//   );
// };
export default Podcasts;
