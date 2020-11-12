import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';


const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">Homemade Goods</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="/join">Join</Nav.Link>
                </Nav>
                <Form inline>
                </Form>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
