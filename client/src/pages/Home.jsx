import {Container, Jumbotron, Button} from 'react-bootstrap';
//import ListingCard from '../components/ListingCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';

const pStyle = {
    fontSize: '15px',
    textAlign: 'left',
    color: 'red',
  };

const Home = () => {

    const [listings, setListings] = useState([]);
    useEffect(() => {

       fetch("http://localhost:5000/api/listing")
         .then(res => res.json())
         .then(
           (result) => {
             setListings(result);
           },
           (error) => {
               //Do error stuff
               console.log("BROKE")
           }
         ) 
     }, [])
    
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
                {listings.map((listing) => {
                return<ListingCard 
                        listing={listing}
                        ></ListingCard>
                })}
            </Container>
        </div>
    );
}
 
export default Home;