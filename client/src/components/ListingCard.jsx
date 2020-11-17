import {Card, Button} from 'react-bootstrap';
import { colorpalette } from '../constants/color';

const ListingCard = (props) => {

    const maxDescriptionLength = 70;
    let shortDescription = props.listing.description.substring(0,maxDescriptionLength)
    let image;
    let backgroundColor; 
    switch (props.listing.businessType) {
        case "food":
            image = "../images/food-white.png"
            backgroundColor = colorpalette.CORAL
            break;
        case "services":
            image = "../images/services-white.png"
            backgroundColor = colorpalette.LIGHTGREEN
            break;
        case "craft":
            image = "../images/toolbox-white.png"
            backgroundColor = colorpalette.LIGHTSKYBLUE
            break;
        case "art":
            image = "../images/pallete-white.png"
            backgroundColor = "#D9E21D"
            break;
        default:
            image = "../images/other-white.png"
            backgroundColor = "HF4F4F5"
            break;
    }

    if(props.listing.description.length > maxDescriptionLength){
        shortDescription += "...";
    }

    return (  
        <div className="listingCard">
            <Card className="d-flex flex-row" style={{backgroundColor: backgroundColor, color:"#fff", border : "none"}}>
                <Card.Body>
                    <Card.Title style={{color:"#000000"}}> {props.listing.businessName} </Card.Title>
                    <Card.Subtitle  style={{color:"#000000"}}>{(props.listing.businessType).toUpperCase()}</Card.Subtitle><br/>
                    <Card.Text style={{color:"#000000", font: "arial"}}>
                        {shortDescription}
                    </Card.Text>
                    <Button variant="primary" href={`/listing/${props.listing._id}`}> View More </Button>
                    {/* <Card.Link style={{color:"#ADD8E6"}} href={`/listing/${props.listing._id}`}>View more</Card.Link> */}
                </Card.Body>
                <div style={{margin: "auto"}} className="mr-2">
                    <img src={image} alt="icon of business type" className="w-25 h-25 float-right"></img>
                </div>
            </Card>
        </div>
    );
}
 
export default ListingCard 