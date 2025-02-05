import React from "react";
const About = ({ formData }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>

      {formData.username ? (
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold">Submitted Contact Details:</h3>
          <p><strong>Name:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      ) : (
        <p className="text-gray-600">No contact details submitted yet.</p>
      )}
    </div>
  );
};

export default About;
