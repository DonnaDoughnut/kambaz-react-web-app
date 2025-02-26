import { ListGroup } from "react-bootstrap";
import { RxRocket } from "react-icons/rx";
import { FormControl, Row, Col } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentAllControlButtons from "../Assignments/AssignmentAllControlButtons";
import AssignmentControls from "../Assignments/AssignmentControls";

export default function Quizzes() {
    return (
        <div>
            <Row>
                <Col sm="4">
                    <FormControl type="text" placeholder="Search for Quiz" /></Col>
            </Row><br />
            <ListGroup className="rounded-0" id="wd-quizzes">
                <ListGroup.Item className="wd-all-quizzes p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <IoMdArrowDropdown className="me-2 fs-3" /> Assignment Quizzes <AssignmentAllControlButtons />
                    </div>
                    <ListGroup className="wd-assignments rounded-0">
                        <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <RxRocket className="me-2 fs-3 text-success" />
                            <div className="ms-3">
                            <h3> Q1 </h3>
                            <h6> <strong>Closed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due</strong> Jan 27 at 11:59pm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29 pts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 Questions</h6>
                            </div>
                            <div className="ms-auto">
                            <AssignmentControls /></div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <RxRocket className="me-2 fs-3 text-success" />
                            <div className="ms-3">
                            <h3> Q2 </h3>
                            <h6> <strong>Closed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due</strong> Feb 3 at 11:59pm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23 pts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6 Questions</h6>
                            </div>
                            <div className="ms-auto">
                            <AssignmentControls /></div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <RxRocket className="me-2 fs-3 text-success" />
                            <div className="ms-3">
                            <h3> Q3 </h3>
                            <h6> <strong>Closed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due</strong> Feb 10 at 11:59pm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32 pts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 Questions</h6>
                            </div>
                            <div className="ms-auto">
                            <AssignmentControls /></div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            
        </div>
    )
}

{/* <ul id="wd-quizzes">
    <li className="wd-assignment-quizzes">
        <div className="wd-title">Quiz 1</div>
        <ul id="wd-info">
            <li className="wd-status">Closed</li>
            <li className="wd-due-dates">Due Jan 27 at 11:59pm</li>
            <li className="wd-points">29 pts</li>
            <li className="wd-#-of-questions">11 Questions</li>
        </ul>
    </li>
    <li className="wd-assignment-quizzes">
        <div className="wd-title">Quiz 2</div>
        <ul id="wd-info">
            <li className="wd-status">Closed</li>
            <li className="wd-due-dates">Due Feb 3 at 11:59pm</li>
            <li className="wd-points">23 pts</li>
            <li className="wd-#-of-questions">6 Questions</li>
        </ul>
    </li>
</ul> */}