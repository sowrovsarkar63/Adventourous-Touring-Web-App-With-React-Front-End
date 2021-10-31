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
                            Our multi-lingual accredited guides come from the
                            very places the participants are visiting, ensuring
                            a deep local knowledge on the heritage, history and
                            culture of the region. We like cooperating with
                            those professional guides that get the extra mile by
                            showing different new aspects in the cities, such as
                            local anecdotes, and that are able to include all
                            points of historical and architectural interest in a
                            dynamic and enjoyable way.
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
