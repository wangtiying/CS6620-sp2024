import React, { useState } from "react";
import "./index.css";
import modules from "../../Database/modules.json";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaBook } from "react-icons/fa";
import { useParams } from "react-router";
import "font-awesome/css/font-awesome.css";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    return (
        <>
            {/* <!-- Add buttons here --> */}
            <div className="buttons">
                <button className="modules-buttons">Collapse All</button>
                <button className="modules-buttons">View Progress</button>
                <select className="modules-buttons" >
                    <option > <span> &#xf05d;Publish All</span></option>
                </select>
                <button className="btn btn-danger" >+ Module</button>
                <button className="modules-buttons"> <FaEllipsisV className="ms-2" /></button>
            </div>

            <ul className="list-group wd-modules">
                {modulesList.map((module, index) => (
                    <li key={index}
                        className="list-group-item"
                    >
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        {
                            <ul className="list-group">
                                {module.lessons?.map((lesson, index) => (
                                    <li className="list-group-item" key={index}>
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        }
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;

