import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard(
  { courses, enrollments, course, setCourse, 
    addCourse, deleteCourse, updateCourse, enrollCourse, unenrollCourse } : {
      courses: any[]; enrollments: any[], course: any; setCourse: (course: any) => void;
      addCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: (course: any) => void;
      enrollCourse: (enrollment: any) => void;
      unenrollCourse: (enrollment: any) => void; })
{

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [ enrollment, setEnrollment ] = useState<any>({
    _id: uuidv4(),
    user: currentUser._id,
    course: course._id,
  });
  const [ show, setShow ] = useState(false);
  const handleToggle = () => setShow(!show);
  const [ isEnrolled ] = useState(enrollments.some((enrollment) =>
    enrollment.user === currentUser._id && enrollment.course === course._id))
  useEffect(() => {
    enrollments.some((enrollment) =>
      enrollment.user === currentUser._id && enrollment.course === course._id)
,    [enrollments, currentUser, courses, course, isEnrolled]});

  const handleUnenroll = (event: any) => {
    event.preventDefault();
    setEnrollment(enrollments.find(
      (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id));
    unenrollCourse(enrollment);
    
  }
  const handleEnroll = (event: any) => {
    event.preventDefault();
    enrollCourse(enrollment);
    // setIsEnrolled(true);
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5> New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => addCourse()} > Add </button>
          <button className="btn btn-warning float-end me-2"
                  onClick={() => updateCourse(course)} id="wd-update-course-click"> Update </button>
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
          { show && courses
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

                    { enrollments.some((enrollment) =>
    enrollment.user === currentUser._id && enrollment.course === course._id) ?
                      
                    <Button onClick={handleUnenroll} 
                            className="btn btn-danger float-end" id="wd-unenroll-course-click">
                      Unenroll </Button> :
                    
                    <Button onClick={handleEnroll}
                            className="btn btn-success float-end" id="wd-unenroll-course-click">
                      Enroll </Button> } :

  
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        
          {!show && courses
            .filter((course) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id ))
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
                    <Button variant="primary"> Go </Button>
                    <Button onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course);
                              }} className="btn btn-danger float-end"
                              id="wd-delete-course-click">
                      Delete </Button>
                    <Button id="wd-edit-course-click"
                            onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end">
                      Edit </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>  
    </div>
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
