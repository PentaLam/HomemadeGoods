import {Container, Jumbotron, Button} from 'react-bootstrap';
import ListingCard from '../components/ListingCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';

const pStyle = {
    fontSize: '15px',
    textAlign: 'left',
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
                <Jumbotron style={{backgroundColor:"#1F1B24", color:"#fff"}} className="d-flex justify-space-between">
                    <div>
                        <h1>HomeMade Goods</h1>
                        <p style={pStyle}>
                            Check out local business that provide the stuff you need!
                        </p>
                        <p>
                        <Button style={{backgroundColor:"#3700B3", color:"#fff", border:"none"}} href="/about">Learn more</Button>
                        </p>
                    </div>
                    <div style={{marginLeft:"30em"}}>
                        <img style={{width:"250px", height:"250px"}} src="../images/pentalam2.png"/>
                    </div>
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