import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ReviewCreate from './ReviewCreate';

const ReviewIndex = (props) => {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = () => {
        fetch('http://localhost:3000/favorites', {
            method: "GET",
            headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then( (res) => res.json())
        .then((favoritesData) => {
            setReviews(favoritesData)
            console.log(favoritesData)
        })
    }
    useEffect(() => {
        fetchReviews();
    }, [])
    
    return(
       <Container>
           <Row>
               <Col md="3">
                   <ReviewCreate fetchReviews={fetchReviews} token={props.token}/>
               </Col>
               <Col md="9">
                   <h2>Log a review to see a table</h2>
               </Col>
           </Row>
       </Container>
    )
}

export default ReviewIndex;
