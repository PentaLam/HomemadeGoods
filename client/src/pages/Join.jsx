import { Container, Row, Col, Form } from 'react-bootstrap'

const Join  = () => {
    return (
<Container>
  <Form>
      <Form.Group className="w-50">
            <Form.Label>Business Name</Form.Label>
            <Form.Control/>
        </Form.Group>
        <Form.Group>
          <Row>
            <Form.Label>Business Type</Form.Label>
          </Row>
          <Row>
            <Form.Check
            type="radio"
            label="food"
            name="businessType"
            id="food"/>
          </Row>
          <Row>
            <Form.Check
            type="radio"
            label="services"
            name="businessType"
            id="services"/>
          </Row>
          <Row>
            <Form.Check
            type="radio"
            label="craft"
            name="businessType"
            id="craft"/>
          </Row>
          <Row>
            <Form.Check
            type="radio"
            label="art"
            name="businessType"
            id="art"/>
          </Row>
          <Row>
            <Form.Check
            type="radio"
            label="other"
            name="businessType"
            id="other"/>
          </Row>
      </Form.Group>
  </Form>
</Container>
    );
}

export default Join;
