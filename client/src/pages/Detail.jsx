import react, {useEffect, useState} from 'react';

const Detail = (props) => {

    const id = props.match.params.id;
    const [listing, setListing] = useState({});

    useEffect(() => {

        let url = "http://" + window.location.hostname + `:5000/api/listing/${id}`;

        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              setListing(result);
            },
            (error) => {
                //Do error stuff
                console.log("BROKE")
            }
          ) 
      }, [])
    

    return (
    <div style={{color: "white"}}>
      <h4>Business Name: <span>{listing.businessName}</span></h4>
      <h4>Business Type: <span>{listing.businessType}</span></h4>
      <h4>Contact Info: <span>{listing.contactInfo}</span></h4>
      <h4>City: <span>{listing.city}</span></h4>
      <h4>State: <span>{listing.state}</span></h4>
      <h4>Zip: <span>{listing.zipcode}</span></h4>
      <h4>Description: <span>{listing.description}</span></h4>
    </div>
    );
}
 
export default Detail;