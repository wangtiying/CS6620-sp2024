import axios from "axios";

export const fetchAllCourses = async () => {
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
};

export const findCourseById = async (id: string) => {
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
};

export const createCourse = async () => {
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
};

export const updateCourse = async () => {
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
};

export const deleteCourse = async () => {
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
};