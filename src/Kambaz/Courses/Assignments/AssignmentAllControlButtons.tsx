import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import "../index.css";

export default function AssignmentAllControlButtons() {
    return (
        <div className="float-end">
            <span className="wd-rounded-corners-all-around
                wd-border-thin wd-border-white wd-border-solid 
                wd-padding-fat me-2" >
                40% of Total </span>
            <FaPlus className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}