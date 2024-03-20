import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import DashboardMod from "./DashboardMod";
import "../../libs/bootstrap/bootstrap.min.css";
import "./index.css";
import * as db from "../Database"
import { add } from "../../Labs/a4/ReduxExamples/AddRedux/addReducer";

function Dashboard(  {course, setCourse, courses, editor, editSign, addNewCourse, updateCourse,
  switchEditor, switchSign, handleInputs, handleSubmit, deleteCourse} : {
  course: {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
  };

  setCourse: (course: {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
  }) => void;

  courses: {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
  }[];

  editor: boolean;
  editSign: string;
  addNewCourse: () => void;
  updateCourse: (course: any) => void;
  switchEditor: () => void;
  switchSign: () => void;
  handleInputs: (e: any) => void;
  handleSubmit: (e: any) => void;
  deleteCourse: (courseId: string) => void;

}) {



  return (
    <div className="dashboard">
        <div>
      <h1 className="wd-dashboard-anchor">Dashboard<br/><hr/></h1>
      </div>
      <div className="wd-dashboard-subview">
      <h2>Published Courses ({courses.length}) <button className="btn btn-danger" onClick={switchSign}> {editSign} </button>  </h2>
      {editor && (<form className="form-control editor-board" onSubmit={handleSubmit}>
        <input name="_id" placeholder="Course ID" value={course._id} type="text" className="form-control" onChange={handleInputs}/>
        <input name="name" placeholder="Course Name" type="text" className="form-control" onChange={handleInputs}/>
        <input name="number" placeholder="Course Number" type="text" className="form-control" onChange={handleInputs}/>
        <input name="startDate" className="form-control" type="date" onChange={handleInputs}/>
        <input name="endDate" className="form-control" type="date" onChange={handleInputs}/>
        <div>
        <button className="btn btn-success add-button form-control" type="submit"> ADD </button>
        <button className="btn btn-success update-button form-control" onClick={() => updateCourse(course)}> UPDATE </button>
        </div>
      </form>)}
      <hr/>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((curr) => (
            <div className="wd-dashboard-card" key={curr._id}>
              <div className="card">
                <img
                  src={curr.image}
                  className="card-img-top"
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${curr._id}`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {curr.name}
                  </Link>
                  <p className="card-text">{curr._id}</p>
                  <Link to="#" className="btn btn-danger">
                    {" "}
                    GO{" "}
                  </Link>
                  <button className="btn btn-dark edit-button" onClick={(event) => {
                    event.preventDefault();
                    setCourse({...curr, _id: curr._id});
                  }}>EDIT</button>
                  <button className="btn btn-dark delete-button" onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(curr._id);
                  }}>DELETE</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
export type CoursesType = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
};