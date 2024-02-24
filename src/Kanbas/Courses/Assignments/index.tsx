import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { homeworks } from "../../Database";
import { ListFormat } from "typescript";

function Assignments() {
  const { courseId } = useParams();
  let assignmentList = homeworks.filter((homework) => homework.course === courseId);
  console.log(assignmentList)
  const lessonList: any[] = assignmentList.flatMap(homework => homework.lessons);
  console.log(lessonList)
  return (
    <div>
        <div className="button-container" style={{display: "flex"}}>
            <div>
            <input type="text" placeholder="Search assignments..."></input>
                <button className="split-button">+ Group</button>
                <button className="split-button" id="published" style={{backgroundColor: "red"}}>+ Assignment</button>
                <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </div>
        </div>
      <ul className="list-group wd-modules">
        
        <span className="float-end">
        <li className="list-group-item">ASSIGNMENTS<FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" /></li>
          </span>
      {lessonList.map((homework) => (
        <li className="list-group-item">
        <div>
          <span className="float-end">
            <FaCheckCircle className="text-success" />
            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
          </span>
        </div>
            <li className="list-group-item">
              <FaEllipsisV className="me-2" />
              <Link
                 to={`/Kanbas/Courses/${courseId}/Assignments/${homework._id}`}>{homework.name} {homework.description}</Link>
              <span className="float-end">
                <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
            </li>
      </li>
      ))}


      </ul>
    </div>
);}

export default Assignments;