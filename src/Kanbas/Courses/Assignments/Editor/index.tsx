import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../store";
import {
    addAssignment,
    updateAssignment,
    deleteAssignment,
    selectAssignment
} from "../assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    // const assignment = assignments.find(
    //     (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const handleSave = () => {
        if (assignmentId === 'New') {
            // Create a new assignment
            dispatch(addAssignment({
                ...assignment,
                course: courseId // Generate a unique ID for the new assignment
            }));
        } else {
            // Update an existing assignment
            dispatch(updateAssignment(assignment));
        }

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
                <input value={assignment.title}
                    style={{ width: "300px" }}
                    className="form-control mb-2"
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))
                    } />
                {/* <h5>Assignment ID</h5>
                <input value={assignment._id}
                    style={{ width: "300px" }}
                    className="form-control mb-2"
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, _id: e.target.value }))
                    } /> */}
                <h5>Assignment Description</h5>
                <textarea value={assignment.description} style={{ width: "800px", height: "100px", borderColor: "lightgray" }}
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))
                    } />
                <h5>Assignment Points</h5>
                <input value={assignment.points}
                    style={{ width: "300px" }}
                    className="form-control mb-2"
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))
                    } />
                <h5>Assignment Due</h5>
                <input value={assignment.courseDdl}
                    type="date"
                    style={{ width: "300px" }}
                    className="form-control mb-2"
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, courseDdl: e.target.value }))
                    } />
                <h5>Available From</h5>
                <input value={assignment.from}
                    type="date"
                    style={{ width: "300px" }}
                    className="form-control mb-2 me-10"
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, from: e.target.value }))
                    } />
                <h5>Until</h5>
                <input value={assignment.until}
                    type="date"
                    style={{ width: "300px" }}
                    className="form-control mb-2"
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, until: e.target.value }))
                    } />
                <hr />
                <button
                    onClick={handleSave}
                    className="btn btn-success ms-2 float-end">
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