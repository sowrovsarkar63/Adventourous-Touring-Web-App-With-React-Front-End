import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

export default function ServiceDetails() {
    let { id } = useParams();
    const [TourplaceDetail, setTourplaceDetails] = useState([]);
    const [singleTourplace, setsingleTourPlace] = useState({});
    useEffect(() => {
        axios
            .get("https://adeventure-toure.herokuapp.com/toures")
            .then((response) => {
                const data = response.data;
                setTourplaceDetails(data);
            });
    }, []);

    useEffect(() => {
        const FoundService = TourplaceDetail.find(
            (findService) => findService._id == id
        );
        setsingleTourPlace(FoundService);
    }, [TourplaceDetail]);

    return (
        <Container className="mt-3 mb-5">
            <div className=" mx-auto w-25  mt-4 pt-4 mb-4 pb-4 border border-warning border-top-0 border-bottom-0">
                <h2 className="text-center">
                    <span className="fw-bolder ">
                        <span className="text-primary">
                            Please Book Places Here
                        </span>
                    </span>
                </h2>
            </div>
            <Row xs={1} md={1} lg={2} xl={2} className="g-4">
                <Col>
                    <Card className="text-center shadow w-60">
                        <Card.Img variant="top" src={singleTourplace?.img} />

                        <div className="decription">
                            <Card.Body>
                                <Card.Title>
                                    {singleTourplace?.title}
                                </Card.Title>
                                <Card.Text className="text-dark">
                                    {singleTourplace?.description}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center shadow w-60">
                        <Card.Img variant="top" src={singleTourplace?.img} />

                        <div className="decription">
                            <Card.Body>
                                <Card.Title>
                                    {singleTourplace?.title}
                                </Card.Title>
                                <Card.Text className="text-dark">
                                    {singleTourplace?.description}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
