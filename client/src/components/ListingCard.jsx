import {Card} from 'react-bootstrap';

const ListingCard = (props) => {

    const maxDescriptionLength = 70;
    let shortDescription = props.listing.description.substring(0,maxDescriptionLength)
    let image;
    switch (props.listing.businessType) {
        case "food":
            image = "../images/food-white.png"
            break;
        case "services":
            image = "../images/services-white.png"
            break;
        case "craft":
            image = "../images/toolbox-white.png"
            break;
        case "art":
            image = "../images/pallete-white.png"
            break;
        default:
            image = "../images/other-white.png"
            break;
    }

    if(props.listing.description.length > maxDescriptionLength){
        shortDescription += "...";
    }

    return (  
        <div className="listingCard">
            <Card className="d-flex flex-row" style={{backgroundColor:"#1F1B24", color:"#fff"}}>
                <Card.Body>
                    <Card.Title> {props.listing.businessName} </Card.Title>
                    <Card.Subtitle  style={{color:"#fff"}}>{props.listing.businessType}</Card.Subtitle>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Card.Link style={{color:"#ADD8E6"}} href={`/listing/${props.listing._id}`}>View more</Card.Link>
                </Card.Body>
                <div style={{margin: "auto"}} className="mr-2">
                    <img src={image} alt="icon of business type" className="w-25 h-25 float-right"></img>
                </div>
            </Card>
        </div>
    );
}
 
export default ListingCard 