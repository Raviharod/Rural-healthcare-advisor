import { MdOutlineScience, MdOutlineLocalHospital } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";


function SymptomsResult() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Your Results
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl justify-center">
        {/* Possible Conditions Card */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl border border-blue-100 p-8 flex flex-col items-start min-w-[300px]">
          <div className="flex items-center gap-3 mb-4">
            <MdOutlineScience className="text-3xl text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">
              Possible Conditions
            </span>
          </div>
          <ul className="mt-2 space-y-3 text-lg text-gray-700 font-medium pl-2">
            <li>
              {" "}
              • Common Cold{" "}
              <span className="text-gray-500">(60% likelihood)</span>
            </li>
            <li>
              {" "}
              • Flu <span className="text-gray-500">(30% likelihood)</span>
            </li>
            <li>
              {" "}
              • Other <span className="text-gray-500">(10% likelihood)</span>
            </li>
          </ul>
        </div>
        {/* Urgency Level Card */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl border border-blue-100 p-8 flex flex-col items-start min-w-[300px]">
          <div className="flex items-center gap-3 mb-4">
            <MdOutlineLocalHospital className="text-3xl text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">
              Urgency Level
            </span>
          </div>
          <div className="mt-2 mb-6 text-lg font-semibold text-gray-800">
            See a doctor soon
          </div>
          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition">
            <IoMdAddCircleOutline className="text-2xl" />
            Consult Doctor Now
          </button>
        </div>
        {/* Next Steps Card */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl border border-blue-100 p-8 flex flex-col items-start min-w-[300px]">
          <div className="flex items-center gap-3 mb-4">
            <FaRegClipboard className="text-3xl text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">Next Steps</span>
          </div>
          <div className="mt-2 text-lg text-gray-700 font-medium">
            Rest, stay hydrated, and consider a consultation with a doctor.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SymptomsResult;
