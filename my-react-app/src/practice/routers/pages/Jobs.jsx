// src/JobPage.js
import React from 'react';
import './page.css'; // Optional: For styling

const jobData = [
  {
    id: 1,
    title: 'Barista',
    description: 'Serve coffee and other beverages to customers, maintain cleanliness, and provide excellent customer service.',
    responsibilities: [
      'Prepare and serve coffee and tea beverages.',
      'Interact with customers and take orders.',
      'Maintain cleanliness of the cafe.',
    ],
    requirements: [
      'Previous barista experience preferred.',
      'Strong communication skills.',
      'Passion for coffee and customer service.',
    ],
  },
  {
    id: 2,
    title: 'Café Manager',
    description: 'Oversee daily operations, manage staff, and ensure high-quality service.',
    responsibilities: [
      'Manage staff and ensure proper training.',
      'Handle customer complaints and feedback.',
      'Ensure compliance with health and safety regulations.',
    ],
    requirements: [
      'Proven experience in a management role.',
      'Excellent organizational skills.',
      'Ability to work flexible hours.',
    ],
  },
  {
    id: 3,
    title: 'Pastry Chef',
    description: 'Create delicious pastries and desserts for our cafe.',
    responsibilities: [
      'Prepare and bake a variety of pastries.',
      'Ensure the quality and freshness of all products.',
      'Assist in menu planning and development.',
    ],
    requirements: [
      'Experience in pastry preparation.',
      'Creativity and attention to detail.',
      'Ability to work in a fast-paced environment.',
    ],
  },
];

const Jobs = () => {
  return (
    <div className="job-page">
      <h1>Join Our Team</h1>
      <h2>Current Job Openings</h2>
      <ul className="job-list">
        {jobData.map(job => (
          <li key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <h4>Responsibilities:</h4>
            <ul>
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            <h4>Requirements:</h4>
            <ul>
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <button className="apply-button">Apply Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
