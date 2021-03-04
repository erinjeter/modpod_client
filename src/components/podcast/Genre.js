import React, { useEffect, useState } from "react";
import Podcast from "./Podcast";
import SearchResult from "./SearchResult";
import { CardDeck, CardColumns, Container, Row, Col, Label, Input } from 'reactstrap';
import './search.css';

const Genres = () => {
  const [podcasts, setPodcasts] = useState([]);
  // const [ results, setResults ] = useState([]);
  const [search, setSearch] = useState("");
  const [sort_by_date, setSort_By_Date] = useState("");
  const [len_max, setLen_Max] = useState("");
  const [genre_ids, setGenre_Ids] = useState("");
  const [published_after, setPublished_After] = useState("");
  const [language, setLanguage] = useState("");
  const [offset, setOffset] = useState(0);

  var myHeaders = new Headers();
  myHeaders.append("X-ListenAPI-Key", "d92b6516b8234d67bb4fd1ed4dbdc66c");
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const podFetch = () => {
    fetch(
        'https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us&safe_mode=0',
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
    setOffset(0);  
    podFetch();
    };

    
 const changeOffset = (event, direction) => {
  event.preventDefault();
  if(direction === 'down') {
    if(offset > 0) {
      setOffset(offset + 1);
        podFetch();
      }
    }

    if(direction === 'up') {
      setOffset(offset + 1);
      podFetch();
      }
    };

  return (
    <div className="main">
      <form onSubmit={(e) => handleSubmit(e)}>
       
        <Label for="exampleSelect">Select Genre</Label>
        <Input id="genreSelect" type="select" name="select" onChange={(e) => setGenre_Ids(e.target.value)}>
          <option>Any</option>
          <option value="144">Personal Finance</option>
          <option value="151">Locally Focused</option>
          <option value="122">Society & Culture</option>
          <option value="107">Science</option>
          <option value="88">Health & Fitness</option>
          <option value="125">History</option>
          <option value="111">Education</option>
          <option value="132">Kids & Family</option>
          <option value="133">Comedy</option>
          <option value="68">TV & Film</option>
          <option value="135">True Crime</option>
          <option value="168">Fiction</option>
          <option value="117">Government</option>
          <option value="99">News</option>
          <option value="69">Religion & Spirituality</option>
          <option value="100">Arts</option>
          <option value="93">Business</option>
          <option value="82">Leisure</option>
          <option value="134">Music</option>
          <option value="77">Sports</option>
          <option value="127">Technology</option>
        </Input>
        <br />
        <button type="submit">Submit</button>
     
      </form>
      

      <CardColumns className="col d-flex align-content-start flex-wrap">
      
      {podcasts.length > 0 ? podcasts.map(podcast=> (
        <SearchResult podcast={podcast}/>
      )) : <strong>No Results. Please try a different search.</strong>}
     
     
      
       </CardColumns>
     
    
    </div>
  );
};

export default Genres;


