import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";


const initialState = {
    assignments: [],
    assignment: {
        title: "New Assignment",
        course: "",
        description: "New Assignment Description",
        points: "100",
        courseDdl: "",
        from: "",
        until: "",
        _id: ""
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        selectAssignments: (state, action) => {
            state.assignments = action.payload;
        },

        // addAssignment: (state, action) => {
        //     state.assignments = [action.payload, ...state.assignments];
        // },

        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },

        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        resetAssignment: (state) => {
            state.assignment = initialState.assignment;
        },
    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment, resetAssignment, selectAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
