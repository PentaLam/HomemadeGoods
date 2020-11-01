import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';


const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Homemade Goods</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="./home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="./join">Join</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
