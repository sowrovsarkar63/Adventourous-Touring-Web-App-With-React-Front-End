import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Team() {
    return (
        <>
            <div className=" mx-auto w-25  mt-4 pt-4 mb-4 pb-4 border border-warning border-top-0 border-bottom-0">
                <h2 className="text-center">
                    <span className="fw-bolder ">
                        <span className="text-primary">
                            Our Passionate Team
                        </span>
                    </span>
                </h2>
            </div>

            <Container className="mb-5">
                <Row xs={1} md={2} lg={4} xl={4} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/01/H1-img-5.jpg"
                            />
                            <Card.Body>
                                <Card.Title>JUANA HALL</Card.Title>
                                <Card.Text>
                                    <h6 className="text-dark">
                                        Personal Guide
                                    </h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/01/H1-img-6.jpg"
                            />
                            <Card.Body>
                                <Card.Title>DAVID HARRISON </Card.Title>
                                <Card.Text>
                                    <h6 className="text-dark">
                                        Hill & Other Guide
                                    </h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/01/H1-img-7.jpg"
                            />
                            <Card.Body>
                                <Card.Title>DIANNA BRADLEY</Card.Title>
                                <Card.Text>
                                    <h6 className="text-dark">
                                        Personal Trainer
                                    </h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/01/H1-img-8.jpg"
                            />
                            <Card.Body>
                                <Card.Title>KEVIN STEELE</Card.Title>
                                <Card.Text>
                                    <h6 className="text-dark">
                                        Personal Trainer
                                    </h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
