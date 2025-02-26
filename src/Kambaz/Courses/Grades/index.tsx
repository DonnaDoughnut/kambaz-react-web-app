import { TiPrinter } from "react-icons/ti";
import { BsCheck2Square } from "react-icons/bs";
import { Table, Button } from "react-bootstrap";
import GradesControls from "./GradesControls";
import "../index.css";

export default function Grades() {
    return (
        <div>
            <div>
                <Button variant="secondary" className="float-end"><TiPrinter className="me-2"/>Print Grades</Button>
                <h2>Grades for Alice Wonderland</h2>
            </div><br /><br />
            <GradesControls /><br />
            <Table>
                <thead>
                    <tr className="table-light"><th>Name</th><th>Due</th><th>Submitted</th><th>Status</th><th>Score</th><th></th></tr>
                </thead>
                <tbody className="">
                    <tr className="table-light">
                        <td className="text-danger align-middle">A1<br /><span className="text-dark">ASSIGNMENTS</span></td>
                        <td className="align-middle">Jan 22 by 11:59pm</td>
                        <td className="align-middle">Jan 22 at<br />11:58pm</td>
                        <td className="align-middle">
                            <div className="text-success p-1 wd-status-rounded-corners-all-around wd-status-border-fat wd-status-border-thin 
                wd-status-border-green wd-status-border-solid wd-status-padding-fat" style={{ display: 'inline-block'}}>submitted</div></td>
                        <td className="align-middle">94.49%</td>
                        <td className="align-middle"><BsCheck2Square /></td>
                    </tr>
                    <tr className="table-light">
                        <td className="text-danger align-middle">Q1<br /><span className="text-dark">QUIZZES</span></td>
                        <td className="align-middle">Jan 27 by 11:59pm</td>
                        <td className="align-middle">Jan 25 at<br />9:54am</td>
                        <td className="align-middle">
                            <div className="text-success p-1 wd-status-rounded-corners-all-around wd-status-border-fat wd-status-border-thin 
                wd-status-border-green wd-status-border-solid wd-status-padding-fat" style={{ display: 'inline-block'}}>submitted</div></td>
                        <td className="align-middle">29/29</td>
                        <td className="align-middle"><BsCheck2Square /></td>
                    </tr>
                    <tr className="table-light">
                        <td className="text-danger align-middle">Q2<br /><span className="text-dark">QUIZZES</span></td>
                        <td className="align-middle">Feb 3 by 11:59pm</td>
                        <td className="align-middle">Feb 3 at<br />6:22pm</td>
                        <td className="align-middle">
                            <div className="text-success p-1 wd-status-rounded-corners-all-around wd-status-border-fat wd-status-border-thin 
                wd-status-border-green wd-status-border-solid wd-status-padding-fat" style={{ display: 'inline-block'}}>submitted</div></td>
                        <td className="align-middle">19.25/23</td>
                        <td className="align-middle"><BsCheck2Square /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}