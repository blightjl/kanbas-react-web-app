import React, { useState, useEffect } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    setForm,
    setModule,
    setSelectedModule,
    setDisplay,
    addModule,
    deleteModule,
    updateModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();

    const moduleList = useSelector((state: KanbasState) => 
        state.modulesReducer.modules);

    const selectedModule = useSelector((state: KanbasState) => 
        state.modulesReducer.selectedModule);

    const moduleForm = useSelector((state: KanbasState) => 
        state.modulesReducer.moduleForm);

    const displayMod = useSelector((state: KanbasState) => 
        state.modulesReducer.displayMod);

    const dispatch = useDispatch();

    return (
        <div>
            <button className="split-button studentView">Student View</button>
        
        <form className="form-control" onSubmit={(event) => {event.preventDefault(); dispatch(addModule({...moduleForm, course: courseId}));}}>
        <input name="course" placeholder={selectedModule.course} type="text" className="form-control"
                            onChange={(e) => {dispatch(setForm({...moduleForm, course: e.target.value})); console.log(moduleForm);}}/>
            <input name="name" placeholder={selectedModule.name} type="text" className="form-control" 
                            onChange={(e) => {dispatch(setForm({...moduleForm, name: e.target.value})); console.log(moduleForm);}}/>
            <textarea name="description" placeholder={selectedModule.description} className="form-control"
                            onChange={(e) => {dispatch(setForm({...moduleForm, description: e.target.value})); console.log(moduleForm);}}/>
            <button className="btn btn-danger form-control add-module" type="submit" style={{width: '100px'}}> ADD </button>
            <button className="btn btn-success form-control update-module" type="button" style={{width: '100px'}} onClick={() => {dispatch(updateModule(selectedModule)); dispatch(setSelectedModule({
        _id: "Course ID",
        name: "Course Name",
        description: "Course Description",
        course: "Course",
        lessons: [
            {
            _id: "Lesson ID",
            name: "Lesson Name",
            description: "Lesson Description",
            module: "Lesson Number"
            },
        ]
      })); dispatch(setForm({
        name: "",
        description: "",
        course: "",
    }))}}> UPDATE</button>
        </form>
            <ul className="list-group wd-modules">
            <div className="button-set">
                <div><button className="split-button">Collapse All</button>
                <button
                    className="split-button" id="published">View Progress</button>
                    <button className="split-button"><i
                    className="fa fa-check-circle text-success"></i>Publish All</button>
                    <button className="split-button addModule">+ Module</button>
                    <button className="split-button threeDots"><i className="fa fa-bars"></i></button>
                </div>
                <br/>
            </div>
                {moduleList.filter((module) => module.course === courseId).map((module, index) => (
                    <li key={index}
                        className="list-group-item">
                        <div>
                            <button className="mod-button-style" onClick={() => {console.log("DISPLAY UPDATE"); dispatch(setDisplay(module));}}>{module.name}</button>
                            <span className="float-end">
                                <button className="mod-button-style" onClick={() => {dispatch(deleteModule(module)); console.log("DELETE");}}><FaMinusCircle /></button>
                                <button className="mod-button-style" onClick={(event) => {event.preventDefault(); dispatch(setSelectedModule(module)); console.log(module);}}><FaEllipsisV /></button>
                            </span>
                        </div>
                        {displayMod._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson: any, index: number) => (
                                    <li className="list-group-item" key={index}>
                                        {lesson.name}
                                        <span className="float-end">
                                        <button className="sub-mod-button-style"><FaMinusCircle className="text-danger"/></button>
                                        <button className="mod-button-style"><FaEllipsisV /></button>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ModuleList;