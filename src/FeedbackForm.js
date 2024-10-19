import React, { useState } from 'react';

function Feedback({ teachers, onFeedbackSubmit }) {
  const [selectedTeacherId, setSelectedTeacherId] = useState("");
  const [feedback, setFeedback] = useState(0);

  const handleTeacherChange = (event) => {
    setSelectedTeacherId(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(Number(event.target.value));
  };

  const handleSubmit = () => {
    if (!selectedTeacherId || feedback < 0) {
      alert('Please select a teacher and provide a rating.');
      return;
    }
    
    // Submit feedback
    onFeedbackSubmit(selectedTeacherId, feedback);
    
    // Reset selections
    setSelectedTeacherId("");
    setFeedback(0);
  };

  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <select onChange={handleTeacherChange} value={selectedTeacherId}>
        <option value="" disabled>Select a teacher</option>
        {teachers.map(teacher => (
          <option key={teacher.id} value={teacher.id}>
            {teacher.name}
          </option>
        ))}
      </select>
      <div className="feedback-rating">
        <label>Rate this teacher:</label>
        <select onChange={handleFeedbackChange} value={feedback}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button onClick={handleSubmit} style={{ marginTop: '20px' }}>
        Submit Feedback
      </button>
    </div>
  );
}

export default Feedback;