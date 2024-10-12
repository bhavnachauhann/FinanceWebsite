import React, { useState } from 'react';
import axios from 'axios';

const Modal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/modals', formData);
      alert('Form submitted successfully:', response.data);
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };

 
  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="col-form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">Email</label>
                  <input type="text" className="form-control" id="email" value={formData.email} onChange={handleChange}  required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="col-form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" value={formData.subject} onChange={handleChange}  required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="col-form-label">Message</label>
                  <textarea className="form-control" id="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
