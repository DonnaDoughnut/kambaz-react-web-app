import { Form, Row, Col, FormSelect, Button } from "react-bootstrap";
import "../index.css";

export default function GradesControls() {
    return (
        <div>
            <Form.Group as={Row} className="mb-3">
                <Col sm={4}>
                    <Form.Label as="legend" className="custom-title">Course</Form.Label>
                    <FormSelect className="mb-3">
                        <option selected>CS5610 Web Development</option>
                        <option value="option1">CS1000 Introduction to Computer Science</option></FormSelect>  
                </Col>
                <Col sm={4}>
                    <Form.Label as="legend" className="custom-title">Arrange By</Form.Label>
                    <FormSelect className="mb-3">
                        <option selected>Due Date</option>
                        <option value="option1">Assignment Group</option>
                        <option value="option2">Module</option>
                        <option value="option3">Name</option>
                    </FormSelect>
                </Col>
                <Col sm={2}>
                    <Form.Label as="legend" className="custom-title"><br /></Form.Label>
                    <Button variant="danger" className="mb-3">Apply</Button></Col>
            </Form.Group>
        </div>
    );
}