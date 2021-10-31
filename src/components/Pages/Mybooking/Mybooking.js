import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

export default function Mybooking() {
    const { users } = useAuth();
    const [Orders, setOrders] = useState([]);
    const [MyOrders, setMyOrders] = useState([]);

    useEffect(() => {
        axios
            .get("https://adeventure-toure.herokuapp.com/myorder")
            .then((res) => {
                setOrders(res.data);
            });
    }, []);

    useEffect(() => {
        const myorder = Orders.filter(
            (order) => users.email || users.displayName == order.email
        );
        setMyOrders(myorder);
    }, [Orders]);

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            const url = `https://adeventure-toure.herokuapp.com/orders/${id}`;
            axios.delete(url).then((res) => {
                if (res.data.deletedCount > 0) {
                    alert("deleted successfully");
                    const remainingOrder = MyOrders.filter(
                        (order) => order._id !== id
                    );
                    setMyOrders(remainingOrder);
                }
            });
        }
    };

    return (
        <Container className="mb-5">
            <div>
                <div className=" mx-auto w-50  mt-4 pt-4 mb-4 pb-4 border border-warning border-top-0 border-bottom-0">
                    <h2 className="text-center">
                        <span className="fw-bolder ">
                            <span className="text-primary">My Booking</span>
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
                        {MyOrders.map((myorder) => (
                            <tr>
                                <td>{myorder._id.slice(0, 10)}</td>
                                <td>{myorder.email}</td>
                                <td>{myorder.placeName}</td>
                                <td>{myorder.address}</td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            handleDeleteOrder(myorder._id)
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
