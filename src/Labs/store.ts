import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./a4/CounterRedux/counterReducer";
import coursesReducer from "./a4/CoursesRedux/coursesReducer";
import addReducer from "./a4/AddRedux/addReducer";
import todosReducer from "./a4/ReduxExamples/todos/todosReducer";
export type TodoType = {
    id: string;
    title: string;
};
export interface LabState {
    todosReducer: {
        todos: TodoType[];
        todo: TodoType;
    };
}

const store = configureStore({
    reducer: {
        counter: counterReducer,
        coursesReducer,
        addReducer,
        todosReducer,

    },
});

export default store;