import react, {useEffect, useState} from 'react';

const Detail = (props) => {

    const id = props.match.params.id;
    const [listing, setListing] = useState({});

    useEffect(() => {

        fetch(`http://localhost:5000/api/listing/${id}`)
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
    <div>{listing.businessName}</div>
    );
}
 
export default Detail;