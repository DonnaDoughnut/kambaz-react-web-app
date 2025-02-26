import { IoEllipsisVertical } from "react-icons/io5";
import { GrAdd } from "react-icons/gr";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <GrAdd className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}