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

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-sky-50 shadow-lg rounded-lg max-w-7xl mx-auto min-h-[80vh]">
      <h2 className="text-xl font-bold mb-4 text-center">Reports</h2>
      <ul>
        {currentReports.map((report, index) => (
          <li key={index} className="border-b py-2 gap-5 flex justify-between items-center hover:bg-slate-200 px-2">
            <span className="text-3xl"><FaFilePdf /></span>
            <div className="flex justify-between items-center w-full">
            <div >
              <p className="font-semibold">{report.title}</p>
              <p className="text-sm text-gray-600">{report.description}</p>
            </div>
            <a href={report.link} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Read</a>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
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

     
    </div>
  );
};

export default ReportsPagination;
