
import React, { useState } from 'react';
import CourseSelection from './CourseSelection';
import Login from './login'
import AdminComponent from './Admin';
import { courses, teachers } from './data';
import './style.css';

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [teacherAssignments, setTeacherAssignments] = useState({});
  const [feedback, setFeedback] = useState({});

  const handleCourseSelection = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    } else {
      if (selectedCourses.length < 4 || courses.find(course => course.id === courseId).type === 'lab') {
        setSelectedCourses([...selectedCourses, courseId]);
      } else {
        alert("You can only select up to 4 theory courses.");
      }
    }
  };

  const handleTeacherAssignment = (courseId, teacherId) => {
    setTeacherAssignments({ ...teacherAssignments, [courseId]: teacherId });
  };

  const handleFeedbackSubmit = (courseId, feedbackText) => {
    setFeedback({ ...feedback, [courseId]: feedbackText });
  };

  return (
    <div>
      <CourseSelection />
      
    </div>
  );
}

export default App;