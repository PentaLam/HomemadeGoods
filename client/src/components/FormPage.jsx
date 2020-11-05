import { Form } from 'react-bootstrap'

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

    );
}
export default FormPage
