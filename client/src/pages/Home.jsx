import {Container, Jumbotron, Button} from 'react-bootstrap';
import ListingCard from '../components/ListingCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const pStyle = {
    fontSize: '15px',
    textAlign: 'left',
    color: 'red',
  };

const Home = () => {
    return (  
        <div>
            <Container>
                <Jumbotron>
                    <h1>HomeMade Goods</h1>
                    <p style={pStyle}>
                        Where the shit is good and the goods are better than shit.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </Container>
        </div>
    );
}
 
export default Home;