import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Home from "./Home";
import Assignments from "./Assignments";
import Quizzes from "./Quizzes";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { updateAssignment } from "../Courses/Assignments/reducer";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { courses } from "../Database";
// import moment, { Moment } from "moment";
// import { addCourse, deleteCourse, updateCourse } from "../Courses/reducer"; 

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [ assignment, setAssignment ] = useState<any>({
    _id: "A101", title: "Propulsion Assignment", course: "RS101", points: 100, 
    start_date: "Jan 01, 2024, 12:00 AM", end_date: "Jan 08, 2024, 11:59 PM", due_date: "Jan 08, 2024, 11:59 PM"
  });

  const dispatch = useDispatch();
  // const updateAssignment = () => {
  //   setAssignments(
  //     assignments.map((a) => {
  //       if (a._id === assignment._id) {
  //         return assignment;
  //       } else {
  //         return a;
  //       }
  //     })
  //   )
  // }

    return (
      <div id="wd-courses">
        <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />
            {course && course.name} &gt; {pathname.split("/")[4]} </h2> <hr />
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<Piazza />} />
              <Route path="Zoom" element={<Zoom />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={
                <AssignmentEditor
                  assignments = {assignments}
                  assignment = {assignment}
                  setAssignment = {setAssignment}
                  updateAssignment = {() => dispatch(updateAssignment(assignment))}  />} /> 
              <Route path="Quizzes" element={<Quizzes />} />
              <Route path="Grades" element={<Grades />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
          </div>
        </div>


      </div>
  );}
  