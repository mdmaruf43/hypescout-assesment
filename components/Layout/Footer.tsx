/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import ThemeToggleContext from '../../context/ThemeToggleContext';
import ThemeContextType from '../../dto/ThemeContextType';

const Footer: React.FC = () => {
    const { updateTheme } = React.useContext(ThemeToggleContext) as ThemeContextType;

    return (
        <div className={`footer__wraper ${updateTheme}`}>
            <Container>
                <Row>
                    <Col md={3} xs={12}>
                        <div className="footer__logo--sec text-center text-lg-start">
                            {
                                updateTheme === "light" ? 
                                    <img src="/assets/images/logo.png" alt="logo" />
                                    : 
                                    updateTheme === "dark" ?
                                        <img src="/assets/images/logo-light.png" alt="logo" />
                                        :
                                        <img src="/assets/images/logo.png" alt="logo" />
                            }
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum sed ultricies volutpat rhoncus faucibus sit.</p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <ul className="social__link list-unstyled d-flex">
                                    <li>
                                        <a href="https://facebook.com/hypescout.co" target="_blank" rel="noopener noreferrer">
                                            <img src="/assets/images/icon/fb.svg" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/hypescout.co/" target="_blank" rel="noopener noreferrer">
                                            <img src="/assets/images/icon/instagram.svg" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/hypescout" target="_blank" rel="noopener noreferrer">
                                            <img src="/assets/images/icon/linkedin.svg" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/HypeScoutSocial/" target="_blank" rel="noopener noreferrer">
                                            <img src="/assets/images/icon/twitter.svg" alt="icon" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="footer__menu">
                            <h6>Company</h6>
                            <ul className="list list-unstyled">
                                <Link href={`/`} passHref>
                                    <li>About Us</li>
                                </Link>
                                <Link href={`/`} passHref>
                                    <li>Careers</li>
                                </Link>
                                <Link href={`/`} passHref>
                                    <li>Case Study</li>
                                </Link>
                                <Link href={`/`} passHref>
                                    <li>Blog</li>
                                </Link>
                                <Link href={`/`} passHref>
                                    <li>Contact Us</li>
                                </Link>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="footer__menu">
                            <h6>Influencer</h6>
                            <ul className="list list-unstyled">
                                <Link href={`/`} passHref>
                                    <li>Join as Influencer</li>
                                </Link>
                                <Link href={`/`} passHref>
                                    <li>HypeSocial</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="footer__menu d-block d-lg-none">
                            <h6>Advertiser</h6>
                            <ul className="list list-unstyled">
                                <Link href={`/`} passHref>
                                    <li>Join as Advertiser</li>
                                </Link>
                                <Link href={`/`} passHref>
                                    <li>Hypelink</li>
                                </Link>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} className="d-none d-lg-block">
                        <div className="footer__menu">
                            <h6>Advertiser</h6>
                            <ul className="list list-unstyled">
                                <Link href={`/`} passHref>
                                    <li>Join as Advertiser</li>
                                </Link>
                                <Link href={`/`} passHref>
                                    <li>Hypelink</li>
                                </Link>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="footer__bottom">
                    <Col md={{ span: 6, order: 0 }} xs={{ order: 1 }}>
                        <p className="bottom__text text-center text-lg-start"><span>© Hypescout 2022.</span> All rights reserved</p>
                    </Col>
                    <Col md={{ span: 6, order: 1}} xs={{ order: 0 }}>
                        <div className="bottom__list d-flex justify-content-lg-end justify-content-center">
                            <ul className="list-unstyled d-flex">
                                <Link href={`/`} passHref>
                                    <li><a>Terms & Conditions</a></li>
                                </Link>
                                <Link href={`/`} passHref>
                                    <li><a>Privacy</a></li>
                                </Link>
                                <Link href={`/`} passHref>
                                    <li><a>Sitemap</a></li>
                                </Link>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer