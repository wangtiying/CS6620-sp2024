import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
// import { assignments } from "../../Database";
import "font-awesome/css/font-awesome.css";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import {
    addAssignment,
    deleteAssignment,
    selectAssignment,
    resetAssignment,
    selectAssignments,
} from "./assignmentsReducer";
import * as client from "./client";

function Assignments() {
    const { courseId } = useParams();

    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAdd = () => {
        dispatch(resetAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments/New`);
    };

    useEffect(() => {
        client.findAssignmentsForCourse(courseId)
            .then((assignments) =>
                dispatch(selectAssignments(assignments))
            );
    }, [courseId]);

    const handleAddAssignment = () => {
        client.createAssignment(courseId, assignment).then((assignment) => {
            dispatch(addAssignment(assignment));
        });
    };

    const handleDeleteAssignment = (assignmentId: string) => {
        client.deleteAssignment(assignmentId).then((status) => {
            dispatch(deleteAssignment(assignmentId));
        });
    };

    return (
        <>
            <div className="d-flex second-top-bar">
                <input className="form-control w-25" type="text" placeholder="Search For Assignment" />
                <button className="as-btn"> <i className="fa fa-plus"></i> Group</button>
                <button onClick={handleAdd}
                    className="btn btn-danger">
                    <i className="fa fa-plus"></i>
                    Assignment</button>
                <button className="as-btn"> <i className="fa fa-ellipsis-v"></i></button>
            </div>
            <hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <button className="round-btn rounded-5">40% of Total</button>
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList
                            .filter((assignment) => assignment.course === courseId)
                            .map((assignment) => (
                                <li className="list-group-item d-flex align-items-center justify-content-between pt-3 pb-3">
                                    <FaEllipsisV className="me-2" />
                                    <i className="fa fa-file-text-o text-success"></i>
                                    <div className="flex-grow-1 ms-3 ">
                                        <div>
                                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                                onClick={() => dispatch(selectAssignment(assignment))}>
                                                {assignment.title}
                                            </Link>
                                        </div>
                                        <div className="sub-dp"> <span style={{ color: "red" }}>{assignment.description} </span> | Due Date: {assignment.courseDdl} at 11:59pm | {assignment.points} pts</div>
                                    </div>
                                    <span className="float-end">
                                        <button className="float-end btn btn-danger"
                                            style={{ borderRadius: '5px', padding: "3px" }}
                                            onClick={() => {
                                                if (window.confirm("Are you sure you want to remove the assignment?")) {
                                                    handleDeleteAssignment(assignment._id);
                                                }
                                            }}>
                                            Delete
                                        </button>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;