import React, { Component } from 'react';
import { Container, Row, Tabs, Tab, Nav, Col } from 'react-bootstrap';
import { Image } from 'primereact/image';

import pp1PNG from '../Assets/pp1.jpg'
import pp2PNG from '../Assets/pp2.jpg'
import pp3PNG from '../Assets/pp3.jpg'
import pp4PNG from '../Assets/pp4.jpg'
import pp5PNG from '../Assets/pp5.jpg'

import principiPNG from '../Assets/principi.jpg'

import Table from 'react-bootstrap/Table';

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
                    <h2 className='chapter-racion-header'>Рацион</h2>
                    <Table striped >
                        <tr>
                            <td>Правило № 1. Используйте для приготовления пищи несколько видов растительного масла. Это лучший источник необходимых организму жирных кислот. Очень хорошо, если на кухне постоянно будут несколько бутылочек с разными маслами: оливковым, кунжутным, льняным, маслом грецкого и кедрового ореха. Помните, что нерафинированные масла не подходят для термической обработки.</td>
                        </tr>
                        <tr>
                            <td>Правило № 2. Ешьте как можно больше сезонных продуктов — в них содержится максимум полезных веществ. Зимние овощи и фрукты, выращенные в теплицах или привезенные издалека, из-за обработки химикатами и длительного хранения не только теряют всю пользу, но и становятся аккумуляторами нитратов и других вредных химических соединений.</td>
                        </tr>
                        <tr>
                            <td>Правило № 3. Максимально ограничьте употребление рафинированных продуктов: сахара, растительного масла, белой пшеничной муки, очищенного белого риса. В них нет клетчатки, которая очень важна для работы пищеварительного тракта, а также для питания полезных бактерий, живущих в кишечнике. Именно поэтому гораздо лучше вместо белого хлеба есть цельнозерновой, а рафинированный сахар заменить на коричневый или даже на мед.</td>
                        </tr>
                        <tr>
                            <td>Правило № 4. Пейте воду. Чай, кофе и соки воду не заменяют. В сутки организму необходимо получать не меньше 30–35 мл жидкости на 1 кг веса. Сладкие газировки — полностью под запретом, в них содержится слишком много сахара.</td>
                        </tr>
                        <tr>
                            <td>Правило № 5. Не забывайте о белковой пище. Она способна надолго дать чувство сытости и к тому же богата аминокислотами. Белки необходимы организму для строительства мышечной ткани, замены устаревших клеток. К богатым белками продуктам относятся различные виды мяса, рыба, кальмары, креветки, орехи, грибы, некоторые бобовые, яйца, творог.</td>
                        </tr>
                        <h2 className='chapter-racion-header'>Приготовление пищи</h2>
                        <tr>
                            <td>Правило № 1. Используйте для приготовления пищи несколько видов растительного масла. Это лучший источник необходимых организму жирных кислот. Очень хорошо, если на кухне постоянно будут несколько бутылочек с разными маслами: оливковым, кунжутным, льняным, маслом грецкого и кедрового ореха. Помните, что нерафинированные масла не подходят для термической обработки.</td>
                        </tr>
                        <tr>
                            <td>Правило № 2. Готовьте правильно. Сохранить все полезные вещества в продуктах можно при минимальной тепловой обработке. Макароны или крупу рекомендуется варить всего несколько минут. Кстати, классическая итальянская паста всегда должна быть чуть-чуть недоваренной и заправляться растительным маслом. Мясные и рыбные продукты обязательно должны быть термически обработаны, поскольку в них могут находиться паразиты. Но при этом от жарки на масле лучше отказаться, оптимальные способы — варка, запекание в духовом шкафу и приготовление на пару.</td>
                        </tr>
                        <tr>
                            <td>Правило № 3. Используйте для готовки натуральные и свежие продукты. Любой полуфабрикат или товар длительного хранения с консервантами, усилителями вкуса и красителями увеличивает нагрузку на организм, препятствует выведению токсинов, замедляет обмен веществ. Кусочек курицы, запеченный в духовке, во много раз полезнее самой качественной и дорогой колбасы из магазина.</td>
                        </tr>
                        <h2 className='chapter-racion-header'>Режим</h2>
                        <tr>
                            <td>Правило № 1. Обязательно соблюдайте режим питания. Редкие приемы пищи вредны так же, как постоянные перекусы и привычка все время что-нибудь жевать. Здоровому человеку оптимально есть 4–5 раз в день, промежуток между едой более 5 часов замедляет метаболизм и заставляет организм переходить на режим экономии. В результате начинают накапливаться жировые отложения. Постарайтесь не перекусывать на рабочем месте или у телевизора. Процесс потребления пищи в этом случае становится неконтролируемым, наступает не насыщение, а переедание.</td>
                        </tr>
                        <tr>
                            <td>Правило № 2. Ежедневно съедайте немного свежих овощей и фруктов. Рекомендованное количество — по 300 г тех и других. Так вы получите все необходимые витамины и клетчатку. Очень удобно брать с собой на работу заранее порезанное яблоко или грушу, огурец или морковные палочки.</td>
                        </tr>
                        <tr className='zametki'>
                            <td>Конечно, немедленно и полностью изменить свои привычки и отказаться от вкусного торта с чашечкой крепкого кофе очень сложно. Это может потребовать большого напряжения воли и привести к стрессу. Так что изредка можно позволить себе и бутерброд с колбасой, и пирожное. Главное, чтобы это не стало ежедневной пищей.</td>
                        </tr>


                        <h2 className='chapter-racion-header'>Рекомендуемые продукты: вкусно и полезно</h2>

                        <Table striped>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Питайся правильно!</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Свежие ягоды, фрукты и овощи (витамин С, клетчатка).</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Крупы и приготовленные из них каши (витамины В, Е, магний, калий, фолиевая кислота).</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Сухофрукты и орехи (витамины, жирные кислоты, белок).</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Мясо птицы (белок, аминокислоты, витамины А, В, Е).</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Рыба и морепродукты (белок, полиненасыщенные кислоты, витамины D, E, B12, кальций, фосфор).</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Молочные продукты: сметана, творог, йогурт (кальций, белок, аминокислоты, витамины D, A, B12, углеводы).</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Зеленый чай (витамины, минералы, полифенолы).</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Растительные масла, полученные методом холодного отжима (фосфолипиды, линолевая и другие полиненасыщенные кислоты, витамины А, D, E).
                                    </td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Мед (витамины, микроэлементы, глюкоза, фруктоза, фитонциды, быстрые углеводы).</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Зерновой хлеб (клетчатка, ферменты, аминокислоты).</td>
                                </tr>
                            </tbody>
                        </Table>
                        <tr className='zametki-1'>
                            <td>Употребление этих продуктов в правильных сочетаниях и является тем, что называют здоровым питанием, поскольку они приносят организму несомненную пользу и способны не только поддержать здоровье, но и укрепить его. Диетологи рекомендуют, например, есть крупы на воде в сочетании с овощными салатами, заправленными оливковым маслом. Кстати, сочетать в салате огурцы и томаты не рекомендуется — нарезанные огурцы выделяют особый фермент, который разрушает содержащийся в томатах витамин С. К мясу, рыбе и птице подойдут капуста, спаржа, кабачки, редис, огурцы. Фрукты лучше есть отдельно, до еды или примерно через час после.</td>
                        </tr>

                        <h2 className='chapter-racion-header'>Нерекомендуемые продукты: ненужный балласт</h2>

                        <Table striped>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>А так питаться не нужно!</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Чипсы, попкорн, сухарики, соленые орешки.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Алкогольные напитки..</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Любые полуфабрикаты и концентраты: сухое картофельное пюре, лапша быстрого приготовления и т.д.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Сдобная выпечка, особенно с высоким содержанием сахара.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Жареные блюда.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Готовые фабричные соусы, включая майонез.</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Копчености, колбасы.</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Сладости.</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Фастфуд.</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Соки (кроме свежевыжатых), газированные напитки.</td>
                                </tr>
                            </tbody>
                        </Table>
                        <tr className='zametki-1'>
                            <td>Нежелательно и употребление сахара и соли. Если уж отказаться от них совсем не получается, то вместо сахара можно использовать мед, а соль использовать по минимуму, лишь чуть-чуть подсаливая блюда. В последнее время популярными стали морская и розовая гималайская соль, содержащие меньше хлорида натрия и больше полезных веществ.</td>
                        </tr>
                    
                    <h2 className='chapter-racion-header'>Калорийность рациона и БЖУ-баланс</h2>
                    <tr>
                            <td>Правило № 1. Обязательно соблюдайте режим питания. Редкие приемы пищи вредны так же, как постоянные перекусы и привычка все время что-нибудь жевать. Здоровому человеку оптимально есть 4–5 раз в день, промежуток между едой более 5 часов замедляет метаболизм и заставляет организм переходить на режим экономии. В результате начинают накапливаться жировые отложения. Постарайтесь не перекусывать на рабочем месте или у телевизора. Процесс потребления пищи в этом случае становится неконтролируемым, наступает не насыщение, а переедание. </td>
                    </tr>
                    <tr>
                        <td>
                        Средняя суточная норма калорий для мужчин составляет, в зависимости от возраста и образа жизни, 2000–2400 ккал, для женщин — 1800–2400 ккал. Баланс белков, жиров и углеводов в норме должен быть следующим:
                        </td>
                    </tr>
                    <Table striped>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>белки — 30–40%;</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>углеводы — 40–50%;</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>жиры — 20–25%</td>
                                </tr>
                                </tbody>
                        </Table>
                        <h3>На заметку!</h3>
                        <tr className='zametki-1'>
                            <td>Существует несколько формул, по которым можно рассчитать индивидуальную потребность в калориях. Например, формула ВОЗ основана на использовании величины площади тела, а формула Кетча-Макардла — на учете процента жира в теле.</td>
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
