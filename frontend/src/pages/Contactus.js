import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './pagesfinance.css';
import axios from 'axios';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/modals', formData);
      alert('Form submitted successfully:', response.data);
    } catch (error) {
      alert('Error submitting form:', error);
    }
  };



  return (
    <>
      <div className="hero overlay sec blogsec">
        <div className="container">
          <h1 className="heading text-white mb-3 aos-init aos-animate textbold" data-aos="fade-up">Contact Us</h1>
        </div>
      </div>
      <div className="section sec p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info">
                {/* Contact details */}
                <div className="address row mt-2">
                  <div className="col-2 mt-2">
                    <i className="bi bi-geo-alt-fill contacticon"></i>
                  </div>
                  <div className="col-10">
                    <h4 className="mb-2 graytext">Location:</h4>
                    <p className="graytext">43 Raymouth Rd. Baltimore, London 3910</p>
                  </div>
                </div>
                <div className="open-hours row mt-4">
                  <div className="col-2 mt-2">
                    <i className="bi bi-clock contacticon"></i>
                  </div>
                  <div className="col-10">
                    <h4 className="mb-2 graytext">Open Hours:</h4>
                    <p className="graytext">Sunday-Friday: 11:00 AM - 23:00 PM</p>
                  </div>
                </div>
                <div className="email row mt-4">
                  <div className="col-2 mt-2">
                    <i className="bi bi-envelope-fill contacticon"></i>
                  </div>
                  <div className="col-10">
                    <h4 className="mb-2 graytext">Email:</h4>
                    <p className="graytext">info@untree.co</p>
                  </div>
                </div>
                <div className="phone row mt-4">
                  <div className="col-2 mt-2">
                    <i className="bi bi-telephone-fill contacticon"></i>
                  </div>
                  <div className="col-10">
                    <h4 className="mb-2 graytext">Call:</h4>
                    <p className="graytext">+1 1234 55488 55</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6 mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Your Name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="col-6 mb-3">
          <input 
            type="email" 
            className="form-control" 
            placeholder="Your Email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}  
            required 
          />
        </div>
        <div className="col-12 mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange}  
            required 
          />
        </div>
        <div className="col-12 mb-3">
          <textarea 
            cols="30" 
            rows="7" 
            className="form-control" 
            placeholder="Message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>
        </div>
        <div className="col-12">
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
     {/* <div className={`modal fade ${showModal ? 'show' : ''}`} tabindex="-1" style={{ display: showModal ? 'block' : 'none' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Message Sent</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              Your message has been sent successfully!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contactus;
 