import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";
import * as client from "./client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Signup() {
  const [ user, setUser ] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };
  return (
    <div id="wd-signup-screen">
      <h1> Signup </h1>
      <FormControl value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
                   className="wd-username b-2" placeholder="username" />
      <FormControl value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
                   className="wd-passwork mb-2" placeholder="password" type="password" />
      <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100"> Sign Up </button> <br />
      <Link to="/Kambaz/Account/Signin" className="wd-signin-link"> Sign in </Link> 
    </div>
);}

// Last Change:
// <Form.Control id="wd-username" placeholder="username" className="mb-2" />
// <Form.Control id="wd-password" placeholder="password" type="password" className="mb-2" />
// <Link id="wd-signup-btn" to="/Kambaz/Account/Profile" className="btn btn-primary w-100 mb-2">
//   Sign up </Link>
// <Link id="wd-signin-link" to="/Kambaz/Account/Signin"> Sign in </Link>

// First Change:
      // <input placeholder="username" className="wd-username" /><br/>
      // <input placeholder="password" type="password" className="wd-password" /><br/>
      // <input placeholder="verify password" type="password" className="wd-password-verify" /><br/>
      // <Link  to="/Kambaz/Account/Profile" > Sign up </Link><br />
      // <Link  to="/Kambaz/Account/Signin" >Sign in</Link>