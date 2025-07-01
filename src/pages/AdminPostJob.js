import React, { useState } from "react";
const AdminPostJob = () => {
  const [form, setForm] = useState({ title: "", location: "", company: "", visa: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Job submitted!"); };
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Job Title" className="border p-2 w-full mb-2" />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 w-full mb-2" />
        <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="border p-2 w-full mb-2" />
        <input name="visa" value={form.visa} onChange={handleChange} placeholder="Visa Sponsorship (Yes/No)" className="border p-2 w-full mb-4" />
        <button className="bg-purple-600 text-white py-2 px-4 rounded w-full">Submit</button>
      </form>
    </div>
  );
};
export default AdminPostJob;