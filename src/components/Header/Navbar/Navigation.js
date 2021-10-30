import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Nav.Brand href="#home">React-Bootstrap</Nav.Brand>
                    <Nav.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Nav.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
