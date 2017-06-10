import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickAddCourse = this.onClickAddCourse.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  onClickAddCourse() {
    /* Fire off an action from previously created actions list to Redux */
    /* Option 1: no mapDispatchToProps function identified 
       this.props.dispatch(courseActions.createCourse(this.state.course)); */
    /* Option 2: dispatch handled in mapDispatchToProps function; assign annonymous function to props */
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add new course</h2>
        <div className="form-group">
          <input
            type="text"
            value={this.state.course.title}
            className="form-control"
            placeholder="Course Title"
            onChange={this.onTitleChange} />
          <input
            type="submit"
            value="Add Course"
            className="btn btn-primary"
            onClick={this.onClickAddCourse} />
        </div>
      </div>
    );
  }
}
/* Props Validation */
CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  /* Required: Returns properties from store that we want to see on our component. 
  State refers to store state, courses refers to configureStore rootReducer(index) variable
  ownProps refers to components own props */
  // debugger;
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  /* Optional: mapDispatchToProps - decide what actions you want to expose on your component. 
  If no mapDispatchToProps function, connect automatically attaches the dispatch function on props */
  return {
    /* Manual bind if not using bindActionCreators
    createCourse: course => dispatch(courseActions.createCourse(course)) */
    /* Binds all actions in courseActions file to dispatch */
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
/* Long export version:
const connectedStateAndPropsFunction = connect(mapStateToProps, mapDispatchToProps);
export default connectStateAndPropsFunction(CoursesPage);
*/