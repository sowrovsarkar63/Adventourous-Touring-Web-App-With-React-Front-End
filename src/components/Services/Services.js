import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import service1 from "../assets/services/service1resize";
import "./Services";
export default function Services() {
    return (
        <Container>
            <div className=" mx-auto w-25  mt-4 pt-4 mb-4 pb-4 border border-warning border-top-0 border-bottom-0">
                <h2 className="text-center">
                    <span className="fw-bolder ">
                        <span className="text-primary">Book Places</span>
                    </span>
                </h2>
            </div>
            <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                <Col>
                    <Card className="shadow card-style">
                        <Card.Img variant="top" src={service1} />
                        <Card.Body>
                            <Card.Title>Nepal Bali , Yugn</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Architecto, nihil et! Amet,
                                cupiditate. Ducimus voluptatem quo deleniti
                                aliquam odit minima sint culpa perspiciatis,
                                optio est delectus, nostrum officia maiores
                                quisquam.
                            </Card.Text>
                        </Card.Body>
                        <div className="m-3 p-3 text-center">
                            <Button variant="outline-warning" size="lg">
                                Book Now
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
            <br />
            <br />
            <br />
        </Container>
    );
}
