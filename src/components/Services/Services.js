import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Services.css";
export default function Services() {
    const [tourPlaces, setTourPlaces] = useState([]);
    const [showSpinner, SetShowSpinner] = useState(true);

    useEffect(() => {
        axios
            .get("https://adeventure-toure.herokuapp.com/toures")
            .then((response) => {
                const data = response.data;
                setTourPlaces(data);
                SetShowSpinner(false);
            });
    }, []);

    return (
        <>
            <Container className="mb-4">
                <div className=" mx-auto w-50 mt-4 pt-4 mb-4 pb-4 border border-warning border-top-0 border-bottom-0">
                    <h2 className="text-center">
                        <span className="fw-bolder ">
                            <span className="text-primary">
                                Our Guided Places
                            </span>
                        </span>

                        <br />
                        {showSpinner ? (
                            <Spinner animation="border" variant="danger" />
                        ) : (
                            ""
                        )}
                    </h2>
                </div>
                <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                    {tourPlaces.map((singlePlace) => (
                        <Col key={singlePlace._id}>
                            <Card className="shadow-lg card-style">
                                <Card.Img
                                    variant="top"
                                    src={singlePlace?.img}
                                />
                                <Card.Body className="font-monospace text-white">
                                    <Card.Title>
                                        {singlePlace?.title}
                                    </Card.Title>
                                    <Card.Text className="font-monospace text-white mt-5">
                                        {singlePlace.description.slice(0, 200)}
                                    </Card.Text>
                                </Card.Body>
                                <div className="m-3 p-3 ">
                                    <Button
                                        as={NavLink}
                                        to={`/details/${singlePlace?._id}`}
                                        variant="outline-secondary"
                                        size="lg"
                                    >
                                        Book Place
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
        </>
    );
}
