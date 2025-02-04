import { useState } from 'react';
import { MdAssignment } from 'react-icons/md';

export default function ContinentSelector() {
  const [selectedContinent, setSelectedContinent] = useState("Asia");
  const [countryData, setCountryData] = useState([]);

  // Sample data for countries and their respective consultancy work
  const continentData = {
    Asia: {
      Bangladesh: [
        'Delivered over 280 consultancies on various work streams for International Development partners, Bi- and Multi-Lateral agencies, Government agencies, and Businesses including Facebook Inc. USA',
      ],
      India: [
        'Organizational Capacity Assessment System and Process Development',
        'Compliance Studies of International Financing Institutions (ADB & World Bank)',
      ],
      Maldives: [
        'Collaborative organizational capacity assessment under South ASIA Governance Program (SAGP) for ASIA Foundation - supported by United States Department of States',
      ],
      Nepal: [
        'Compliance Studies of International Financing Institutions (ADB & World Bank)',
        'Project Monitoring system and MIS development for FCDO/DfID supported projects',
        'Collaborative assignment for organizational capacity assessment under South ASIA Governance Program (SAGP) for ASIA Foundation - supported by United States Department of States',
      ],
      Pakistan: [
        'Compliance Studies of International Financing Institutions (ADB & World Bank)',
      ],
      SriLanka: [
        'Collaborative assignments for organizational capacity assessment under South ASIA Governance Program (SAGP) for ASIA Foundation - supported by United States Department of States',
      ],
    },
    "South America": {
      India: [
        'Organizational Capacity Assessment System and Process Development',
        'Compliance Studies of International Financing Institutions (ADB & World Bank)',
      ],
      Maldives: [
        'Collaborative organizational capacity assessment under South ASIA Governance Program (SAGP) for ASIA Foundation - supported by United States Department of States',
      ],
      Nepal: [
        'Compliance Studies of International Financing Institutions (ADB & World Bank)',
        'Project Monitoring system and MIS development for FCDO/DfID supported projects',
        'Collaborative assignment for organizational capacity assessment under South ASIA Governance Program (SAGP) for ASIA Foundation - supported by United States Department of States',
      ],
      Pakistan: [
        'Compliance Studies of International Financing Institutions (ADB & World Bank)',
      ],
      SriLanka: [
        'Collaborative assignments for organizational capacity assessment under South ASIA Governance Program (SAGP) for ASIA Foundation - supported by United States Department of States',
      ],
    },
  };

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
    setCountryData(continentData[continent] || []);
  };
  useState(() => {
    setCountryData(continentData["Asia"]);
  }, []);

  return (
    <div className="bg-base_900 bg-opacity-10 px-20 py-4">
      <div>
        <div className="gap-2">
          {/* Dynamically render continent buttons with active button styled blue */}
          {Object.keys(continentData).map((continent) => (
            <button
              key={continent}
              className={`py-2 px-4 rounded font-medium ${
                selectedContinent === continent
                  ? 'bg-blue-500 text-white' // Active button style
                  : 'bg-white hover:bg-base_300 hover:text-white' // Default button style
              }`}
              onClick={() => handleContinentClick(continent)}
            >
              {continent}
            </button>
          ))}
        </div>
      </div>
      <div>
        {/* Dynamically render consultancy data for selected continent's countries */}
        {selectedContinent && (
          <div>
            <h3 className="font-bold text-lg mt-4 border-b-2 border-black">Consultancy Work in {selectedContinent}:</h3>
            {Object.keys(countryData).map((country, index) => (
              <div key={index} className="mt-2">
                <h4 className="font-semibold text-md">{country}</h4>
                <ul>
                  {countryData[country].map((item, idx) => (
                    <li key={idx} className="py-1 flex items-start  gap-2 text-left text-xs"><span className='px-2'><MdAssignment /></span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
