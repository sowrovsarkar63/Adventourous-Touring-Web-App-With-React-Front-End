import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
export default function Login() {
    const { setuser, SignInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || "/home";
    const handleGoogleSignIn = () => {
        SignInWithGoogle()
            .then((result) => {
                setuser(result.user);
                history.push(redirectUri);

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <Container>
            <div className="login-section d-flex justify-content-center mt-5 mb-5 ">
                <div className=" bg-dark p-4 login-style">
                    <h2 className="text-white">
                        Please Login With Your Google Account
                    </h2>
                    <hr className="text-white" />
                    <p>
                        We Are Serious About Your Security.We will never share
                        Your information with other. And We will take care of
                        your google account security{" "}
                    </p>
                    <br />
                    <Button
                        onClick={handleGoogleSignIn}
                        variant="primary"
                        size="sm"
                        type="submit"
                    >
                        SignIn With Google
                    </Button>
                </div>
            </div>
        </Container>
    );
}
