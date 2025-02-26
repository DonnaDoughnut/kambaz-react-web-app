import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
{/* Find more icons */}
import { IoMdHome } from "react-icons/io";
import { RiBarChart2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { AiFillBell } from "react-icons/ai";


export default function Status() {
    return (
      <div id="wd-course-status" style={{ width: "350px" }}>
        <h2>Course Status</h2>
        <div className="d-flex">
          <div className="w-50 pe-1">
            <Button variant="secondary" size="lg" className="w-100">
              <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
          <div className="w-50">
            <Button variant="success" size="lg" className="w-100">
              <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
        </div>
        <br />
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
        {/* Complete the rest of the buttons */}
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <IoMdHome className="me-2 fs-5" /> Choose Home Page </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <RiBarChart2Fill className="me-2 fs-5" /> View Course Screen </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <TfiAnnouncement className="me-2 fs-5" /> New Announcement </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <RiBarChart2Fill className="me-2 fs-5" /> New Analytics </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <AiFillBell className="me-2 fs-5" /> View Course Notifications </Button>

      </div>
    );}

    
      //  <div id="wd-course-status">
      //   <h2>Course Status</h2>
      //   <button>Unpublish</button> <button>Publish</button>
      //   {/* Complete on your own */}
      //   <div>
      //     <br></br>
      //   <button>Import Existing Content</button>
      //   </div>
      //   <div>
      //   <button>Import from Commons</button>
      //   </div>
      //   <div>
      //   <button>Choose Home Page</button>
      //   </div>
      //   <div>
      //   <button>View Course Stream</button>
      //   </div>
      //   <div>
      //   <button>New Announcement</button>
      //   </div>
      //   <div>
      //   <button>New Analytics</button>
      //   </div>

      //   <button>View Course Notifications</button>
      // </div>