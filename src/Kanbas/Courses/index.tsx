import React from "react";
import { useLocation, useParams } from "react-router";
import { Navigate, Route, Routes } from "react-router-dom";
import CourseNavigation from "./Navigation";
import courses from "../Database/courses.json";
import modules from "../Database/modules.json";
import Assignments from "./Assignments";
import Modules from "./Modules";
import Home from "./Home";
import { HiMiniBars3 } from "react-icons/hi2";
import "../../libs/font-awesome/css/font-awesome.min.css"
import "./index.css"

function Courses() {
    const { courseId } = useParams();
    const location = useLocation();
    console.log(location);
    const path_tokens = location.pathname.split('/')
    console.log(path_tokens[path_tokens.length - 1]);
    const path = path_tokens[path_tokens.length - 1];
    console.log(path)
    console.log(path)
    console.log(path)
    const course = courses.find((course) => course._id === courseId);
    return (
      <div>
        <h4 className="title-bar"><HiMiniBars3/> {course?.name} <i className="fa fa-long-arrow-right arrowSign"></i><span className="currPath">{path}</span></h4>
        <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "220px", top: "60px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h4>Piazza</h4>} />
            <Route path="Zoom Meetings" element={<h4>Zoom Meetings</h4>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h4>Assignment Editor</h4>} />
            <Route path="Quizzes" element={<h4>Quizzes</h4>} />
            <Route path="Grades" element={<h4>Grades</h4>} />
            <Route path="People" element={<h4>People</h4>} />
            <Route path="Panopto Video" element={<h4>Panopto Video</h4>} />
            <Route path="Discussions" element={<h4>Discussions</h4>} />
            <Route path="Announcements" element={<h4>Announcements</h4>} />
            <Route path="Pages" element={<h4>Pages</h4>} />
            <Route path="Files" element={<h4>Files</h4>} />
            <Route path="Rubrics" element={<h4>Rubrics</h4>} />
            <Route path="Outcomes" element={<h4>Outcomes</h4>} />
            <Route path="Collaborations" element={<h4>Collaborations</h4>} />
            <Route path="Syllabus" element={<h4>Syllabus</h4>} />
            <Route path="Settings" element={<h4>Settings</h4>} />
          </Routes>
        </div>
      </div>

      </div>
    );
  }
  

export default Courses;