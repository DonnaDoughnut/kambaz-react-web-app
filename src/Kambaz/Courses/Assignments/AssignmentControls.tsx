import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControls(
    { assignmentId,  deleteAssignment}:
    { assignmentId: string; deleteAssignment: (assignmentId: string) => void;}
) {
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)} />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-2" />
        </div>
    );
}