import React, { Component } from 'react';
import { Container, Row, Tabs, Tab, Nav, Col, Table } from 'react-bootstrap';
import { Image } from 'primereact/image';

import pp1PNG from '../Assets/pp1.jpg'
import pp2PNG from '../Assets/pp2.jpg'
import pp3PNG from '../Assets/pp3.jpg'
import pp4PNG from '../Assets/pp4.jpg'
import pp5PNG from '../Assets/pp5.jpg'

import principiPNG from '../Assets/principi.jpg'

export default class About extends Component {
    render() {
        return (
            <>
            <Container className='m-5'>
                <h2>Принципы здорового питания: это должен знать каждый!</h2>
                <p>С чего же начать? Прежде всего, с твердого решения питаться правильно. Вот несколько несложных правил, на которые опирается практически вся современная диетология и которые помогут быстро освоить принципы здорового питания.</p>
                
            <div><Image src={principiPNG} alt="Image" width="760" preview /></div>
            </Container>
            <Container className='m-5'>
                <h2>Рацион</h2>
                <Table striped>
                    <tr>
                        <td>Правило № 1. Используйте для приготовления пищи несколько видов растительного масла. Это лучший источник необходимых организму жирных кислот. Очень хорошо, если на кухне постоянно будут несколько бутылочек с разными маслами: оливковым, кунжутным, льняным, маслом грецкого и кедрового ореха. Помните, что нерафинированные масла не подходят для термической обработки.</td>
                    </tr>
                </Table>
            </Container>
            </>
            )
    }


            // <Container>
            //     <Tab.Container id='left-tabs-first' defaultActiveKey="first">
            //         <Row>
            //             <Col className="d-flex mt-5 w-100" sm={1}>
            //                 <Tabs
            //                     defaultActiveKey="first"

            //                 >
            //                     <Tab className="bg-light" eventKey="first" title="Example 1">
            //                         <img src={pp1PNG} alt="image" />
            //                         <p>Вовочка подбежал к огромному псу и стал гладить его пышный хвост. Мать в испуге кричит: — Что ты делаешь? Он же укусит тебя! — Нет, мама, с этого конца они не кусаются. anekdotov.net</p>
            //                     </Tab>
            //                     <Tab eventKey="second" title="Example 2">
            //                         <img src={pp2PNG} alt="image" />
            //                         <p>Вовочка подбежал к огромному псу и стал гладить его пышный хвост. Мать в испуге кричит: — Что ты делаешь? Он же укусит тебя! — Нет, мама, с этого конца они не кусаются. anekdotov.net</p>
            //                     </Tab>
            //                     <Tab eventKey="third" title="Example 3" >
            //                         <img src={pp3PNG} alt="image" />
            //                         <p>Вовочка пoдбежал к огромному псу и стал гладить его пышный хвост. Мать в испуге кричит: — Что ты делаешь? Он же укусит тебя! — Нет, мама, с этого конца они не кусаются. anekdotov.net</p>
            //                     </Tab>
            //                     <Tab eventKey="fourth" title="Example 4" >
            //                         <img src={pp4PNG} alt="image" />
            //                         <p>Вовочка подбежал к огромному псу и стал гладить его пышный хвост. Мать в испуге кричит: — Что ты делаешь? Он же укусит тебя! — Нет, мама, с этого конца они не кусаются. anekdotov.net</p>
            //                     </Tab>
            //                     <Tab eventKey="fifth" title="Example 5" >
            //                         <img src={pp5PNG} alt="image" />
            //                         <p>Вовочка подбежал к огромному псу и стал гладить его пышный хвост. Мать в испуге кричит: — Что ты делаешь? Он же укусит тебя! — Нет, мама, с этого конца они не кусаются. anekdotov.net</p>
            //                     </Tab>
            //                 </Tabs>
            //             </Col>
            //         </Row>
            //     </Tab.Container>
            // </Container>



                    /* <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <img src={pp1PNG} alt="image" />
                                <p>Вовочка подбежал к огромному псу и стал гладить его пышный хвост. Мать в испуге кричит: — Что ты делаешь? Он же укусит тебя! — Нет, мама, с этого конца они не кусаются. anekdotov.net</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src={pp2PNG} alt="image" />
                                <p>Вовочка подбежал к огромному псу и стал гладить его пышный хвост. Мать в испуге кричит: — Что ты делаешь? Он же укусит тебя! — Нет, мама, с этого конца они не кусаются. anekdotov.net</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img src={pp3PNG} alt="image" />
                                <p>Вовочка пoдбежал к огромному псу и стал гладить его пышный хвост. Мать в испуге кричит: — Что ты делаешь? Он же укусит тебя! — Нет, мама, с этого конца они не кусаются. anekdotov.net</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img src={pp4PNG} alt="image" />
                                <p>Вовочка подбежал к огромному псу и стал гладить его пышный хвост. Мать в испуге кричит: — Что ты делаешь? Он же укусит тебя! — Нет, мама, с этого конца они не кусаются. anekdotov.net</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img src={pp5PNG} alt="image" />
                                <p>Вовочка подбежал к огромному псу и стал гладить его пышный хвост. Мать в испуге кричит: — Что ты делаешь? Он же укусит тебя! — Нет, мама, с этого конца они не кусаются. anekdotov.net</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
                </Container >  */}
