import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import salad1IMG from '../Assets/salad1.png'
import salad2IMG from '../Assets/salad2.png'
import salad3IMG from '../Assets/salad3.png'

export default class CarouselBox extends Component {
    render() {
        return (
            <div className='carousel-wrapper'>
                <Carousel className="carousel-main-page">
                <Carousel.Item>
                    <img
                        className='d-block'
                        src={salad1IMG}
                        alt="Вкусно и точка!"
                    />
                    <Carousel.Caption>
                        {/* <h3 className='bg-dark text-light'>Вкусно...</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block' 
                        src={salad2IMG}
                        alt="Вкусно и точка!"
                    />
                    <Carousel.Caption>
                        {/* <h3 className='bg-dark text-light'>а главное...</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block'
                        src={salad3IMG}
                        alt="Вкусно и точка!"
                    />
                    <Carousel.Caption>
                        {/* <h3 className='bg-dark text-light'>полезно!</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        );
    }
}
