'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
// Ensure this path is correct for your CSS file
import "./../career.css"; 

export default function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    post1: 'Sales Manager', // Default value, corresponds to one of your form fields (though not visible in select)
    experience: 'Fresher', // Default value for the experience select
    msg: '',
    fileatt: null,
  });

  const reasons = [
    'Culture of Integrity',
    'Innovation-First Mindset',
    'Impact-Driven Work',
    'Trusted Legacy',
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      // Handle file input separately, using the first file object if files exist
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    // Populate FormData object from state
    Object.entries(formData).forEach(([key, value]) => {
      // Append all fields, including the file object
      if (value !== null) {
        form.append(key, value);
      }
    });

    try {
      // 🚨 UPDATED: Targetting the PHP file in the public directory
      const response = await fetch('https://earagroup.com/career.php', {
        method: 'POST',
        // Note: Do NOT set Content-Type header when sending FormData; 
        // the browser sets the correct 'multipart/form-data' header automatically.
        body: form, 
      });

      // Handle non-OK status codes (e.g., 500 from PHP)
      if (!response.ok) {
        // Attempt to parse JSON error message if available
        const errorResult = await response.json().catch(() => ({ message: 'Server error occurred.' }));
        throw new Error(`Submission failed: ${response.status} - ${errorResult.message}`);
      }

      const result = await response.json();
      alert(result.message || 'Form submitted successfully!');
      
      // Optional: Reset form fields after successful submission
      // setFormData({
      //   name: '', email: '', city: '', phone: '', post1: 'Sales Manager', 
      //   experience: 'Fresher', msg: '', fileatt: null,
      // }); 
      
    } catch (err) {
      console.error('Submission Error:', err);
      // Provide a generic error message if parsing the server response failed
      alert(`Error submitting form. Please check the console for details.`);
    }
  };

  return (
    <>
      {/* Banner */}
      <div id="carouselExampleDark" className="header-section ">
        <div className='row'>
          <div className='col-md-12'>
            <div className="image-container">
              {/* Image component with original paths and dimensions */}
              <Image 
                src="/images/Career-header.avif" 
                height={2880} 
                width={1920} 
                className='img-fluid masterpiece ' 
                alt="masterpiece" 
              />
              <div className="overlay2 " style={{ marginTop: "-120px" }}>
                <div className="text-white d-block">
                  <h1 className="text-center d-block fs-1 mb-0 text-uppercase"> Career</h1>
                  <p>Explore exciting job openings in Eara Group and become part of a purpose-driven future.</p>
                  {/* <p className="text-center d-block fs-6 ">
                    <Link className="text-white text-decoration-none" href='/'> Home</Link> / Career
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Section */}
      <section className="bg-light py-5 theme-bg-light carrer section">
        <div className="container">
          <div className="text-center mb-5 theme-color-dark">
            <h2 className="mb-2">Build the Future with EARA Group</h2>
            <span className=' theme-color-dark'>
              Be part of a mission where values lead, ideas thrive, and growth is a shared journey.
            </span>
          </div>

          <div className="row align-items-center">
            {/* Why Join */}
            <div className="col-lg-6 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4  theme-color-dark m-center">
                Why Join <span className="text-color-accent m-center">EARA</span> Group?
              </h2>


              <div className="row">
                {/* Reasons List */}
                {reasons.map((reason) => (
                  <div key={reason} className="col-12  px-2 mb-3 ps-md-4 ps-5">
                    <div className="row px-1 ">
                      <div className="col-md-10 col-10 px-0">  
                        <FaCheckCircle className="text-color-accentme-2 " /> 
                        <span className="text-dark  theme-color-dark"> {reason} </span> 
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mb-4  theme-color-dark m-center px-md-1 px-1">
                At EARA Group, we&rsquo;re building more than a brand - we&rsquo;re growing a culture rooted in purpose, innovation, and integrity. An Eara Group career is about more than just work; it&rsquo;s about shaping communities, driving progress, and creating lasting impact through every role.
              </p>
            </div>

            {/* Job Form */}
            <div className="col-lg-6 mb-5">
              <div className="px-3 px-md-4 py-4 border rounded shadow-sm bg-white">
                <h5 className="text-uppercase mb-4 theme-color-dark " style={{ color: '#282563' }}>
                  APPLY FOR YOUR JOB
                </h5>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row">
                    {/* Text/Email/Phone Inputs */}
                    {[
                      ['name', 'Name', 'text', 'Name'],
                      ['email', 'Email address', 'email', 'Email'],
                      ['city', 'City', 'text', 'City'],
                      ['phone', 'Phone Number', 'text', 'Mobile No.'],
                    ].map(([name, label, type, placeholder]) => (
                      <div className="form-group col-md-6" key={name}>
                        <input
                          type={type}
                          name={name}
                          className="form-control mb-3 py-2"
                          onChange={handleChange}
                          required
                          placeholder={placeholder}
                        />
                      </div>
                    ))}

                    {/* Experience Dropdown */}
                    <div className="form-group col-md-12">
                      <select
                        name="experience"
                        className="form-control mb-3 py-2"
                        onChange={handleChange}
                        defaultValue={formData.experience} // Use defaultValue to manage state
                      >
                        <option value="Fresher">Fresher</option>
                        <option value="1-2 Years">1-2 Years</option>
                        <option value="2-5 Years">2-5 Years</option>
                        <option value="5-7 Years">5-7 Years</option>
                        <option value="7-10 Years">7-10 Years</option>
                      </select>
                    </div>

                    {/* Description Textarea */}
                    <div className="form-group col-md-12">
                      <textarea
                        name="msg"
                        className="form-control mb-3 py-2"
                        onChange={handleChange}
                        required
                        placeholder="Description"
                      ></textarea>
                    </div>

                    {/* File Attachment */}
                    <div className="form-group col-md-12">
                      <input
                        type="file"
                        name="fileatt"
                        className="form-control mb-3 py-2"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center col-md-12">
                      <button type="submit" className="btn theme-bg-dark text-white py-2 px-4 mt-2">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}