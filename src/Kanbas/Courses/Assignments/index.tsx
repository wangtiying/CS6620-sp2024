import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "font-awesome/css/font-awesome.css";
import "./index.css";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="d-flex second-top-bar">
                <input className="form-control w-25" type="text" placeholder="Search For Assignment" />
                <button className="as-btn"> <i className="fa fa-plus"></i> Group</button>
                <button className="btn btn-danger"> <i className="fa fa-plus"></i>
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
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item d-flex align-items-center justify-content-between pt-3 pb-3">
                                <FaEllipsisV className="me-2" />
                                <i className="fa fa-file-text-o text-success"></i>
                                <div className="flex-grow-1 ms-3 ">
                                    <div>
                                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </Link>
                                    </div>
                                    <div className="sub-dp"> <span style={{ color: "red" }}>Multiple Modules</span> | {assignment.courseDdl} | {assignment.points}</div>
                                </div>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;