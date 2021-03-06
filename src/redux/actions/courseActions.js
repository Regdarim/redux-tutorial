import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export const createCourse = (course) => {
  return { type: types.CREATE_COURSE, course: course };
  //mozna napisac samo course i nazywa sie to object shorthand synthax.
};

export const loadCourseSuccess = (courses) => {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses,
  };
};

export const loadCourses = () => {
  return (dispatch) => {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
};
