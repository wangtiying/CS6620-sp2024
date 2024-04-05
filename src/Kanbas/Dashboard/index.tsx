import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import * as db from "../Database";
import axios from "axios";
import * as courseClient from "../Courses/client";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {

    const fetchAllCourses = async () => {
        const courses = await courseClient.fetchAllCourses();
        setCourse(courses);
    };

    useEffect(() => {
        fetchAllCourses();
    }, []);

    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />
            <h5>Course</h5>
            <div className="input-container"
                style={{ display: 'flex', justifyContent: 'space-between' }}>
                <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            </div>
            <button className="btn btn-primary float-end" onClick={addNewCourse} >
                Add
            </button>
            <button className="btn btn-success float-end" onClick={updateCourse} >
                Update
            </button>
            <br />
            <h2>Published Courses (21)</h2>
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
                                        {course.number} {course.name}
                                    </Link>
                                    <p className="card-text">{course.name}</p>
                                    <button className="btn btn-secondary float-end"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        Edit
                                    </button>

                                    <button className="btn btn-danger float-end"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                        Delete
                                    </button>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary"> Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
export default Dashboard;