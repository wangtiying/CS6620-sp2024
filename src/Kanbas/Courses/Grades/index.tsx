import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import { FaSignOutAlt, FaSearch, FaRegKeyboard } from "react-icons/fa";
import "./index.css";
function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <>
            <div className=" flex-fill">
                <div className="second-btn-bar">
                    <select className="form-select" style={{ width: "130px", color: "rgb(160, 16, 16)", border: "0" }} >
                        <option selected>Gradebooks</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <span className="keyboard"><FaRegKeyboard /></span>
                    <div className="spacer">
                        <button className="grade-btn mx-1 px-3"><FaSignOutAlt />Import</button>
                        <select className="grade-btn mx-1 px-2">
                            <option> <span className="publish-icon"> &#xf03b; &nbsp;</span>Export</option>
                        </select>
                        <button className="grade-btn mx-1 px-2"><i className="fa fa-cog"></i></button>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <label className="form-label">
                            Student Names</label>
                        <div className="input-group mb-3">
                            <span className="mx-3"><FaSearch /></span>
                            <select id="stu-name" className="form-select">
                                <option selected>Search Student Names</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <label className="form-label">
                            Assignment Names</label>
                        <div className=" input-group mb-3">
                            <span className="mx-3"><FaSearch /></span>
                            <select id="as-name" className="form-select">
                                <option selected>Search Assignments</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="third-btn-bar">
                        <button className="grade-btn mb-3"><i className="fa fa-filter"></i>Apply Filters</button>

                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <th>Student Name</th>
                        {as.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td style={{ color: "rgb(160, 16, 16)" }}>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></>);
}
export default Grades;
