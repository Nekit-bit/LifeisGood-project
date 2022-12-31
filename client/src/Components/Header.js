import React, { Component } from "react"
import { Navbar, Nav, FormControl, Container, Form, Button, Dropdown, DropdownButton } from "react-bootstrap"
import { Route } from "react-router"
import logo from './MainLogo.png'
import { BrowserRouter as Router, Routes, Link } from "react-router-dom"

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import Signup from '../Pages/Signup';
import { Login } from '../Pages/Login';

import { Dialog } from 'primereact/dialog';

export default class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            displayLogin: false,
            position: 'center'
        };

       
    }

   

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" className="header-main" sticky="top">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="115px"
                                weight="115px"
                                alt="LifeisGood"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse>
                            <Form className="w-100 d-flex" inline>
                                <FormControl
                                    className="formcontrol-main"
                                    type="text"
                                    placeholder="Поиск..."
                                />
                                <Button variant="light" className="m-auto">Поиск</Button>
                            </Form>

                            <DropdownButton id="dropdown-basic-button" title="Выберите раздел">
                                <Dropdown.Item href="/">Главная</Dropdown.Item>
                                <Dropdown.Item href="/about">Питание</Dropdown.Item>
                                <Dropdown.Item href="/contacts">Готовые сеты</Dropdown.Item>
                                <Dropdown.Item href="/blog">Форум</Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton variant="danger" id="dropdown-basic-button" title="Вход">
                            <Button onClick={() => 0}>Test</Button>
                                {/* <Dropdown.Item href="/login">Log in</Dropdown.Item> */}
                                <Dropdown.Item href="/signup">Sign up</Dropdown.Item>
                            </DropdownButton>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Dialog header="Header" visible={this.state.displayLogin} style={{ width: '50vw' }} onHide={ () => 0}>
                    <Container>
                     <Login />
                    </Container>
                </Dialog>



                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Signup' element={<Signup />} />
                    </Routes>
                </Router>
            </>







            // <>
            //     <Navbar collapseOnSelect expand="md" className="header-main" sticky="top" variant="light">
            //         <Container>
            //             <Navbar.Brand href="/">
            //                 <img
            //                     src={logo}
            //                     height="115px"
            //                     width="115px"
            //                     className="d-inline-block align-top"
            //                     alt="LifeisGood"
            //                 />
            //             </Navbar.Brand>
            //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //             <Navbar.Collapse className="d-flex justify-content-between" id="responsive-navbar-nav">

            //                 <Form className="d-flex" inline>
            //                     <FormControl
            //                         type="text"
            //                         placeholder="Search..."
            //                         className="mr-sm-2 form-control-lg "
            //                     />
            //                     <Button variant="outline-info">Search</Button>
            //                 </Form>

            //                 <Nav className="mr-auto">
            //                     <Nav.Link href="/">Home</Nav.Link>
            //                     <Nav.Link href="/about">About us</Nav.Link>
            //                     <Nav.Link href="/contacts">Contacts</Nav.Link>
            //                     <Nav.Link href="/blog">Blog</Nav.Link>
            //                 </Nav>
            //             </Navbar.Collapse>
            //         </Container>

            //     </Navbar>
            //     <Router>
            //         <Routes>
            //             <Route path='/' element={<Home />} />
            //             <Route path='/about' element={<About />} />
            //             <Route path='/contacts' element={<Contacts />} />
            //             <Route path='/blog' element={<Blog />} />
            //         </Routes>
            //     </Router>
            // </>
        )
    }
}