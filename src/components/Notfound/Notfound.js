import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Notfound.css";
export default function Notfound() {
    return (
        <>
            <Container>
                <div className=" mx-auto w-50  mt-4 pt-4 mb-4 pb-4 border border-warning border-top-0 border-bottom-0">
                    <h2 className="text-center">
                        <span className="fw-bolder ">
                            <span className="text-danger">
                                You're In The 404 Page
                            </span>
                        </span>
                    </h2>
                </div>
                <hr />

                <div>
                    <h1 className="text-danger text-center p-5 m-5">
                        {" "}
                        Page Not Found
                    </h1>

                    <div className="text-center mb-3 pb-3">
                        <Button
                            as={NavLink}
                            to="/home"
                            variant="danger"
                            size="lg"
                        >
                            Go Home
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    );
}
