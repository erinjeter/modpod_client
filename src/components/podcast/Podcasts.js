import React, { useEffect, useState } from "react";
import Podcast from "./Podcast";
import SearchResult from "./SearchResult";
import { CardDeck, CardColumns, Container, Row, Col, Label, Input } from 'reactstrap';
import './search.css';

const baseURL = "https://listen-api.listennotes.com/api/v2";

const endpt = "search";

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
      `${baseURL}/${endpt}?q=${search}&type=podcast&sort_by_date=${sort_by_date}&offset=0&len_max=${len_max}&genre_ids=${genre_ids}&published_after=${published_after}&only_in=title%2Cdescription&language=${language}&safe_mode=0`,
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
     <span>Published After: </span>
         <input type="date" name="published_after" pattern="[0-9]{8}" onChange={(e) => setPublished_After(e.target.value)} />
         <br />
        <Label for="exampleSelect">Select Genre</Label>
        <Input id="genreSelect" type="select" name="select">
          <option>Any</option>
          <option>Personal Finance</option>
          <option>Locally Focused</option>
          <option>Society & Culture</option>
          <option>Science</option>
          <option>Health & Fitness</option>
          <option>History</option>
          <option>Education</option>
          <option>Kids & Family</option>
          <option>Comedy</option>
          <option>TV & Film</option>
          <option>True Crime</option>
          <option>Fiction</option>
          <option>Government</option>
          <option>News</option>
          <option>Religion & Spirituality</option>
          <option>Arts</option>
          <option>Business</option>
          <option>Leisure</option>
          <option>Music</option>
          <option>Sports</option>
          <option>Technology</option>
        </Input>
        <br />
        <button type="submit">Submit</button>
     
      </form>
      

      <CardColumns className="col d-flex align-content-start flex-wrap">
      
      {podcasts.map(podcast=> (
        <SearchResult podcast={podcast} />
      ))}
     
      </CardColumns>
     
     
    </div>
  );
};

export default Podcasts;


