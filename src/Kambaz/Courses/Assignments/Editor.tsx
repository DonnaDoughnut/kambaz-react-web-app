import { Form, FormGroup, FormLabel, FormControl, Row, Col, FormSelect, FormCheck, Badge, InputGroup, Button } from "react-bootstrap";
import { MdCalendarMonth } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "../index.css"; 
import * as db from "../../Database";
import { useParams } from "react-router";
import Datetime from "react-datetime";
import { useState } from "react";
import moment, { Moment } from "moment";
import 'react-datetime/css/react-datetime.css';
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const assignments = db.assignments;
  const { cid, aid } = useParams();
  const available_from = assignments
    .filter((assignment: any) => assignment._id === aid).map((assignment: any) => assignment.start_date);
  const until = assignments
    .filter((assignment: any) => assignment._id === aid).map((assignment: any) => assignment.end_date);
  const [datetimeFrom, setSelectedAvailableDate] = useState<Moment | string>(available_from[0]);
  const handleChange = (value: string | Moment) => { 
    const date = typeof value === 'string' ? moment(value) : value;
    setSelectedAvailableDate(date) };
const [datetimeTo, setSelectedDueDate] = useState<Moment | string>(until[0]);
const handleChangeDue = (value: string | Moment) => { 
      const date = typeof value === 'string' ? moment(value) : value;
      setSelectedDueDate(date) };
  
  return (
    <div id="wd-assignment-editor">
      { assignments
          .filter((assignment: any) => assignment._id === aid)
          .map((assignment: any) => (
            <Form>
              <FormGroup className="mb-3" controlId="wd-name">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl type="text" placeholder={`${assignment._id} ${assignment.title}`} /></FormGroup>
              <FormGroup className="mb-3" controlId="wd-textarea">
                <FormControl as="textarea" rows={7} placeholder="The assignment is available online" /></FormGroup>
              <FormGroup as={Row} className="mb-3" controlId="wd-points">
                <FormLabel column sm={3}>Points</FormLabel>
                <Col sm={9}>
                  <FormControl type="number" value={assignment.points} /></Col></FormGroup>
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
                          <Datetime value={datetimeFrom} onChange={handleChange} 
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
                            <Datetime value={datetimeFrom} onChange={handleChange} 
                                dateFormat="MMM DD, YYYY" timeFormat="hh:mm A" inputProps={{ className: 'form-control' }} /></Col>
                          <Col sm={2} className="d-flex justify-content-center align-items-center bg-light border rounded">
                            <MdCalendarMonth /></Col></InputGroup></Col>
                      <Col sm={6}>
                        <InputGroup className="mb-3">
                          <Col sm={10}>
                            <Datetime value={datetimeTo} onChange={handleChangeDue} 
                                dateFormat="MMM DD, YYYY" timeFormat="hh:mm A" inputProps={{ className: 'form-control' }} /></Col>
                          <Col sm={2} className="d-flex justify-content-center align-items-center bg-light border rounded">
                            <MdCalendarMonth /></Col></InputGroup></Col>
                    </FormGroup>
                  </div>
                </Col>    
              </FormGroup><hr />
              <FormGroup  className="mb-3">
                <Button type="submit" className="mb-3 btn-danger float-end">
                  <Link to={`/Kambaz/Courses/${cid}/Assignments`} style={{ color: 'black', textDecoration: 'none' }}> Submit </Link></Button>
                <Button type="reset" className="mb-3 btn-secondary float-end me-1"> 
                  <Link to={`/Kambaz/Courses/${cid}/Assignments`} style={{ color: 'black', textDecoration: 'none' }}> Cancel </Link></Button>
              </FormGroup>
            </Form>
          )) }
    </div>
  );}

      // <div id="wd-assignments-editor">
      //   <label htmlFor="wd-name">Assignment Name</label><br /><br />
      //   <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      //   <textarea id="wd-description">
      //     The assignment is available online Submit a link to the landing page of
      //     your Web application running on Netlify. The landing page should 
      //     include the following: Your full name and section Links to each of the
      //     lab assignments Link to the Kanbas application Liks to all relevant
      //     source code repositories The Kanbas application should include a link 
      //     to navigate back to the landing page.
      //   </textarea>
      //   <br /><br />
      //   <table>
      //     <tr>
      //       <td align="right" valign="top">
      //         <label htmlFor="wd-points">Points</label>
      //       </td>
      //       <td>
      //         <input id="wd-points" value={100} />
      //         <br /><br />
      //       </td>
    
      //     </tr>
      //     {/* Complete on your own */}
      //     <tr>
      //       <td align="right" valign="top">
      //           <label htmlFor="wd-group">Assignment Group</label>
      //       </td>
      //       <td>
      //           <select>
      //               <option value="">ASSIGNMENTS</option>
      //               <option value="">QUIZ</option>
      //               <option value="">EXAM</option>
      //           </select>
      //           <br /><br />
      //           </td>
      //       </tr>

      //       <tr>
      //       <td align="right" valign="top">
      //           <label htmlFor="wd-display-grade-as">Display Grade as</label>
      //       </td>
      //       <td>
      //           <select>
      //               <option value="">Percentage</option>
      //               <option value="">Numbers</option>
      //               <option value="">Letters</option>
      //           </select>
      //           <br /><br />
      //           </td>
      //       </tr>

      //       <tr>
      //       <td align="right" valign="top">
      //           <label htmlFor="wd-submission-type">Submission Type</label>
      //       </td>
      //       <td>
      //           <select>
      //               <option value="">Online</option>
      //               <option value="">In Person</option>
      //           </select>
      //           <br /><br />

      //           <span>Online Entry Options</span><br/>
      //           <input type="checkbox" id="type1" name="type1" value="k" />
      //           <label htmlFor="wd-text-entry">Text Entry</label> <br/>
      //           <input type="checkbox" id="type2" name="type2" value="k" />
      //           <label htmlFor="wd-website-url">Website URL</label> <br/>
      //           <input type="checkbox" id="type3" name="type3" value="k" />
      //           <label htmlFor="wd-media-recordings">Media Recordings</label> <br/>
      //           <input type="checkbox" id="type4" name="type4" value="k" />
      //           <label htmlFor="wd-student-annotation">Student Annotation</label> <br/>
      //           <input type="checkbox" id="type5" name="type5" value="k" />
      //           <label htmlFor="wd-file-upload">File Uploads</label> <br/>
      //           <br /><br />
      //           </td>
      //       </tr>

      //       <tr>
      //       <td align="right" valign="top">
      //           <label htmlFor="wd-assign-to">Assign</label>
      //       </td>
      //       <table>
      //           <tr>
      //               <label htmlFor="wd-assign-to">Assign to</label><br />
      //               <input id="wd-assign-to" value={"Everyone"} />
      //               <br/><br/>
      //           </tr>
            
      //           <tr>
      //               <label htmlFor="wd-due-date">Due</label><br />
      //               <input type="date" id="wd-due-date" name="duedate" />
      //               <br /><br />
      //           </tr>
            
      //           <tr>
      //               <td >
      //                   <label htmlFor="wd-available-from">Available from</label><br />
      //                   <input type="date" id="wd-availabled-from" name="availabledate" />
                        
      //               </td>

      //               <td>
      //                   <label htmlFor="wd-available-until">Until</label><br />
      //                   <input type="date" id="wd-availabled-until" name="availabledate" />

      //               </td>
      //           </tr>
      //       </table>
      //       </tr>
      //   </table>

      //   <hr></hr>

      //   <table align="right">
      //     <tr>
      //       <td align="right" valign="top">
      //         <label htmlFor="wd-name"></label>
      //         <button>Cancel</button>
      //         <button>Save</button>
      //       </td>
      //     </tr>
      //   </table>

      // </div>
  