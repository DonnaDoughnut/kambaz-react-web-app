import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";


export default function KambazNavigation() {
  // const [activeItem, setActiveItem] = useState<string>("");
  // const handleClick = (item: string) => {
  //   setActiveItem(item);
  // };
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kambaz/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kambaz/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];

  return (

    <ListGroup id="wd-kambaz-navigation" style={{ width: 110  }}
         className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
          <ListGroup.Item id="wd-neu-link" target="_blank" href="http://www.northeastern.edu/"
                    action className="bg-black border-0 text-center">
            <img src="/images/NEU.png" width="75px" /></ListGroup.Item>
          <ListGroup.Item as={Link} to="/Kambaz/Account" className={`text-center border-0 bg-black
                    ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
            <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
            <br />
            Account
          </ListGroup.Item>
          { links.map(link => {
            return (
                <ListGroup.Item as={Link} to={link.path} className={`text-center border-0 bg-black
                  ${pathname.includes(link.label) ? "bg-white text-danger" : "bg-black text-white"}`}>
          <link.icon className={`fs-1 ${pathname.includes(link.label) ? "text-danger" : "text-white"}`} />
          <br />
          {link.label}
        </ListGroup.Item>)})
          }
    </ListGroup>
);}


{/* <ListGroup.Item as={Link} to="/Kambaz/Account/*" onClick={() => handleClick("account")}
  className={`text-center border-0 ${ activeItem === "account" ? "bg-white text-danger" : "bg-black text-white"}`}>
  <FaRegCircleUser className="fs-1 text text-white" /><br />
  Account </ListGroup.Item> */}

// <div id="wd-kambaz-navigation">
  //   <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
  //   <Link to="/Kambaz/Account" id="wd-account-link">Account</Link><br/>
  //   <Link to="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
  //   <Link to="/Kambaz/Dashboard" id="wd-course-link">Courses</Link><br/>
  //   <Link to="/Kambaz/Calendar" id="wd-calendar-link">Calendar</Link><br/>
  //   <Link to="/Kambaz/Inbox" id="wd-inbox-link">Inbox</Link><br/>
  //   <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
 // </div>