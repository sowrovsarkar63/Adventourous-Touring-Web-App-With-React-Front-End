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
                            <h5>Hello, world! Full width Hero-unit header</h5>
                            <p>
                                This is a template for a simple marketing or
                                informational website. It includes a large
                                callout called the hero unit and three
                                supporting pieces of content. Use it as a
                                starting point to create something more unique.
                            </p>
                            <p>
                                <Button
                                    variant="primary"
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
