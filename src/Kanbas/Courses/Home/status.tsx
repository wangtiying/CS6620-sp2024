import "font-awesome/css/font-awesome.css";
import "./index.css";

function Status() {

    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block col-sm-3" style={{ width: "250px" }}>
            <div className="title">
                <h6>Course Status</h6>
            </div>
            <div className="d-flex flex-column ">
                <div className="p-2">
                    <div className="button-container">
                        <button className="modules-buttons"> <i className="fa fa-ban"></i>Unpublish</button>
                        <button className="modules-buttons" id="publish"> <i
                            className="fa fa-check-circle"></i>Published</button>
                    </div>
                    <button className="modules-buttons"> <i className="fa fa-upload "></i> Import Existng
                        Content</button>
                    <button className="modules-buttons"> <i className="fa fa-plus-circle  "></i> Import From
                        Commons</button>
                    <button className="modules-buttons"> <i className="fa fa-life-ring"></i> Choose Home
                        Page</button>
                    <button className="modules-buttons"> <i className="fa fa-bar-chart"></i> View Course
                        Stream</button>
                    <button className="modules-buttons"> <i className="fa fa-bullhorn"></i> New
                        Announcement</button>
                </div>
            </div>
            <div className="title">
                <h6>To Do</h6>
                <hr />
                <i className="td-close fa fa-times"></i>
                <p className="to-do">Grade A1 - ENV + HTML</p>
            </div>
            <div className="title">
                <div className="row">
                    <div className="col">
                        <h6>Comping Up</h6>
                    </div>
                    <div className="col calender">
                        <a href="#"> <i className="fa fa-calendar-check-o"></i> View Calender </a>
                    </div>
                </div>
                <hr />
                <div className="cu-list">
                    <a href="#"><i className="fa fa-calendar-check-o"></i>Lecture</a> <br></br>
                    <a href="#"><i className="fa fa-calendar-check-o"></i>CS5610 07 SP24 Lecture</a> <br></br>
                    <a href="#"><i className="fa fa-calendar-check-o"></i>CS5610 WEBDEV</a> <br></br>
                </div>
            </div>
        </div>

    );
}
export default Status;