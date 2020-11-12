import {Card} from 'react-bootstrap';

const ListingCard = (props) => {

    let shortDescription = props.listing.description.substring(0,30)

    if(props.listing.description.length > 30){
        shortDescription += "...";
    }

    return (  
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> {props.listing.businessName} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.listing.businessType}</Card.Subtitle>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Card.Link href={`/listing/${props.listing._id}`}>View</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default ListingCard 