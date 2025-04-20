import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 100, name: "NodeJS Module",
        description: "Create a module object", course: "Web Development",
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    return (
        <div id="wd-working-with-objects">
            <h3> Working With Objects </h3>
            <h4> Modifying Properties </h4>
            <a id="wd-update-assignment-title" className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                    Update Assignment's Title </a>
            <FormControl className="w-75" id="wd-assignment-title" defaultValue={assignment.title}
                         onChange={(e) => setAssignment({...assignment, title: e.target.value})} /> <hr />
            <a id="wd-update-assignment-score" className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                    Update Assignment's Score </a>
            <FormControl className="w-75" id="wd-assignment-score" defaultValue={assignment.score} type="number"
                         onChange={(e) => setAssignment({...assignment, score: Number(e.target.value)})} /> <hr />
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-4">
                    <Form.Label className="fw-bold"> Is Assignment Completed? </Form.Label> 
                    <Form.Check id="wd-assignment-completed" checked={assignment.completed} type="checkbox"
                                onChange={(e) => setAssignment({...assignment, completed: e.target.checked})} />
                    <Form.Label htmlFor="wd-assignment-completed"> {assignment.completed ? "Completed" : "Incomplete"} </Form.Label> 
                </div>
                <a id="wd-update-assignment-completed" className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                        Update Assignment's Completion </a>
            </div> <hr />

            <a id="wd-update-module-name" className="btn btn-warning float-end"
               href={`${MODULE_API_URL}/name/${module.name}`}>
                    Update Module's Name </a>
            <FormControl className="w-75" id="wd-module-name" defaultValue={module.name}
                         onChange={(e) => setModule({...module, name: e.target.value})} /> <hr />
            <div className="d-flex justify-content-between align-items-center">
                <FormControl className="w-75" id="wd-module-description" defaultValue={module.description}
                             as="textarea" rows={3}
                             onChange={(e) => setModule({...module, description: e.target.value})} /> 
                <a id="wd-update-module-description" className="btn btn-warning"
                   href={`${MODULE_API_URL}/name/${module.description}`}>
                        Update Module's Description </a>
            </div> <hr />


            <h4> Retrieving Objects </h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary me-2"
               href={`${REMOTE_SERVER}/lab5/assignment`}>
                    Get Assignment </a>
            <a id="wd-retrieve-modules" className="btn btn-warning"
               href={`${REMOTE_SERVER}/lab5/module`}>
                    Get Module </a> <hr />


            <h4> Retrieving Properties </h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2"
               href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                    Get Assignment's Title </a>
            <a id="wd-retrieve-module-name" className="btn btn-warning"
               href={`${REMOTE_SERVER}/lab5/module/name`}>
                    Get Module's Name </a> <hr />
        </div>
    )
}