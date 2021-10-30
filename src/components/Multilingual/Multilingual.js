import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Multilingual.css";
export default function Multilingual() {
    return (
        <Container>
            <Row>
                <Col
                    xs={12}
                    sm={12}
                    md={5}
                    lg={5}
                    xl={5}
                    className="overflow-hidden"
                >
                    <div className="img-style">
                        <img
                            src="https://xtrail.qodeinteractive.com/wp-content/uploads/2019/02/h1-img-6.jpg"
                            alt=""
                        />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="guide-text text-danger">
                        <h2>MULTILINGUAL GUIDES</h2>
                        <hr />
                        <p className="text-dark">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Cum sunt inventore nam voluptatum perspiciatis
                            facere. Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Cum sunt inventore nam voluptatum
                            perspiciatis facere. Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Cum sunt inventore nam
                            voluptatum perspiciatis facere.
                        </p>
                        {/* div className="mb-2"> */}
                        <Button className="mt-5" variant="danger" size="lg">
                            Learn More
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
