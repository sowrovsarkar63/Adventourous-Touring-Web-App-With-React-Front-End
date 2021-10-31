import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
    return (
        <div className="footer-area pt-5 ">
            <Container>
                <Row>
                    <Col xs={12} md={8} lg={8} xl={8}>
                        <div className=" mx-auto w-35  mt-4 pt-4 mb-4 pb-4 border border-warning border-top-0 border-bottom-0">
                            <h2 className="text-center">
                                <span className="fw-bolder ">
                                    <span className="text-white">
                                        Adventurous-Tour
                                    </span>
                                </span>
                            </h2>
                        </div>
                        <br />
                        <p className="footer-text text-white ">
                            Adventure Travel May Be Any Tourist Activity That
                            includes Physical Activity, a cultural exchange, and
                            connection with nature. Adventure tourists may have
                            the motivation to achieve mental states
                            characterized as rush or flow, resulting from
                            stepping outside their comfort zone
                        </p>
                    </Col>

                    <Col xs={12} md={4} lg={4} xl={4} className="visit-page">
                        <Container>
                            {/* footer little menu */}
                            <h2 className="footer-text mt-3 ml-5">
                                <b>Quick Link</b>
                            </h2>
                            <ul>
                                <li>
                                    <NavLink to="/Home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allbooking">
                                        All Booking
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/mybooking">
                                        My Booking
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/AddService">
                                        Add Services
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </ul>
                        </Container>
                    </Col>
                    {/* Footer text */}
                    <div className="copy-text">
                        <p className="text-center text-white mt-3">
                            <span className="fw-bolder fs-3">
                                CopyRight By &copy;2021
                            </span>
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
