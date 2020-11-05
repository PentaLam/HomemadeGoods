import { Form, Col} from 'react-bootstrap'
import React from 'react'

<<<<<<< HEAD
class FormPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            type: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            zipcode: "",
            phone: "",
            email: "",
            description: ""
        }
    }
=======
const FormPage = () => {
    return (
        <Form>
            <Form.Group className="w-50">
                <Form.Label>Business Name</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group className="w-50">
                <Form.Label>Business Type</Form.Label>
                <Form.Check
                    type="radio"
                    label="Food"
                    name="businessType"
                    id="food" />
                <Form.Check
                    type="radio"
                    label="Services"
                    name="businessType"
                    id="services" />
                <Form.Check
                    type="radio"
                    label="Craft"
                    name="businessType"
                    id="craft" />
                <Form.Check
                    type="radio"
                    label="Art"
                    name="businessType"
                    id="art" />
                <Form.Check
                    type="radio"
                    label="Other"
                    name="businessType"
                    id="other" />
            </Form.Group>
            <Form.Group className="w-50">
                <Form.Label>Contact Information</Form.Label>
                <Form.Control
                    placeholder="Phone Number, Email, etc..." />
            </Form.Group>
            <Form.Group className="w-50">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    placeholder="zip code" />
            </Form.Group>
            <Form.Group className="w-50">
                <Form.Label>Biography</Form.Label>
                <Form.Control
                    placeholder="Tell us about yourself!"
                    as="textarea"
                    rows={3} />
            </Form.Group>
        </Form>
>>>>>>> 83c53a0fe5dee1e39388c6a8ee72ec2565713e00

    render() {
        return(
            <Form>
                <Form.Group className="w-50">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group className="w-50">
                    <Form.Label>Business Type</Form.Label>
                    <Form.Check
                        type="radio"
                        label="food"
                        name="businessType"
                        id="food" />
                    <Form.Check
                        type="radio"
                        label="services"
                        name="businessType"
                        id="services" />
                    <Form.Check
                        type="radio"
                        label="craft"
                        name="businessType"
                        id="craft" />
                    <Form.Check
                        type="radio"
                        label="art"
                        name="businessType"
                        id="art" />
                    <Form.Check
                        type="radio"
                        label="other"
                        name="businessType"
                        id="other" />
                </Form.Group>
                <Form.Group className="w-50">
                    <Form.Label>Contact Information</Form.Label>
                    <Form.Control
                        placeholder="Phone Number, Email, etc..." />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Form.Group className="w-50">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        placeholder="Tell us about yourself!"
                        as="textarea"
                        rows={3} />
                </Form.Group>
            </Form>
        )
    }
}
export default FormPage
