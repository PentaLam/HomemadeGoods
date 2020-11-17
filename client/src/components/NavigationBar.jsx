import { Nav, Navbar, Form} from 'react-bootstrap';


const NavigationBar = () => {
    return (
        <div>
            <Navbar style={{backgroundColor:"#121212"}} variant="dark">
                <Navbar.Brand href="/">Homemade Goods</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/join">Join</Nav.Link>
                </Nav>
                <Form inline>
                </Form>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
