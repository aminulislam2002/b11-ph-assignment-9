import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function CompaniesSection() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Top Companies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <Link
              to={`/company/${company?.id}`}
              key={company?.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 p-4 flex flex-col items-center"
            >
              <img src={company?.logo} alt={company?.name} className="h-16 object-cover rounded-md mb-2" />
              <p className="text-center text-lg font-medium text-gray-700">{company?.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
