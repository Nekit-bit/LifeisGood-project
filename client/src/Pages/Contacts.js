import React, { Component } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';

import pp1PNG from '../Assets/pp1.jpg'
import pp2PNG from '../Assets/pp2.jpg'
import pp3PNG from '../Assets/pp3.jpg'
import pp4PNG from '../Assets/pp4.jpg'
import pp5PNG from '../Assets/pp5.jpg'


const mockArr = [{Header: "sadasdas", value:"vadsvasdfas",imgSrc: "'../Assets/pp1.jpg'"}]

export default class Contacts extends Component {
    
    
    render() {
        return (
            <>
            <Container>
                <h1 className='text-center m-4'>Готовые сеты</h1>
                <CardGroup>
                    <Card className='m-4'>
                        <Card.Img 
                        variant='top'
                        src={pp1PNG} />
                        <Card.Body>
                            <Card.Title>Header</Card.Title>
                            <Card.Text>It is so yammy and heathfull.</Card.Text>
                            <Button variant='primary'>Заказать</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            </>
        )
    }
}

