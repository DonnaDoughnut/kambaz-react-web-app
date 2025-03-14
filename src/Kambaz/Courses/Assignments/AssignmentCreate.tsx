import { Form, FormGroup, FormLabel, FormControl, Row, Col, FormSelect, FormCheck, Badge, InputGroup, Button } from "react-bootstrap";
import { MdCalendarMonth } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "../index.css"; 
// import { useNavigate } from "react-router-dom";
import Datetime from "react-datetime";
import moment, { Moment } from "moment";
import 'react-datetime/css/react-datetime.css';

export default function AssignmentCreate(
  { assignmentTitle, assignmentPoints, assignmentStartDate, assignmentEndDate, assignmentDueDate,
    setAssignmentTitle, setAssignmentPoints, setAssignmentStartDate, setAssignmentEndDate, setAssignmentDueDate, addAssignment, handleClose }:
  { assignmentTitle: string; assignmentPoints: number; assignmentStartDate: string; assignmentEndDate: string; assignmentDueDate: string;
    setAssignmentTitle: (title: string) => void; setAssignmentPoints: (point: number) => void; 
    setAssignmentStartDate: (date: string) => void; setAssignmentEndDate: (date: string) => void; setAssignmentDueDate: (date: string) => void; addAssignment: () => void;
    handleClose: () => void;
  }
) {
  // const navigate = useNavigate();

  // const assignments = db.assignments;;
  // const { cid, aid } = useParams();
  // const assignment = assignments.find((assignment: any) => assignment._id === aid);

  // const [datetimeFrom] = useState<Moment | string>(assignment ? assignment.start_date : assignmentStartDate);
  // const [datetimeTo] = useState<Moment | string>(assignment ? assignment.end_date : assignmentEndDate);

  const handleChange = (value: string | Moment) => { 
    const date = moment.isMoment(value) ? value.format('MMM DD, YYYY, hh:mm A') : value;
    setAssignmentStartDate(date) };

    const handleChangeDueDate = (value: string | Moment) => { 
      const date = moment.isMoment(value) ? value.format('MMM DD, YYYY, hh:mm A') : value;
      setAssignmentDueDate(date) };

  const handleChangeEndDate = (value: string | Moment) => { 
    const date = moment.isMoment(value) ? value.format('MMM DD, YYYY, hh:mm A') : value;
    setAssignmentEndDate(date) };

  return (
    <div id="wd-assignment-editor">
      
            <Form>
              <FormGroup className="mb-3" controlId="wd-name">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl type="text" placeholder={`${assignmentTitle}`}
                             value={assignmentTitle} onChange={(e) => { setAssignmentTitle(e.target.value) }} /></FormGroup>
              <FormGroup className="mb-3" controlId="wd-textarea">
                <FormControl as="textarea" rows={7} placeholder="The assignment is available online" /></FormGroup>
              <FormGroup as={Row} className="mb-3" controlId="wd-points">
                <FormLabel column sm={3}>Points</FormLabel>
                <Col sm={9}>
                  <FormControl type="number" value={Number(assignmentPoints)}
                               onChange={(e) => { setAssignmentPoints(Number(e.target.value)) }} /></Col></FormGroup>
              <FormGroup as={Row} className="mb-3" controlId="wd-groups">
                <FormLabel column sm={3}>Assignment Group</FormLabel>
                <Col sm={9}>
                  <FormSelect>
                    <option selected>ASSIGNMENTS</option>
                    <option value="option1">QUIZ</option>
                    <option value="option2">EXAM</option></FormSelect></Col></FormGroup>
              <FormGroup as={Row} className="mb-3" controlId="wd-grade-type">
                <FormLabel column sm={3}>Display Grade as</FormLabel>
                <Col sm={9}>
                  <FormSelect>
                    <option selected>Percentage</option>
                    <option value="option1">Numbers</option>
                    <option value="option2">Letters</option></FormSelect></Col></FormGroup>
              <FormGroup as={Row} className="mb-3" controlId="wd-submission-type">
                <FormLabel column sm={3}>Submission Type</FormLabel>
                <Col sm={9}>
                  <div className="border p-3 rounded">
                    <FormSelect className="mb-3">
                      <option selected>Online</option>
                      <option value="option1">In Person</option></FormSelect>
                    <FormLabel as="legend" classNmae="mb-3">Online Entry Options</FormLabel>
                    <FormCheck type="checkbox" className="mb-3" label="Text Entry" name="formOnlineEntryOptions" />
                    <FormCheck type="checkbox" className="mb-3" label="Website URL" name="formOnlineEntryOptions" />
                    <FormCheck type="checkbox" className="mb-3" label="Media Recordings" name="formOnlineEntryOptions" />
                    <FormCheck type="checkbox" className="mb-3" label="Student Annotation" name="formOnlineEntryOptions" />
                    <FormCheck type="checkbox" className="mb-3" label="File Uploads" name="formOnlineEntryOptions" />
                  </div></Col></FormGroup>
              <FormGroup as={Row} className="mb-3" controlId="wd-assign">
                <FormLabel column sm={3}>Assign</FormLabel>
                <Col sm={9}>
                  <div className="border p-3 rounded mb-3">
                    <FormLabel as="legend" className="custom-title">Assign to</FormLabel>
                    <div className="border p-3 rounded mb-3">
                      <Badge bg="light" text="dark">Everyone<RxCross2 className="ms-2 float-end" /></Badge>
                    </div>
                      <FormLabel as="legend" className="custom-title"> Due </FormLabel>
                      <InputGroup className="mb-3">
                        <Col sm={11}>
                          <Datetime value={assignmentDueDate} onChange={(e) => handleChangeDueDate(e)} 
                              dateFormat="MMM DD, YYYY" timeFormat="hh:mm A" inputProps={{ className: 'form-control' }} /></Col>
                        <Col sm={1} className="d-flex justify-content-center align-items-center bg-light border rounded"> 
                          <MdCalendarMonth /></Col>
                      </InputGroup>
                      
                    <FormGroup as={Row}>
                      <FormLabel column sm={6} as="legend" className="custom-title"> Available from </FormLabel>
                      <FormLabel column sm={6} as="legend" className="custom-title"> Until </FormLabel>
                      <Col sm={6}>
                        <InputGroup className="mb-3">
                          <Col sm={10}>
                            <Datetime value={assignmentStartDate} onChange={(e) => handleChange(e)} 
                                dateFormat="MMM DD, YYYY" timeFormat="hh:mm A" inputProps={{ className: 'form-control' }} /></Col>
                          <Col sm={2} className="d-flex justify-content-center align-items-center bg-light border rounded">
                            <MdCalendarMonth /></Col></InputGroup></Col>
                      <Col sm={6}>
                        <InputGroup className="mb-3">
                          <Col sm={10}>
                            <Datetime value={assignmentEndDate} onChange={(e) => handleChangeEndDate(e)} 
                                dateFormat="MMM DD, YYYY" timeFormat="hh:mm A" inputProps={{ className: 'form-control' }} /></Col>
                          <Col sm={2} className="d-flex justify-content-center align-items-center bg-light border rounded">
                            <MdCalendarMonth /></Col></InputGroup></Col>
                    </FormGroup>
                  </div>
                </Col>    
              </FormGroup><hr />
              <FormGroup  className="mb-3">
                <Button className="mb-3 btn-danger float-end" onClick={() => {addAssignment(); handleClose()}}>
                   Submit </Button>
                <Button type="reset" className="mb-3 btn-secondary float-end me-1" onClick={() => {handleClose()}}> 
                   Cancel </Button>
              </FormGroup>
            </Form>
          
    </div>
  );}