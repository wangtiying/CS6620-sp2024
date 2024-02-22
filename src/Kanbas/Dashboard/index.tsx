import React from "react";
import courses from "../Database/courses.json";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses (7)</h2>
            <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: "300px" }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top" style={{ maxHeight: "150px" }} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ "textDecoration": "none", color: "navy", fontWeight: "bold" }}>
                                        {course.number} {course.name}</Link>
                                    <p className="card-text">{course.name}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary"> Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Dashboard;