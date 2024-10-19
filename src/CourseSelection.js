import React, { useState } from 'react';


function CourseSelection({ courses, teachers }) {
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [selectedTeacherId, setSelectedTeacherId] = useState("");
  const [assignedTeachers, setAssignedTeachers] = useState([]); // State to hold assigned teachers
  
  // Counts for theory and lab courses
  const [theoryCount, setTheoryCount] = useState(0);
  const [labCount, setLabCount] = useState(0);

  const handleCourseChange = (event) => {
    setSelectedCourseId(event.target.value);
    setSelectedTeacherId(""); // Reset teacher selection when course changes
  };

  const handleTeacherChange = (event) => {
    setSelectedTeacherId(event.target.value);
  };

  const courseTeachers = selectedCourseId ? teachers.filter(teacher => teacher.courseId === Number(selectedCourseId)) : [];

  const handleSubmit = () => {
    if (selectedTeacherId) {
      const teacher = teachers.find(teacher => teacher.id === Number(selectedTeacherId));
      setAssignedTeachers([...assignedTeachers, { courseId: selectedCourseId, teacher }]);
      
      // Update counts based on course type
      const selectedCourse = courses.find(course => course.id === Number(selectedCourseId));
      if (selectedCourse.type === 'theory') {
        setTheoryCount(prevCount => {
          const newCount = prevCount + 1;
          // Check if the new count is 4 and lab count is 2
          if (newCount === 4 && labCount === 2) {
            alert('You have selected 4 theory courses and 2 lab courses!');
          }
          return newCount;
        });
      } else if (selectedCourse.type === 'lab') {
        setLabCount(prevCount => {
          const newCount = prevCount + 1;
          // Check if the new count is 2 and theory count is 4
          if (theoryCount === 4 && newCount === 2) {
            alert('You have selected 4 theory courses and 2 lab courses!');
          }
          return newCount;
        });
      }

      // Reset selections after assignment
      setSelectedCourseId(""); 
      setSelectedTeacherId(""); 
    }
  };

  const handleReset = () => {
    // Reset all states to their initial values
    setSelectedCourseId("");
    setSelectedTeacherId("");
    setAssignedTeachers([]);
    setTheoryCount(0);
    setLabCount(0);
  };

  // Filter out the courses that have already been assigned
  const availableCourses = courses.filter(course => !assignedTeachers.some(assignment => assignment.courseId === course.id));

  // Separate assigned courses into theory and lab
  const assignedTheoryCourses = assignedTeachers.filter(assignment => {
    const course = courses.find(course => course.id === Number(assignment.courseId));
    return course && course.type === 'theory';
  });

  const assignedLabCourses = assignedTeachers.filter(assignment => {
    const course = courses.find(course => course.id === Number(assignment.courseId));
    return course && course.type === 'lab';
  });

  return (
    <div className="course-selection">
      <h2>Select a Course</h2>
      <select onChange={handleCourseChange} value={selectedCourseId}>
        <option value="" disabled>Select a course</option>
        {availableCourses.map(course => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>

      {selectedCourseId && (
        <div className="teacher-selection">
          <h3>Available Teachers for {courses.find(course => course.id === Number(selectedCourseId)).name}:</h3>
          <select onChange={handleTeacherChange} value={selectedTeacherId}>
            <option value="" disabled>Select a teacher</option>
            {courseTeachers.map(teacher => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name} - Rating: {teacher.rating}
              </option>
            ))}
          </select>
          <button onClick={handleSubmit} disabled={!selectedTeacherId}>
            Submit
          </button>
        </div>
      )}

      {/* Display assigned teachers */}
      <div className="assigned-teachers">
        <h3>Assigned Teachers:</h3>
        <h4>Theory Courses:</h4>
        <ul>
          {assignedTheoryCourses .map((assignment, index) => (
            <li key={index}>
              Course: {courses.find(course => course.id === Number(assignment.courseId)).name} - Teacher: {assignment.teacher.name}
            </li>
          ))}
        </ul>
        <h4>Lab Courses:</h4>
        <ul>
          {assignedLabCourses.map((assignment, index) => (
            <li key={index}>
              Course: {courses.find(course => course.id === Number(assignment.courseId)).name} - Teacher: {assignment.teacher.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Display counts for theory and lab courses */}
      <div className="course-counts">
        <h3>Course Counts:</h3>
        <p>Theory Courses Selected: {theoryCount}</p>
        <p>Lab Courses Selected: {labCount}</p>
      </div>

      {/* Reset Button */}
      <button onClick={handleReset} style={{ marginTop : '20px' }}>
        Reset
      </button>
    </div>
  );
}

export default CourseSelection;