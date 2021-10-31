import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./ServiceDetails.css";
export default function ServiceDetails() {
    let { id } = useParams();
    const { users } = useAuth();

    // declear state
    const [TourplaceDetail, setTourplaceDetails] = useState([]);
    const [singleTourplace, setsingleTourPlace] = useState({});
    // set tourplacedetails
    useEffect(() => {
        axios
            .get("https://adeventure-toure.herokuapp.com/toures")
            .then((response) => {
                const data = response.data;
                setTourplaceDetails(data);
            });
    }, []);

    // find specific details
    useEffect(() => {
        const FoundService = TourplaceDetail.find(
            (findService) => findService._id == id
        );
        setsingleTourPlace(FoundService);
    }, [TourplaceDetail]);

    // hook form
    console.log(users);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        axios
            .post("https://adeventure-toure.herokuapp.com/placeOrder", data)
            .then((response) => {
                if (response.data.insertedId) {
                    alert("Oder Placed Successfully");
                }
            });
    };
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
                {/* tour place details section  */}
                <Col>
                    <Card className="text-center shadow-sm w-60">
                        <Card.Img variant="top" src={singleTourplace?.img} />

                        <div className="decription">
                            <Card.Body>
                                <Card.Title>
                                    {singleTourplace?.title}
                                </Card.Title>
                                <Card.Text className="text-dark font-monospace  mt-5 lh-lg">
                                    {singleTourplace?.description}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                {/* Place order form  */}
                <Col>
                    <Card className=" shadow-lg w-60">
                        <div className=" mx-auto  mt-4 pt-4 mb-4 p-4">
                            <h2 className="text-center">
                                <span className="fw-bolder ">
                                    <span className="text-primary">
                                        Please Book Places Here
                                    </span>
                                </span>
                            </h2>
                        </div>
                        <div className="decription">
                            <Card.Body>
                                <div className="PlaceOrder">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input
                                            type="text"
                                            {...register("email", {
                                                required: true,
                                                maxLength: 30,
                                            })}
                                            value={
                                                users.email || users.displayName
                                            }
                                        />
                                        <input
                                            type="text"
                                            {...register("placeName", {
                                                required: true,
                                            })}
                                            value={singleTourplace?.title}
                                        />
                                        <input
                                            type="text"
                                            {...register("address", {
                                                required: true,
                                            })}
                                            placeholder="Add You Current Address Address"
                                        />
                                        <input type="submit" value="Book Now" />
                                    </form>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
