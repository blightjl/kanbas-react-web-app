import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
    selectedModule: {
      _id: string,
      name: string,
      description: string,
      course: string,
      lessons: [
        _id: string,
        name: string,
        description: string,
        module: string,
      ],
    },
    displayMod: {
      _id: string,
      name: string,
      description: string,
      course: string,
      lessons: [
        _id: string,
        name: string,
        description: string,
        module: string,
      ],
    },
    moduleForm: {
      name: string,
      description: string,
      course: string,
    }
  };
}

const store = configureStore({
  reducer: {
    modulesReducer
  }
});

export default store;