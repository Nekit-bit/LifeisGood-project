import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Button } from 'primereact/button';


// import racion1IMG from '../Assets/racion1.jpg'
// import racion2IMG from '../Assets/racion2.jpg'
// import racion3IMG from '../Assets/racion3.jpg'

export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            {/* <Container>
                <h2 className='text-center m-4'>Something</h2>
                <CardGroup>
                    <Card>
                        <Card.Img
                        variant='top'
                        src={racion1IMG} />
                        <Card.Body>
                            <Card.Title>Example 1</Card.Title>
                            <Card.Text>Loremdsfdsf dsfdsfsd fdsfdsf dsfsdfsdf</Card.Text>
                            <Button variant='primary'>About Example 1</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container> */}
            </>
        )
    }
}

