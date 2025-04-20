import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Session from "./Account/Session";
import * as db from "./Database";

export default function Dashboard(
  { courses, setCourses, course, setCourse, 
    addCourse, deleteCourse, updateCourse } : {
      courses: any[]; setCourses: (courses: any[]) => void; course: any; setCourse: (course: any) => void;
      addCourse: (course: any) => void; deleteCourse: (courseId: string) => void;
      updateCourse: (courseId: string) => void; })
{
  console.log("db", db.courses);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [ show, setShow ] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Session>
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      
      {(currentUser.role === "FACULTY" || currentUser.role === "TA") ? (
        <div>
          <h5> New Course
              <button className="btn btn-primary float-end"
                      id="wd-add-new-course-click"
                      onClick={() => addCourse(course)} > Add </button>
              <button className="btn btn-warning float-end me-2"
                      onClick={() => updateCourse(course._id)} id="wd-update-course-click"> Update </button>
              <button className="btn btn-danger float-end me-2"
                      onClick={handleToggle}> Enrollments </button>
          </h5>  <br />
          <FormControl value={course.name} className="mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl as="textarea" value={course.description} rows={3}
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
            
          <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
          <div id="wd-dashboard-courses">
            <Row xs={1} md={5} className="g-4">
              {courses
                .map((course) => (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                  <Card>
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark">
                      <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                      <Card.Body className="card-body">
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> 
                          {course.name} </Card.Title>
                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                          {course.description} </Card.Text>
                      </Card.Body>
                    </Link>
                    
                    <div>
                      <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                        <button className="btn btn-primary float-start"> Go </button> </Link>
                      
                      <button className="btn btn-danger float-end"
                              onClick={() => deleteCourse(course._id)}> Delete </button>
                      <button className="btn btn-warning float-end me-2"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course)}}> Edit </button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row> </div> </div> 
          ) : (
            <div>
            <h5> New Course
              <button className="btn btn-danger float-end"
                      onClick={handleToggle}> Enrollments </button>
          </h5>  <br />
              { !show && (

              
              <div id="wd-dashboard-courses">
                
                <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <Row xs={1} md={5} className="g-4">
              {courses
                .map((course) => (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                  <Card>
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark">
                      <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                      <Card.Body className="card-body">
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> 
                          {course.name} </Card.Title>
                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                          {course.description} </Card.Text>
                      </Card.Body>


                        <button className="btn btn-primary float-start"> Go </button>

                      
                    </Link>
                  </Card>
                </Col> ))}
              </Row> </div>
            )}
            { show && (
              <div id="wd-dashboard-courses">
                
                <h2 id="wd-dashboard-published">Published Courses ({db.courses.length})</h2> <hr />
              <Row xs={1} md={5} className="g-4">
              {db.courses.map((course) => {
  const isEnrolled = courses.some((c) => c._id === course._id);
  return (
    <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
      <Card>
        <Link
          to={`/Kambaz/Courses/${course._id}/Home`}
          className="wd-dashboard-course-link text-decoration-none text-dark"
        >
          <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
          <Card.Body className="card-body">
            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
              {course.name}
            </Card.Title>
            <Card.Text
              className="wd-dashboard-course-description overflow-hidden"
              style={{ height: "100px" }}
            >
              {course.description}
            </Card.Text>
          </Card.Body>
        </Link>

        {isEnrolled ? (
          <button className="btn btn-danger float-end"
                  onClick={() => deleteCourse(course._id)}> Unenroll </button>
        ) : (
          console.log("course", course),
          <button className="btn btn-success float-end"
                  onClick={() => {addCourse(course)}}> Enroll </button>
        )}
      </Card>
    </Col>
  );
})}
              </Row> </div>
              )}
           </div>
          )}

 
    </div>
    </Session>
);}




{/* <Col className="wd-dashboard-course" style={{ width: "270px" }}>
<Card>
  <Link to="/Kambaz/Courses/1234/Home"
        className="wd-dashboard-course-link text-decoration-none text-dark">
   <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
   <Card.Body>
    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
      Full Stack software developer</Card.Text>
      <Button variant="primary">Go</Button>
   </Card.Body>
  </Link>
</Card>
</Col> */}
