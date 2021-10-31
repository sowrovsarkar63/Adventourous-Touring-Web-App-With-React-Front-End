import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Services.css";
export default function Services() {
    const [tourPlaces, setTourPlaces] = useState([]);

    useEffect(() => {
        axios
            .get("https://adeventure-toure.herokuapp.com/toures")
            .then((response) => {
                const data = response.data;
                setTourPlaces(data);
            });
    }, []);

    return (
        <Container className="mb-4">
            <div className=" mx-auto w-25  mt-4 pt-4 mb-4 pb-4 border border-warning border-top-0 border-bottom-0">
                <h2 className="text-center">
                    <span className="fw-bolder ">
                        <span className="text-primary">Book Places</span>
                    </span>
                </h2>
            </div>
            <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                {tourPlaces.map((singlePlace) => (
                    <Col key={singlePlace._id}>
                        <Card className="shadow-lg card-style">
                            <Card.Img variant="top" src={singlePlace.img} />
                            <Card.Body className="font-monospace text-white">
                                <Card.Title>{singlePlace.title}</Card.Title>
                                <Card.Text className="font-monospace text-white mt-5">
                                    {singlePlace.description.slice(0, 200)}
                                </Card.Text>
                            </Card.Body>
                            <div className="m-3 p-3 ">
                                <Button variant="outline-warning" size="lg">
                                    Book Now
                                </Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            <br />
            <br />
            <br />
        </Container>
    );
}