/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { Container, Button, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from 'react-bootstrap/Offcanvas';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ThemeToggleContext from "../../context/ThemeToggleContext";
import ThemeContextType from "../../dto/ThemeContextType";

const Header: React.FC = () => {
    const [show, setShow]                               = useState(false);
    const handleClose                                   = () => setShow(false);
    const handleShow                                    = () => setShow(true);
    const { toggleTheme, updateTheme }           = React.useContext(ThemeToggleContext) as ThemeContextType;

    const themeTogglePopover = (
        <Popover id="popover-basic" className={updateTheme ? updateTheme : ""}>
            <Popover.Body>
                <ul className="theme__toggle--dropdown">
                    <li className={updateTheme === "light" ? "active" : ""}>
                        <div className="d-flex" onClick={() => toggleTheme("light")}>
                            <p><img src="/assets/images/icon/light2.svg" alt="icon" /></p>
                            <p className="text">Light</p>
                        </div>
                    </li>
                    <li className={updateTheme === "dark" ? "active" : ""}>
                        <div className="d-flex" onClick={() => {toggleTheme("dark")}}>
                            <p><img src="/assets/images/icon/dark2.svg" alt="icon" /></p>
                            <p className="text">Dark</p>
                        </div>
                    </li>
                    <li className={updateTheme === "system" ? "active" : ""}>
                        <div className="d-flex" onClick={() => toggleTheme("system")}>
                            <p><img src="/assets/images/icon/system.svg" alt="icon" /></p>
                            <p className="text">System</p>
                        </div>
                    </li>
                </ul>
            </Popover.Body>
        </Popover>
    );

    return (
        <Navbar className={`header__wraper ${updateTheme}`} expand="lg" fixed="top">
            <Container>
                <Link  href="/" passHref>
                    <Navbar.Brand>
                        {
                            updateTheme === "light" ? 
                                <img src="/assets/images/logo.png" alt="logo" />
                                : 
                                updateTheme === "dark" ?
                                    <img src="/assets/images/logo-light.png" alt="logo" />
                                    :
                                    <img src="/assets/images/logo.png" alt="logo" />
                        }
                    </Navbar.Brand>
                </Link>
                <div className="mobile__menu--icon d-lg-none">
                    <ul className="d-flex align-items-center">
                        <li>
                            <img className="nofication" src="/assets/images/icon/notification.svg" alt="icon" />
                        </li>
                        <li>
                            <OverlayTrigger trigger="click" rootCloseEvent="click" rootClose placement="bottom" overlay={themeTogglePopover}>
                                <Button>
                                    {
                                        updateTheme === "light" ? 
                                            <img src="/assets/images/icon/lightMode.svg" alt="icon" />
                                            : 
                                            updateTheme === "dark" ?
                                                <img src="/assets/images/icon/dark2.svg" alt="logo" />
                                                :
                                                <img src="/assets/images/icon/system.svg" alt="icon" />
                                    }
                                </Button>
                            </OverlayTrigger>
                        </li>
                        <li>
                            <img src="/assets/images/profile/headerProfile.png" alt="profileImage" />
                        </li>
                        <li style={{ cursor: "pointer" }} onClick={handleShow}>
                            <img className="navigation" src="/assets/images/icon/navigation.svg" alt="icon" />
                        </li>
                    </ul>
                    <Offcanvas show={show} onHide={handleClose} className={updateTheme ? updateTheme : ""}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="mobile__menu">
                                <ul className="list list-unstyled">
                                    <Link href={`/`} passHref>
                                        <li className="active__class">Dashboard</li>
                                    </Link>
                                    <Link href={`/`} passHref>
                                        <li>Campaign</li>
                                    </Link>
                                    <Link href={`/`} passHref>
                                        <li>Hypesocial</li>
                                    </Link>
                                    <Link href={`/`} passHref>
                                        <li>Insights</li>
                                    </Link>
                                </ul>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className="me-auto middle__menu">
                        <Link href="/" passHref>
                            <Nav.Link className="active__class">Dashboard</Nav.Link>
                        </Link>
                        <Link href="/" passHref>
                            <Nav.Link>Campaign</Nav.Link>
                        </Link>
                        <Link href="/" passHref>
                            <Nav.Link>Hypesocial</Nav.Link>
                        </Link>
                        <Link href="/" passHref>
                            <Nav.Link>Insights</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav className="right__sec d-flex align-items-center">
                        <Nav.Link>
                            <img className="nofication" src="/assets/images/icon/notification.svg" alt="icon" />
                        </Nav.Link>
                        <Nav.Link>
                            <OverlayTrigger trigger="click" rootCloseEvent="click" rootClose placement="bottom" overlay={themeTogglePopover}>
                                <Button>
                                    {
                                        updateTheme === "light" ? 
                                            <img src="/assets/images/icon/lightMode.svg" alt="icon" />
                                            : 
                                            updateTheme === "dark" ?
                                                <img src="/assets/images/icon/dark2.svg" alt="logo" />
                                                :
                                                <img src="/assets/images/icon/system.svg" alt="icon" />
                                    }
                                </Button>
                            </OverlayTrigger>
                        </Nav.Link>
                        <Link href="/" passHref>
                            <Nav.Link>
                                <div className="d-flex">
                                    <p className="profile__text">Hi, Rakib</p>
                                    <p><img src="/assets/images/profile/headerProfile.png" alt="profileImage" /></p>
                                </div>
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
