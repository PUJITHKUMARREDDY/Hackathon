import React, { useState } from 'react';
import './style.css'; // Import your main styles
import './Admin.css'; // Import the new colorful styles

function AdminComponent() {
    const [courseDetails, setCourseDetails] = useState({
        name: '',
        code: '',
        description: '',
        creditHours: '',
        skillDevelopmentCourse: false,
    });


    return (
        <div className="container">
            <div className="form-card">
                <h1 className="header">Add Course</h1>
                <form>
                    <input
                        type="text"
                        className='inputbx'
                        name="name"
                        placeholder="Course Name"
                       
                  
                    />
                    <input
                        type="text"
                        className='inputbx'
                        name="code"
                        placeholder="Course Code"
                        
                       
                    />
                    <textarea
                        className='inputbx'
                        name="description"
                        placeholder="Course Description"
                       
                
                    />
                    <input
                        type="number"
                        className='inputbx'
                        name="creditHours"
                        placeholder="Credit Hours"
                      
                       
                    />
                    <label>
                        <input
                            type="checkbox"
                            name="skillDevelopmentCourse"
                            checked={courseDetails.skillDevelopmentCourse}
                            
                        />
                        Skill Development Course
                    </label>
                    <button type="submit">Add Course</button>

                </form>
            </div>
            <div className="form-card">
                <h1 className="header">Add Student</h1>
                <form>
                    <input
                        type="text"
                        className='inputbx'
                        name="name"
                        placeholder="Student Name"
                       
                  
                    />
                    <input
                        type="text"
                        className='inputbx'
                        name="Student ID"
                        placeholder="StudentID" 
                       
                    />
                    
                    <input
                        type="email"
                        className='inputbx'
                        name="email"
                        placeholder="email"  
                    />
                    <input 
                    type="number"
                    className='inputbx'
                    name='Phone Number'
                    placeholder='Phone Number'
                    />
                   
                    <button type="submit">Add Student</button>

                </form>
            </div><div className="form-card">
                <h1 className="header">Add Teacher</h1>
                <form>
                    <input
                        type="text"
                        className='inputbx'
                        name="name"
                        placeholder="Teacher Name"
                       
                  
                    />
                    <input
                        type="text"
                        className='inputbx'
                        name="Staff ID"
                        placeholder="Staff ID"
                        
                       
                    />
                    <input
                        type="email"
                        className='inputbx'
                        name="email"
                        placeholder="email"  
                    />
                    <input
                        type="text"
                        className='inputbx'
                        name="Subject"
                        placeholder="Subject Dealing"
                      
                       
                    />
                    
                    <button type="submit">Add Teacher</button>

                </form>
            </div>

        </div>
        
    );
}

export default AdminComponent;