import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

const reports = [
  { title: "Baseline Study Report of Ain-O-Salish Kendra (ASK)", description: "Human Rights and Access to Justice Situation in ASK Programme area", link: "#" },
  { title: "Mid-term Evaluation Report - TLMZ supported project", description: "Community based rehabilitation project focused on leprosy affected person with disabilities", link: "#" },
  { title: "Report on MJF Baseline Survey 2009", description: "Baseline Survey on Human and Child Rights programme.", link: "#" },
  { title: "End-line Evaluation of CNA Foundation project in RMG sector", description: "Final Evaluation of WEAR project on RGM industries by Netherland based Buyers Network CNA Foundation", link: "#" },
  { title: "UNFPA Research on Reproductive Health Initiatives for Youth in ASIA (RHIYA)", description: "Adolescent Reproductive Health - quality research", link: "#" },
  { title: "Review Report of Voucher Scheme Under Homeless Component of MSI`S EC Block Grant Project", description: "Conducted for Marie Stopes (MS) clinic society", link: "#" },
  { title: "Baseline Survey Report of Sharique Phase-IV", description: "Baseline Survey of Sharique Local Government Program.", link: "#" },
  { title: "Migration Project Evaluation Report", description: "Mid-term Evaluation of Safe Migration Facilitation Project of BRAC", link: "#" },
  { title: "Vulnerability Analysis of CSE and CSEC Survivors in Bangladesh", description: "Cross-boarder trafficking victims - Vulnerability Analysis of Women and Children survivors from Commercial Sex Exploitation", link: "#" },
  { title: "Functionality and Sustainability Assessment of SHN CSPs", description: "Community Service Providers Assessment - USAID's Surjer Hasi Clinics", link: "#" },
  { title: "Migration Project Evaluation Report", description: "Mid-term Evaluation of Safe Migration Facilitation Project of BRAC", link: "#" },
  { title: "Vulnerability Analysis of CSE and CSEC Survivors in Bangladesh", description: "Cross-boarder trafficking victims - Vulnerability Analysis of Women and Children survivors from Commercial Sex Exploitation", link: "#" },
  { title: "Functionality and Sustainability Assessment of SHN CSPs", description: "Community Service Providers Assessment - USAID's Surjer Hasi Clinics", link: "#" },
  { title: "Migration Project Evaluation Report", description: "Mid-term Evaluation of Safe Migration Facilitation Project of BRAC", link: "#" },
  { title: "Vulnerability Analysis of CSE and CSEC Survivors in Bangladesh", description: "Cross-boarder trafficking victims - Vulnerability Analysis of Women and Children survivors from Commercial Sex Exploitation", link: "#" },
  { title: "Functionality and Sustainability Assessment of SHN CSPs", description: "Community Service Providers Assessment - USAID's Surjer Hasi Clinics", link: "#" },
  { title: "Migration Project Evaluation Report", description: "Mid-term Evaluation of Safe Migration Facilitation Project of BRAC", link: "#" },
  { title: "Vulnerability Analysis of CSE and CSEC Survivors in Bangladesh", description: "Cross-boarder trafficking victims - Vulnerability Analysis of Women and Children survivors from Commercial Sex Exploitation", link: "#" },
  { title: "Functionality and Sustainability Assessment of SHN CSPs", description: "Community Service Providers Assessment - USAID's Surjer Hasi Clinics", link: "#" }
];

const ReportsPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", purpose: "" });

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openModal = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", purpose: "" });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted for approval.");
    closeModal();
  };

  return (
    <div className="p-6 bg-sky-50 shadow-lg rounded-lg max-w-7xl mx-auto min-h-[80vh]">
      <h2 className="text-xl font-bold mb-4 text-center">Reports</h2>
      <ul>
        {currentReports.map((report, index) => (
          <li key={index} className="border-b py-2 gap-5 flex flex-col sm:flex-row justify-between items-center hover:bg-slate-200 px-2">
            <span className="text-3xl"><FaFilePdf /></span>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full">
              <div className="text-center sm:text-left">
                <p className="font-semibold text-sm ">{report.title}</p>
                <p className="text-xs sm:text-xs text-gray-600">{report.description}</p>
              </div>
              <button 
                onClick={() => openModal(report)} 
                className="bg-blue-500 text-white px-4 py-2 mt-2 sm:mt-0 rounded-lg hover:bg-blue-600"
              >
                Read
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-4 flex-wrap gap-2">
        {[...Array(Math.ceil(reports.length / reportsPerPage)).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === number + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {number + 1}
          </button>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-3 text-center">Request Access to Read</h2>
            <p className="mb-2 text-gray-600 text-center">
              Submit your details to request access for <strong>{selectedReport?.title}</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border p-2 rounded outline-none focus:ring focus:ring-blue-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border p-2 rounded outline-none focus:ring focus:ring-blue-300"
                required
              />
              <textarea
                name="purpose"
                placeholder="Purpose of reading this report"
                value={formData.purpose}
                onChange={handleInputChange}
                className="w-full border p-2 rounded outline-none focus:ring focus:ring-blue-300"
                required
              />
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsPagination;
