import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const layer = data.find((item) => item?.id === id);
        setCompany(layer);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto p-4">
          <div className="mb-6">
            <img src={company.logo} alt={company.name} className="h-20 mb-2" />
            <h2 className="text-3xl font-bold">{company.name}</h2>
            <p className="text-gray-500">{company.location}</p>
            <a href={company.website} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Visit Website
            </a>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Available Jobs</h3>
          <div className="grid gap-4">
            {company.jobs.map((job) => (
              <div
                key={job.id}
                className="border p-4 rounded-lg bg-white shadow flex flex-col sm:flex-row sm:justify-between"
              >
                <div>
                  <h4 className="text-xl font-semibold">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.jobType}</p>
                  <p className="text-sm text-green-700 font-medium">{job.salary}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Details
                </button>
              </div>
            ))}
          </div>

          {selectedJob && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start overflow-y-auto">
              <div className="bg-white max-w-xl w-full rounded-lg p-6 mt-20 shadow-lg relative">
                <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
                <img src={selectedJob.bannerImage} alt={selectedJob.title} className="mb-4 rounded" />
                <p className="mb-2">
                  <strong>Location:</strong> {selectedJob.location}
                </p>
                <p className="mb-2">
                  <strong>Salary:</strong> {selectedJob.salary}
                </p>
                <p className="mb-2">
                  <strong>SelectedJob Type:</strong> {selectedJob.jobType}
                </p>
                <p className="mb-4">{selectedJob.description}</p>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <div className="flex justify-between">
                  <Link
                    to={company.website || "#"}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setSelectedJob(null)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Apply
                  </Link>

                  <button
                    onClick={() => setSelectedJob(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;
