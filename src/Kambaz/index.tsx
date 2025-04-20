import "./styles.css";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import Session from "./Account/Session";

// import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
export default function Kambaz() {
  const [ courses, setCourses ] = useState<any[]>([]);  // kinda confused here.
  // const [ course, setCourse ] = useState<any>({});
  const { currentUser } = useSelector((state: any) => state.accountReducer); 
  const fetchCourses = async () => {
    console.log("currentUser", currentUser);
    try {
      const courses = await userClient.findMyCourses();
      console.log("courses:", courses);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);
  const [ course, setCourse ] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs/jpg", description: "New Description"
  });

  // *************************
  const addNewCourse = async (course: any) => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.udpateCourse(course);
    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    }))
  };
  // *************************


  // const addNewCourse = () => {
  //   const newCourse = { ...course, _id: uuidv4() };
  //   setCourses([ ...courses, newCourse ]); };
  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId)); };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     }))};

  return ( 
    <Session>
    <div id="wd-kambaz">

            <KambazNavigation />

            <div className="wd-main-content-offset p-3">
              <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<ProtectedRoute>
                  <Dashboard 
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse} /></ProtectedRoute>} />
                <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>

    </div>
    </Session>
);}

  