import {Button, Card, CardImg, CardTitle, CardText, CardDeck, CardFooter, CardBody, Col, Row, Container} from 'reactstrap';
//import CardDeck from 'react-bootstrap/CardDeck';
// import { CardColumns, CardDeck } from 'reactstrap';
import './search.css';

const SearchResult = ({podcast}) => {
    return (
  <>
   <Card  body inverse style={{ backgroundColor: 'darkorange', borderColor: '#333' }} className="p-5 col-2" key={podcast.id} id='searchCardCss'>
    <CardImg variant="top" src={podcast.image} />
    <CardBody>
      <CardTitle id="cardTitle" tag="h5">{podcast.title_original}</CardTitle>
      <CardText id='cardText'>
      {podcast.description_original}
      </CardText>
      <Button color="info" size="lg" block>More Info</Button>
    </CardBody>
  </Card>
  
  
  </>
  );
};

export default SearchResult;



// import React from 'react';
// import {
//   Card, Button, CardImg, CardTitle, CardText, CardDeck,
//   CardSubtitle, CardBody
// } from 'reactstrap';


// const SearchResult = ({ podcast }) => {
//   return (
//     <div>
//        <CardDeck style={{width:"30%", height:"60%"}}  >
//       <Card key={podcast.id} >
//         <CardImg top width="30%" src={podcast.image} alt="Card image cap" />
//         <CardBody >
//           <CardTitle tag="h5">{podcast.title_original}</CardTitle>
//           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
//           <CardText>{podcast.description_original}</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//       </CardDeck>
//     </div>
//   );
// };


// export default SearchResult;