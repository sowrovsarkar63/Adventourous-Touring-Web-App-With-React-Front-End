import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
export default function Hero() {
    return (
        <section className="hero-area">
            <Container>
                <Row>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <div className="mt-5 pt-5 lh-lg">
                            <h4>
                                Make Your Tour More Adventurous And More
                                Excitement With Us
                            </h4>
                            <p>
                                Adventurous Tour Provide Comprehenship
                                Adventurous Place And And Guide With Full Of Fun
                                , Excitement , Mind Blowing. We Provide Quality
                                Touring Safty And Guide Also. And You Will Find
                                Different Place With Different Excitement.
                            </p>
                            <p>
                                <Button
                                    variant="danger"
                                    size="md"
                                    className="mt-3"
                                >
                                    Learn More
                                </Button>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
