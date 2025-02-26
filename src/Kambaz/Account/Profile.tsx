import { Link } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import { MdCalendarMonth } from "react-icons/md";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username" placeholder="alice" className="mb-2" />
      <Form.Control id="wd-password" placeholder="password123" type="password" className="mb-2" />
      <Form.Control id="wd-firstname" placeholder="Alice" className="mb-2" />
      <Form.Control id="wd-lastname" placeholder="Wonderland" className="mb-2" />
      <InputGroup  className="mb-2">
        <Form.Control id="wd-dob" type="date" />
        <InputGroup.Text><MdCalendarMonth className="float-end"/></InputGroup.Text>
      </InputGroup>
      <Form.Control id="wd-email" placeholder="alice@wonderland.com" type="email" className="mb-2" />
      <Form.Select id="wd-role" className="mb-2">
        <option selected>User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Link id="wd-signout-link" to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2"> 
        Sign out </Link>
    </div>
);}


      // <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
      // <input defaultValue="123"   placeholder="password" type="password"
      //        className="wd-password" /><br/>
      // <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
      // <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
      // <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      // <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      // <select defaultValue="FACULTY" id="wd-role">
      //   <option value="USER">User</option>       <option value="ADMIN">Admin</option>
      //   <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      // </select><br/>
      // <Link to="/Kambaz/Account/Signin" >Sign out</Link>