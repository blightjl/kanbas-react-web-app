import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigator from "./Navigation";
import "./Navigation/index.css";
import * as db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: "", name: "", number: "",
    startDate: "", endDate: "",
    image: "/images/reactjs.jpg"
  });

  const [editor, setEditor] = useState(false);
  const [editSign, setSign] = useState("+");

  const addNewCourse = () => {
    const newCourse = { ...course };
    console.log(course);
    setCourses([...courses, newCourse]);
    setCourse({
      _id: "", name: "", number: "",
      startDate: "", endDate: "",
      image: "/images/reactjs.jpg"
    });
  };

  const updateCourse = (course: any) => {
    const newCourses = courses.map((item) => 
    (item._id === course._id ? course : item));
    setCourses(newCourses);
    setCourse({
      _id: "", name: "", number: "",
      startDate: "", endDate: "",
      image: "/images/reactjs.jpg"
    });
  };

  const switchEditor = () => {
    setEditor(!editor);
  }

  const switchSign = () => {
    if (editSign === "+") {
      setSign("-");
      switchEditor();
    } else {
      setSign("+");
      switchEditor();
      setCourse({
        _id: "", name: "", number: "",
        startDate: "", endDate: "",
        image: "/images/reactjs.jpg"
      });
    }
  };

  const handleInputs = (e : any) => {
    const { name, value} = e.target;
    setCourse(prevState => {
      return {...prevState, [name] : value}
    });
    console.log(name, value);
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log(course);
    addNewCourse();
  };

  useEffect(() => {
    // console.log("UPDATING THE COURSE");
    // console.log(course);
  }, [course]);

  useEffect(() => {
    // console.log("SIGN");
    // console.log(editSign);
  }, [editSign]);

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigator />
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          {/* <Route path="Dashboard" element={<Dashboard />} /> */}
          <Route path="Dashboard" element={
            <Dashboard 
              course={course}
              setCourse={setCourse}
              courses={courses}
              editor={editor}
              editSign={editSign}
              addNewCourse={addNewCourse}
              updateCourse={updateCourse}
              switchEditor={switchEditor}
              switchSign={switchSign}
              handleInputs={handleInputs}
              handleSubmit={handleSubmit}
              deleteCourse={deleteCourse}
/>
          } />
          <Route path="Courses/:courseId/*" element={
          <Courses
            courses={courses}
            />
          } />
          <Route path="Courses" element={
          <Courses
            courses={courses}
            />
          } />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}

export default Kanbas;