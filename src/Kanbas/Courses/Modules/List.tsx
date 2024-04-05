import React, { useState, useEffect } from "react";
import "./index.css";
import modules from "../../Database/modules.json";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaBook } from "react-icons/fa";
import { useParams } from "react-router";
import "font-awesome/css/font-awesome.css";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./reducer";
import * as client from "./client";
// import { findModulesForCourse, createModule } from "./client";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();

    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();


    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };


    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId: string) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };


    return (
        <>
            {/* <!-- Add buttons here --> */}
            <div className="buttons">
                <button className="modules-buttons">Collapse All</button>
                <button className="modules-buttons">View Progress</button>
                <select className="modules-buttons" >
                    <option > <span> &#xf05d;Publish All</span></option>
                </select>
                <button onClick={handleUpdateModule} className="btn btn-primary">
                    Update
                </button>
                <button onClick={handleAddModule} className="btn btn-success" >+ Module</button>
                <button className="modules-buttons"> <FaEllipsisV className="ms-2" /></button>
            </div>

            {/* make the module form prettier */}
            <li className="list-group-item">
                <label style={{ verticalAlign: 'top', marginRight: '10px' }}>Module Name:</label>
                <input value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
            </li>
            <li className="list-group-item mt-2">
                <label style={{ verticalAlign: 'top', marginRight: '10px' }}>Module Description:</label>
                <textarea value={module.description}
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                    }
                />
            </li>


            <ul className="list-group wd-modules">
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item">
                            <div>
                                <h5><FaEllipsisV className="me-2" />{module.name}
                                    <button className="float-end btn btn-danger"
                                        style={{ borderRadius: '5px', padding: "3px" }}
                                        onClick={() => handleDeleteModule(module._id)}>
                                        Delete
                                    </button>
                                    <button className="float-end btn btn-success"
                                        style={{ borderRadius: '5px', marginRight: "10px", padding: "3px" }}
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                </h5>
                                {/* <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" /> */}
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{module.description}
                                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{module._id}</div>
                            </div>
                            {/* {
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
                            } */}
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;

