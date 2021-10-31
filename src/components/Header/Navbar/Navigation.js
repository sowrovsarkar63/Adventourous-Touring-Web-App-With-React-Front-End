import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
export default function Navigation() {
    const { users, HandleLogout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        Adventurous-Tour
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/mybooking">
                                My Booking
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/allbooking">
                                All Booking
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {users ? (
                                <Navbar.Text className="text-white mx-5 mt-1 ">
                                    <span>
                                        Signed in as :
                                        {!users.displayName
                                            ? users.email
                                            : users.displayName}
                                    </span>
                                </Navbar.Text>
                            ) : (
                                ""
                            )}
                            {!users ? (
                                <Nav.Link as={NavLink} to="/login">
                                    <Button variant="outline-primary">
                                        Login
                                    </Button>
                                </Nav.Link>
                            ) : (
                                <Nav.Link
                                    as={NavLink}
                                    onClick={HandleLogout}
                                    to="/login"
                                >
                                    <Button variant="outline-danger">
                                        Logout
                                    </Button>
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>{" "}
        </div>
    );
}
