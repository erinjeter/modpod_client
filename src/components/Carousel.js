import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';

const Carousel = () => {

    const styles = {

        img: {
            // "margin": "auto",
            // "margin-top": "20px",
            // "max-width": "100px00px",
            "max-height": "600px",
            "max-width": "100vw",
        }
    }



    return (
        <ReactBootStrap.Carousel>
            <ReactBootStrap.Carousel.Item>
                <img
                    style={styles.img}
                    className="d-block w-100"
                    src="https://images.all-free-download.com/images/graphiclarge/winter_landscape_hd_picture_5_166116.jpg"
                    alt="First slide"
                />
                <ReactBootStrap.Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </ReactBootStrap.Carousel.Caption>
            </ReactBootStrap.Carousel.Item>


            <ReactBootStrap.Carousel.Item>
                <img
                    style={styles.img}
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ugETKoxcPbZLpXXvGYMHMP3cNP30clsM-Q&usqp=CAU"
                    alt="Second slide"
                />

                <ReactBootStrap.Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </ReactBootStrap.Carousel.Caption>
            </ReactBootStrap.Carousel.Item>


            <ReactBootStrap.Carousel.Item>
                <img
                    style={styles.img}
                    className="d-block w-100"
                    src="https://cdn3.wpbeginner.com/wp-content/uploads/2015/12/publicdomainpictures.jpg"
                    alt="Third slide"
                />

                <ReactBootStrap.Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </ReactBootStrap.Carousel.Caption>
            </ReactBootStrap.Carousel.Item>
        </ReactBootStrap.Carousel>
    );
};


export default Carousel;