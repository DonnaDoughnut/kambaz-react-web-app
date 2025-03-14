import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { useState } from "react";

import AssignmentEditor from "./AssignmentCreate";

export default function AssignmentsControls( 
    { assignmentTitle, assignmentPoints, assignmentStartDate, assignmentEndDate, assignmentDueDate,
      setAssignmentTitle, setAssignmentPoints, setAssignmentStartDate, setAssignmentEndDate, setAssignmentDueDate, addAssignment }:
    { assignmentTitle: string; assignmentPoints: number; assignmentStartDate: string; assignmentEndDate: string; assignmentDueDate: string;
      setAssignmentTitle: (title: string) => void; setAssignmentPoints: (point: number) => void; 
      setAssignmentStartDate: (date: string) => void; setAssignmentEndDate: (date: string) => void; setAssignmentDueDate: (date: string) => void; addAssignment: () => void;
    }
) {
    const [ show, setShow ] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div id="wd-assignments-controls" className="text-nowrap">
            <InputGroup size="lg" className="me-3 float-start" style={{ maxWidth: "400px" }}>
                <InputGroup.Text style={{ backgroundColor: "white", borderRight: "none" }}> 
                    <IoSearch className="position-relative me-1" style={{ bottom: "1px" }} /></InputGroup.Text>
                <FormControl type="text" placeholder="Search..." />
            </InputGroup>
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn" 
                    onClick={handleShow}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button> 
            <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-add-group-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>

            { show && (
                <>
                <br /><br /><br /><hr />
                <AssignmentEditor setAssignmentTitle={setAssignmentTitle} setAssignmentPoints={setAssignmentPoints}
                                  setAssignmentStartDate={setAssignmentStartDate} setAssignmentEndDate={setAssignmentEndDate} setAssignmentDueDate={setAssignmentDueDate}
                                  assignmentTitle={assignmentTitle} assignmentPoints={assignmentPoints}
                                  assignmentStartDate={assignmentStartDate} assignmentEndDate={assignmentEndDate} assignmentDueDate={assignmentDueDate}
                                  addAssignment = {addAssignment} handleClose={handleClose} /> </>)}
        </div>
    );
}