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
                    // src="../../assets/carousel-01.jpg"
                    src="https://i.imgur.com/EOSyJEI.jpg"
                    alt="First slide"
                />
                <ReactBootStrap.Carousel.Caption>
                    {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </ReactBootStrap.Carousel.Caption>
            </ReactBootStrap.Carousel.Item>


            <ReactBootStrap.Carousel.Item>
                <img
                    style={styles.img}
                    className="d-block w-100"
                    src="https://i.imgur.com/bFsmrJe.jpg"
                    alt="Second slide"
                />

                <ReactBootStrap.Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </ReactBootStrap.Carousel.Caption>
            </ReactBootStrap.Carousel.Item>

        </ReactBootStrap.Carousel>
    );
};


export default Carousel;