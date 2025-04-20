import AssignmentsControls from "./AssignmentsControls";
import AssignmentControls from "./AssignmentControls";
import AssignmentAllControlButtons from "./AssignmentAllControlButtons";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiNotebookDuotone } from "react-icons/pi";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, addAssignment, deleteAssignment } from "./reducer";
import moment from "moment";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const [ assignmentTitle, setAssignmentTitle ] = useState("New Assignment");
  const [ assignmentPoints, setAssignmentPoints ] = useState(0);
  const [ assignmentStartDate, setAssignmentStartDate ] = useState(moment().format('MMM DD, YYYY, hh:mm A'));
  const [ assignmentEndDate, setAssignmentEndDate ] = useState(moment().add(2, 'week').format('MMM DD, YYYY, hh:mm A'));
  const [ assignmentDueDate, setAssignmentDueDate ] = useState(moment().add(2, 'week').format('MMM DD, YYYY, hh:mm A'));
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);


  const dispatch = useDispatch();
  
  // *********************
  const removeModule = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { title: assignmentTitle, points: assignmentPoints, start_date: assignmentStartDate, end_date: assignmentEndDate, due_date: assignmentDueDate, course: cid };
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignment));
  }
  const fetchModules = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchModules();
  }, []);
  // *********************

  return (
    <div id="wd-assignments">
      <AssignmentsControls  setAssignmentTitle={setAssignmentTitle} setAssignmentPoints={setAssignmentPoints}
                            setAssignmentStartDate={setAssignmentStartDate} setAssignmentEndDate={setAssignmentEndDate} setAssignmentDueDate={setAssignmentDueDate}
                            assignmentTitle={assignmentTitle} assignmentPoints={assignmentPoints}
                            assignmentStartDate={assignmentStartDate} assignmentEndDate={assignmentEndDate} assignmentDueDate={assignmentDueDate}
                            addAssignment = {createAssignmentForCourse} />
        <br /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-all-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" /> ASSIGNMENTS <AssignmentAllControlButtons />
          </div>
          {assignments
            .map((assignment: any) => (
              <ListGroup className="wd-assignments rounded-0">
                <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotebookDuotone className="me-2 fs-3 text-success" />
                  
                  <div className="ms-3">
                    <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none text-black">
                      
                      
                      <h3>{assignment._id} {assignment.title}</h3>  
                
                      </Link>
                    <h6 className="text-danger"> Multiple Modules
                    <span className="wd-fg-color-black"> | <strong>Not available until</strong> {assignment.start_date} at 12:00am | </span></h6>
                    <h6> <strong>Due</strong> {assignment.end_date} at 11:59pm | {assignment.points} pts </h6>
                  </div>
              
                  <div className="ms-auto"><AssignmentControls assignmentId={assignment._id} 
                                                               deleteAssignment = {removeModule}/> </div>
                </ListGroup.Item>
              </ListGroup>


            ))}
          
          
        </ListGroup.Item>
      </ListGroup>

      
    </div>
  );}


  // SECOND UPDATES:
  // <div>
  //   <AssignmentsControls /><br /><br /><br />
  //   <ListGroup className="rounded-0" id="wd-assignments">
  //     <ListGroup.Item className="wd-all-assignments p-0 mb-5 fs-5 border-gray">
  //       <div className="wd-title p-3 ps-2 bg-secondary">
  //         <BsGripVertical className="me-2 fs-3" /> 
  //         <IoMdArrowDropdown className="me-2 fs-3" /> ASSIGNMENTS <AssignmentAllControlButtons />
  //       </div>
  //       <ListGroup className="wd-assignments rounded-0">
  //         <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
  //           <BsGripVertical className="me-2 fs-3" />
  //           <PiNotebookDuotone className="me-2 fs-3 text-success" />
  //           <div className="ms-3">
  //             <Link to="/Kambaz/Courses/1234/Assignments/:aid" className="text-decoration-none text-black">
  //               <h3> A1 </h3>
  //             </Link>
  //             <h6 className="wd-fg-color-red"> Multiple Modules
  //             <span className="wd-fg-color-black"> | <strong>Not available until</strong> May 6 at 12:00am | </span></h6>
  //             <h6> <strong>Due</strong> May 13 at 11:59pm | 100 pts </h6>
  //           </div>
  //           <div className="ms-auto">
  //             <AssignmentControls /></div>
  //         </ListGroup.Item>
  //         <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
  //           <BsGripVertical className="me-2 fs-3" />
  //           <PiNotebookDuotone className="me-2 fs-3 text-success" />
  //           <div className="ms-3">
  //           <Link to="/Kambaz/Courses/1234/Assignments/:aid" className="text-decoration-none text-black">
  //               <h3> A2 </h3>
  //             </Link>
  //             <h6 className="wd-fg-color-red"> Multiple Modules
  //             <span className="wd-fg-color-black"> | <strong>Not available until</strong> May 13 at 12:00am | </span></h6>
  //             <h6> <strong>Due</strong> May 20 at 11:59pm | 100 pts </h6>
  //           </div>
  //           <div className="ms-auto">
  //             <AssignmentControls /></div>
  //         </ListGroup.Item>
  //         <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
  //           <BsGripVertical className="me-2 fs-3" />
  //           <PiNotebookDuotone className="me-2 fs-3 text-success" />
  //           <div className="ms-3">
  //           <Link to="/Kambaz/Courses/1234/Assignments/:aid" className="text-decoration-none text-black">
  //               <h3> A3 </h3>
  //             </Link>
  //             <h6 className="wd-fg-color-red"> Multiple Modules
  //             <span className="wd-fg-color-black"> | <strong>Not available until</strong> May 20 at 12:00am | </span></h6>
  //             <h6> <strong>Due</strong> May 27 at 11:59pm | 100 pts </h6>
  //           </div>
  //           <div className="ms-auto">
  //             <AssignmentControls /></div>
  //         </ListGroup.Item>
  //       </ListGroup>
  //     </ListGroup.Item>
  //   </ListGroup>
  // </div>


      // INITIAL UPDATES:
      // <div id="wd-assignments">
      //   <input placeholder="Search for Assignments"
      //          id="wd-search-assignment" />
      //   <button id="wd-add-assignment-group">+ Group</button>
      //   <button id="wd-add-assignment">+ Assignment</button>
      //   <h3 id="wd-assignments-title">
      //     ASSIGNMENTS 40% of Total <button>+</button> </h3>
      //   <ul id="wd-assignment-list">
      //     <li className="wd-assignment-list-item">
      //       <a href="#/Kambaz/Courses/1234/Assignments/123"
      //          className="wd-assignment-link" >
      //         A1 - ENV + HTML
      //       </a> 
      //       <br/>
      //       <span>
      //           Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |<br></br>
      //           <strong>Due</strong> May 13 at 11:59pm | 100 pts
      //       </span></li>
      //     <li className="wd-assignment-list-item">
      //       {/* Complete On Your Own */}
      //       <a href="#/Kambaz/Courses/1234/Assignments/123"
      //          className="wd-assignment-link" >
      //         A2 - CSS + BOOTSTRAP
      //       </a> 
      //       <br/>
      //       <span>
      //           Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |<br></br>
      //           <strong>Due</strong> May 20 at 11:59pm | 100 pts
      //       </span>
      //       </li>
      //     <li className="wd-assignment-list-item">
      //     <a href="#/Kambaz/Courses/1234/Assignments/123"
      //          className="wd-assignment-link" >
      //         A3 - JAVASCRIPT + REACT
      //       </a>  
      //       <br/>
      //       <span>
      //           Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am<br></br>
      //           <strong>Due</strong> May 20 at 11:59pm | 100 pts
      //       </span>
      //     </li>
      //   </ul>
      // </div>
  