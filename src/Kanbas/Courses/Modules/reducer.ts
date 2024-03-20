import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";

const initialState = {
    modules: modules,
    module: { name: "New Module 123", description: "New Description" },
    selectedModule: {
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
      },
    displayMod:         {
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
      }, 
  };
  
  const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {

    setForm: (state, action) => {
        state.module = action.payload;
    },

    setModule: (state, action) => {
        state.module = action.payload;
    },

    setModuleList: (state, action) => {
        state.modules = action.payload;
    },

    addModule: (state, action) => {
        state.modules = [
            { ...action.payload, _id: new Date().getTime().toString() },
            ...state.modules,
        ];
    },

    deleteModule: (state, action) => {
        state.modules = state.modules.filter((module) => module._id !== action.payload);
    },

    updateModule: (state, action) => {
        state.modules = state.modules.map((m) => (m._id === action.payload._id ? action.payload : m));
    },


    },
  });
  
  
  export const { addModule, deleteModule,
    updateModule, setModule } = modulesSlice.actions;

  export default modulesSlice.reducer;
  