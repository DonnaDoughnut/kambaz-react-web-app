import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { InputGroup, Button, FormControl } from "react-bootstrap";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap">
            <InputGroup size="lg" className="me-3 float-start" style={{ maxWidth: "400px" }}>
                <InputGroup.Text style={{ backgroundColor: "white", borderRight: "none" }}> 
                    <IoSearch className="position-relative me-1" style={{ bottom: "1px" }} /></InputGroup.Text>
                <FormControl type="text" placeholder="Search..." />
            </InputGroup>
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-add-group-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
        </div>
    );
}