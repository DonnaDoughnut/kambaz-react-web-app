import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    courses: courses,
    enrollments: enrollments,
};
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, { payload: course }) => {
            const newCourse: any = {
                _id: uuidv4(),
                name: course.name,
                number: course.number,
                startDate: course.startDate,
                endDate: course.endDate,
                department: course.department,
                image: "/images/reactjs/jpg",
                description: course.description
            };
            state.courses = [...state.courses, newCourse] as any;
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter((c: any) => c._id !== courseId);
        },
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c: any) => 
                c._id === course._id ? course : c) as any;
        },

        unenrollCourse: (state, { payload: enrollment }) => {
            state.enrollments = state.enrollments.filter((e: any) => e._id !== enrollment._id);
        },
        enrollCourse: (state, { payload: enrollment}) => {
            const newEnrollment: any = {
                _id: uuidv4(),
                user: enrollment.user,
                course: enrollment.course
            };
            state.enrollments = [...state.enrollments, newEnrollment ] as any;
        }
    }
});
export const { addCourse, deleteCourse, updateCourse, enrollCourse, unenrollCourse } = coursesSlice.actions;
export default coursesSlice.reducer;