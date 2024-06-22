import React, { useState } from 'react';
import useFormManagement from './useFormManagement';
import useFormValidation from './useFormValidation';

const initialState = {
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    managementExperience: '',
    skills: {
        JavaScript: false,
        CSS: false,
        Python: false
    },
    interviewTime: ''
};



const Registration = () => {
    const { formData, handleChange, resetForm } = useFormManagement(initialState);
    const { validateForm } = useFormValidation(formData);
    const [formEntries, setFormEntries] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        const newEntry = {
            ...formData,
            skills: Object.keys(formData.skills).filter(skill => formData.skills[skill])
        };

        setFormEntries([...formEntries, newEntry]);
        resetForm();
    };

    return (
        <div className="total" onSubmit={handleSubmit}>
            <div className="container">
                <div className="container1">
                    <div className="main">
                        <div className="card">

                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Full Name :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email :</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Applying for Position : </label>
                                        <select
                                            className="form-select"
                                            aria-label="Select position"
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a position</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Designer">Designer</option>
                                            <option value="Manager">Manager</option>
                                        </select>
                                    </div>
                                    {(formData.position === 'Developer' || formData.position === 'Designer') && (
                                        <div className="form-group">
                                            <label>Relevant Experience (years)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                required={formData.position === 'Developer' || formData.position === 'Designer'}
                                            />
                                        </div>
                                    )}
                                    {formData.position === 'Designer' && (
                                        <div className="form-group">
                                            <label>Portfolio URL</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="portfolio"
                                                value={formData.portfolio}
                                                onChange={handleChange}
                                                required={formData.position === 'Designer'}
                                            />
                                        </div>
                                    )}
                                    {formData.position === 'Manager' && (
                                        <div className="form-group">
                                            <label>Management Experience</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="managementExperience"
                                                value={formData.managementExperience}
                                                onChange={handleChange}
                                                required={formData.position === 'Manager'}
                                            />
                                        </div>
                                    )}
                                    <div className="form-group">
                                        <label>Additional Skills</label>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="JavaScript"
                                                checked={formData.skills.JavaScript}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">JavaScript</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="CSS"
                                                checked={formData.skills.CSS}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">CSS</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="Python"
                                                checked={formData.skills.Python}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">Python</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Preferred Interview Time</label>
                                        <input
                                            type="datetime-local"
                                            className="form-control"
                                            name="interviewTime"
                                            value={formData.interviewTime}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <button className="btn" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className="details" >
                <div className="mainTable">
                    <table className="table ">
                        <thead className="tr">
                            <tr>
                                <th>SNo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Position</th>
                                <th>Experience</th>
                                <th>Portfolio URL</th>
                                <th>Management Experience</th>
                                <th>Skills</th>
                                <th>Interview Time</th>
                            </tr>
                            <tbody>
                                {formEntries.map((entry, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{entry.name}</td>
                                        <td>{entry.email}</td>
                                        <td>{entry.position}</td>
                                        <td>{entry.experience}</td>
                                        <td>{entry.portfolio}</td>
                                        <td>{entry.managementExperience}</td>
                                        <td>{entry.skills.join(', ')}</td>
                                        <td>{entry.interviewTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </thead>
                    </table>
                </div>
            </div>

        </div>

    );
};

export default Registration;