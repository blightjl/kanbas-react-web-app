import React, { useState, useEffect } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { stringify } from "querystring";


function ModuleList() {
    const { courseId } = useParams();
    const [modulesList, setModuleList] = useState<any[]>(modules);
    const [selectedModule, setSelectedModule] = useState(
        {
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
          }
    );
    const [moduleForm, setForm] = useState({
        name: "",
        description: "",
        course: courseId,
    }
    );
    const [displayMod, setDisplay] = useState(
        {
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
          }
        );

    const handleInputs = (e : any) => {
        const { name, value} = e.target;
        setForm(prevState => {
          return {...prevState, [name] : value}
        });
      };

    const addModule = () => {
        const newModule =         {
            _id: "",
            name: moduleForm.name,
            description: moduleForm.description,
            course: "",
            lessons: []
          };
        const anotherMod = {...newModule, course: courseId, _id: new Date().getTime().toString()};
        setModuleList(prevState => {
            return [...prevState, {...anotherMod}]
        });
      };

    const deleteModule = (moduleId: string) => {
        const newList = modulesList.filter((module) => module._id !== moduleId);
        setModuleList(newList);
    };

    const updateModule = (module: any) => {
        const newModuleList = modulesList.map((m) => (m._id === module._id ? {...module, name: moduleForm.name, description: moduleForm.description} : m)
        );
        setModuleList(newModuleList);
        setSelectedModule(        {
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
          });
          setForm(prevState => { 
            return {...prevState,
                name: "",
                description: "",
                course: "",
            }});
      };
    

    const submitModule = (e: any) => {
        e.preventDefault();
        addModule();
    };
    

    useEffect(() => {
        console.log("MODULE FORM");
        console.log(moduleForm);
      }, [moduleForm]);

    useEffect(() => {
    console.log("SELECTED MODULE");
    console.log(selectedModule);
    }, [selectedModule]);

    return (
        <div>
            <button className="split-button studentView">Student View</button>

        <form className="form-control" onSubmit={submitModule}>
        <input name="course" placeholder={selectedModule.course} type="text" className="form-control" 
                            onChange={handleInputs}/>
            <input name="name" placeholder="Module Name" type="text" className="form-control" 
                            onChange={handleInputs}/>
            <textarea name="description" className="form-control" placeholder="Module Description"
                            onChange={handleInputs}/>
            <button className="btn btn-danger form-control add-module" type="submit" style={{width: '100px'}}> ADD </button>
            <button className="btn btn-success form-control update-module" type="button" style={{width: '100px'}} onClick={() => updateModule(selectedModule)}> UPDATE</button>
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
                {modulesList.filter((module) => module.course === courseId).map((module, index) => (
                    <li key={index}
                        className="list-group-item">
                        <div>
                            <button className="mod-button-style" onClick={() => {console.log("DISPLAY UPDATE"); setDisplay(module);}}>{module.name}</button>
                            <span className="float-end">
                                <button className="mod-button-style" onClick={() => deleteModule(module._id)}><FaMinusCircle /></button>
                                <button className="mod-button-style" onClick={(event) => {event.preventDefault(); setSelectedModule(module); console.log(module);}}><FaEllipsisV /></button>
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