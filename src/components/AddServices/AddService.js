import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddService.css";

export default function AddService() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios
            .post("https://adeventure-toure.herokuapp.com//addService", data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("added successfully");
                    reset();
                }
            });
    };
    return (
        <div>
            <Container>
                <div className=" mx-auto w-50  mt-4 pt-4 mb-4 pb-4 border border-warning border-top-0 border-bottom-0">
                    <h2 className="text-center">
                        <span className="fw-bolder ">
                            <span className="text-primary">
                                Our Passionate Team
                            </span>
                        </span>
                    </h2>
                </div>
                <div className="add-service">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("title", {
                                required: true,
                                maxLength: 20,
                            })}
                            placeholder="Name of the service"
                        />
                        <input {...register("img")} placeholder="image url" />
                        <textarea
                            {...register("description")}
                            placeholder="Add Description"
                        />

                        <input type="submit" />
                    </form>
                </div>
            </Container>
        </div>
    );
}
