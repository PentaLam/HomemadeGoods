import {Container, Jumbotron, Button} from 'react-bootstrap';
import ListingCard from '../components/ListingCard';
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

       let url = "http://" + window.location.hostname + ":5000/api/listing";

       fetch(url,{
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
            'Content-Type': 'application/json'
            }
       })
         .then(res => res.json())
         .then(
           (result) => {
               console.log(url);
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