import React from "react";
const JobBoard = () => {
  const jobs = [
    { id: 1, title: "QA Analyst", location: "UK", company: "TechFirm", visa: "Yes" },
    { id: 2, title: "Backend Developer", location: "Canada", company: "MapleTech", visa: "Yes" }
  ];
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Visa Sponsorship Jobs</h2>
      {jobs.map(job => (
        <div key={job.id} className="border p-4 mb-4 rounded">
          <h3 className="text-xl font-bold">{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <p>Visa Sponsorship: {job.visa}</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">Apply</button>
        </div>
      ))}
    </div>
  );
};
export default JobBoard;