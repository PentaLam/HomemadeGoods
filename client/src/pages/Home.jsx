import {Container, Jumbotron, Button} from 'react-bootstrap';
import { Layout } from 'antd';
//import ListingCard from '../components/ListingCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from 'antd/lib/layout/layout';

const pStyle = {
    fontSize: '15px',
    textAlign: 'left',
    color: 'red',
  };

const Home = () => {
    return (
        <Layout>
            <Header>
                
            </Header>
        </Layout> 
        // <div>
        //     <Container>
        //         <Jumbotron>
        //             <h1>HomeMade Goods</h1>
        //             <p style={pStyle}>
        //                 Where the shit is good and the goods are better than shit.
        //             </p>
        //             <p>
        //                 <Button variant="primary">Learn more</Button>
        //             </p>
        //         </Jumbotron>
        //     </Container>
        // </div>
    );
}
 
export default Home;