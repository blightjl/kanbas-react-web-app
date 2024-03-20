import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";

const initialState = {
    modules: modules,
    module: { name: "New Module 123", description: "New Description" },
    selectedModule: {
        _id: "Course ID",
        name: "Module Name",
        description: "Module Description",
        course: "Course",
        lessons: [
            {
            _id: "Lesson ID",
            name: "Lesson Name",
            description: "Lesson Description",
            module: "Lesson Number"
            },
        ]
      },
    displayMod:         {
        _id: "Course ID",
        name: "Module Name",
        description: "Module Description",
        course: "Course",
        lessons: [
            {
            _id: "Lesson ID",
            name: "Lesson Name",
            description: "Lesson Description",
            module: "Lesson Number"
            },
        ]
      }, 
      moduleForm: {
        name: "Module Name",
        description: "Module Description",
        course: "Course",
    },
  };
  
  const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {

    setForm: (state, action) => {
        state.moduleForm = action.payload;
    },

    setModule: (state, action) => {
        state.module = action.payload;
    },

    setSelectedModule: (state, action) => {
        state.selectedModule = action.payload;
    },

    setDisplay: (state, action) => {
        state.displayMod = action.payload;
    },

    addModule: (state, action) => {
        console.log("ADDED");
        console.log(action.payload);
        const { name, description, course } = action.payload;
        console.log(name, description, course);
        const newModule = {
            _id: new Date().getTime().toString(),
            name: name,
            description: description,
            course: course,
            lessons: [],
        };
        console.log(state.modules.length);
        state.modules = [...state.modules, {...newModule}];
        console.log(state.modules.length);
    },

    deleteModule: (state, action) => {
        console.log("DELETING");
        console.log(action.payload);
        console.log(state.modules);
        state.modules = state.modules.filter((module) => module._id !== action.payload._id);
        console.log(state.modules);
    },

    updateModule: (state, action) => {
        state.modules = state.modules.map((m) => (m._id === action.payload._id ? {...action.payload, name: state.moduleForm.name, description: state.moduleForm.description} : m));
        state.selectedModule = {
            _id: "Course ID",
            name: "Module Name",
            description: "Module Description",
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
        state.moduleForm = {
            name: "",
            description: "",
            course: "",
        }
    },
    },
  });
  
  
  export const { setForm, setModule, setSelectedModule, setDisplay, addModule, deleteModule,
    updateModule } = modulesSlice.actions;

  export default modulesSlice.reducer;
  