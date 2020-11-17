import {Card} from 'react-bootstrap';

const ListingCard = (props) => {

    let shortDescription = props.listing.description.substring(0,30)
    let image;
    switch (props.listing.businessType) {
        case "food":
            image = "../images/spaguetti.png"
            break;
        case "services":
            image = "../images/customer-support.png"
            break;
        case "craft":
            image = "../images/tool-box.png"
            break;
        case "art":
            image = "../images/palette.png"
            break;
        default:
            image = "../images/idea.png"
            break;
    }

    if(props.listing.description.length > 30){
        shortDescription += "...";
    }

    return (  
        <div className="mb-3">
            <Card className="d-flex flex-row">
                <Card.Body>
                    <Card.Title> {props.listing.businessName} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.listing.businessType}</Card.Subtitle>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Card.Link href={`/listing/${props.listing._id}`}>View more</Card.Link>
                </Card.Body>
                <div style={{margin: "auto"}} className="mr-2">
                    <img src={image} alt="icon of business type" className="w-25 h-25 float-right"></img>
                </div>
            </Card>
        </div>
    );
}
 
export default ListingCard 