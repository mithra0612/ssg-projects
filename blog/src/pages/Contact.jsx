import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = ({ setFormData }) => {
  const [form, setForm] = useState({ username: "", email: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(form); 
    alert("Form submitted successfully!");
    navigate("/about"); 
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          value={form.username}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
