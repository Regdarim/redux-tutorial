import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import * as courseActions from "./redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class App extends Component {
  // handleChange = (e) => {
  //   const course = { ...this.state.course, title: e.target.value };
  //   this.setState({ course });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.actions.createCourse(this.state.course);
  // };

  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed " + error);
    });
  }

  render() {
    return (
      <>
        <h2>Courses</h2>

        {this.props.courses.map((course) => (
          <div key={course.title}> {course.title}</div>
        ))}
      </>
    );
  }
}

App.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};
// const mapDispatchToProps = {
//   createCurse: courseActions.createCourse,
// };

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
