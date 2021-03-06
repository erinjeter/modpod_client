import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';


const ReviewEdit = (props) => {
    const [editReview, setEditReview] = useState(props.podcast.review);    

    const reviewUpdate = (event, review) => {
        event.preventDefault();
        fetch(`http://localhost:3000/favorites/${props.podcast.id}`, {
            method: 'PUT',
            body: JSON.stringify({favorites: {review: editReview}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchReviews();
            props.updateOff();
        })
    }

    return(
    //    <Modal isOpen={true}>
    //        <ModalHeader>Log a Review</ModalHeader>
    //        <ModalBody>
               <Form onSubmit={reviewUpdate}>
                   <FormGroup>
                       <Label htmlFor="review"> Edit Review:
                       <Input name="review" value={editReview} onChange={(e) => setEditReview(e.target.value)}/></Label>
                   </FormGroup>
                   <Button type="submit">Update the Review</Button>
               </Form>
    //        </ModalBody>
    //    </Modal>
    )
}

export default ReviewEdit;