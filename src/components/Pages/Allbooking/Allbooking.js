import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

export default function Allbooking() {
    const [AllOrders, setAllOrders] = useState([]);

    useEffect(() => {
        axios
            .get("https://adeventure-toure.herokuapp.com/myorder")
            .then((res) => {
                const data = res.data;
                setAllOrders(data);
            });
    }, []);

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            const url = `https://adeventure-toure.herokuapp.com/orders/${id}`;
            axios.delete(url).then((res) => {
                if (res.data.deletedCount > 0) {
                    alert("deleted successfully");
                    const remainingOrder = AllOrders.filter(
                        (order) => order._id !== id
                    );
                    setAllOrders(remainingOrder);
                }
            });
        }
    };
    return (
        <Container>
            <div>
                <div className=" mx-auto w-25  mt-4 pt-4 mb-4 pb-4 border border-warning border-top-0 border-bottom-0">
                    <h2 className="text-center">
                        <span className="fw-bolder ">
                            <span className="text-primary">
                                Manage All Order{" "}
                            </span>
                        </span>
                    </h2>
                </div>

                <br />
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name Or Email</th>
                            <th>Booked Place</th>
                            <th>Current Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllOrders.map((order) => (
                            <tr>
                                <td>{order._id.slice(0, 20)}</td>
                                <td>{order.email}</td>
                                <td>{order.placeName}</td>
                                <td>{order.address}</td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            handleDeleteOrder(order._id)
                                        }
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <br />
                <br />
            </div>
        </Container>
    );
}
