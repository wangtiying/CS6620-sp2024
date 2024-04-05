import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import courses from "../Database/courses.json";
import assignments from "../Database/assignments.json";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const COURSES_API = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState<any>({ _id: "" });
    const findCourseById = async (courseId?: string) => {
        const response = await axios.get(
            `${COURSES_API}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    // const course = courses.find((course) => course._id === courseId);


    const matchAssignmentId = pathname.match(/Assignments\/([^/]+)/);
    const assignmentId = matchAssignmentId ? matchAssignmentId[1] : null;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);

    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzs", "People"];
    const currentPage = links.find(link => pathname.includes(link)) || 'Home';
    return (
        <div >
            <nav className=" custom-breadcrumb">
                <ol className="breadcrumb">
                    <li><h5 className="top-bar"><HiMiniBars3 /></h5></li>
                    <li className="breadcrumb-item">
                        <Link to={`/Kanbas/Courses/${courseId}/Home`}>
                            {course?._id} {course?.name} </Link> </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {currentPage}
                    </li>
                    {assignmentId && (
                        <li className="breadcrumb-item">
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignmentId}`}>
                                {assignment ? assignmentId : 'Assignment'}
                            </Link>
                        </li>
                    )}

                </ol>
            </nav>
            <hr />
            <CourseNavigation />
            <div>
                <div
                    className=" overflow-y-scroll position-absolute bottom-0 end-0 "
                    style={{ left: "320px", top: "70px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                        <Route path="Quizzs" element={<h1>Quizzs</h1>} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="Panapto Video" element={<h1>Panapto Video</h1>} />
                        <Route path="Discussions" element={<h1>Discussions</h1>} />
                        <Route path="Announcements" element={<h1>Announcements</h1>} />
                        <Route path="Pages" element={<h1>Pages</h1>} />
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                        <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                        <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                        <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                    </Routes>
                </div>
            </div>
        </div >
    );
}
export default Courses;