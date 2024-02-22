import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle } from "react-icons/fa";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <>
            <div className="d-flex second-top-bar">
                <button className="btn btn-outline-success" style={{ border: "0" }}> <FaCheckCircle className="text-success" /> Published</button>
                <button className="as-btn px-3" > <i className="fa fa-ellipsis-v"></i></button>

            </div>
            <hr />
            <div>
                <h5>Assignment Name</h5>
                <input value={assignment?.title}
                    className="form-control mb-2" />
                <h5>Assignment ID</h5>
                <input value={assignment?._id}
                    className="form-control mb-2" />
                <h5>Assignment Points</h5>
                <input value={assignment?.points}
                    className="form-control mb-2" />
                <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                    Save
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-danger float-end">
                    Cancel
                </Link>
            </div>
        </>
    );
}
export default AssignmentEditor;