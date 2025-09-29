import React, { useState } from 'react';

// --- Icon (simulating the quiz/help icon from the image) ---
const HelpCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
);
// --- Chevron Down Icon for the Select Box ---
const ChevronDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);


const AdditionalQue = () => {
  // State initialization for form fields
  const [duration, setDuration] = useState('Select duration');
  const [intensity, setIntensity] = useState(50);
  const [isChronic, setIsChronic] = useState(false);
  const [isPregnant, setIsPregnant] = useState(false);
  const [isOnMedication, setIsOnMedication] = useState(false);

  // We use blue-600 for primary color, matching the previous component's style

  return (
    <div className="h-auto bg-gray-50 flex justify-center items-start pt-16 p-4 sm:p-8">
      
      {/* Main Card Container */}
      <div className="w-[70%] bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        
        {/* Header Section */}
        <div className="flex items-center mb-8 pb-4 border-b border-gray-100">
          <HelpCircle className="w-5 h-5 text-blue-600 mr-2" /> 
          <h3 className="text-xl font-semibold text-gray-800">Additional Questions (Optional)</h3>
        </div>
        
        {/* Form Fields Container */}
        <div className="space-y-8">
          
          {/* 1. Duration of Symptoms (Select Dropdown) */}
          <div>
            <label
              className="block text-base font-medium text-gray-700 mb-2"
              htmlFor="duration"
            >
              Duration of Symptoms
            </label>
            <div className="relative">
              <select
                className="w-full p-3 pr-10 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 appearance-none shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 cursor-pointer"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option disabled value="Select duration">Select duration</option>
                <option>Less than a day</option>
                <option>1-2 days</option>
                <option>3-7 days</option>
                <option>More than a week</option>
              </select>
              {/* Custom Chevron Down Icon */}
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          
          {/* 2. Intensity (Range Slider) */}
          <div>
            <label
              className="block text-base font-medium text-gray-700 mb-4"
              htmlFor="intensity"
            >
              Intensity
            </label>
            <div className="relative pt-2">
              <input
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                id="intensity"
                max="100"
                min="0"
                type="range"
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
              />
              {/* Visual Indicator (Optional, but useful) */}
              <div 
                className="absolute h-2 bg-blue-500 rounded-lg top-2 left-0 pointer-events-none"
                style={{ width: `${intensity}%` }}
              ></div>
            </div>
            {/* Range Labels */}
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Mild</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
          </div>
          
          {/* 3. Checkbox Group (Responsive Grid Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            
            {/* Chronic Illness Checkbox */}
            <div className="flex items-center justify-between p-2">
              <label
                className="text-sm font-medium text-gray-700 cursor-pointer"
                htmlFor="chronic"
              >
                Chronic Illness?
              </label>
              <input
                className="form-checkbox h-5 w-5 rounded-full text-blue-600 focus:ring-blue-500 transition duration-150 cursor-pointer"
                id="chronic"
                type="checkbox"
                checked={isChronic}
                onChange={() => setIsChronic(!isChronic)}
              />
            </div>
            
            {/* Pregnant Checkbox */}
            <div className="flex items-center justify-between p-2">
              <label
                className="text-sm font-medium text-gray-700 cursor-pointer"
                htmlFor="pregnant"
              >
                Pregnant?
              </label>
              <input
                className="form-checkbox h-5 w-5 rounded-full text-blue-600 focus:ring-blue-500 transition duration-150 cursor-pointer"
                id="pregnant"
                type="checkbox"
                checked={isPregnant}
                onChange={() => setIsPregnant(!isPregnant)}
              />
            </div>
            
            {/* On Medication Checkbox */}
            <div className="flex items-center justify-between p-2">
              <label
                className="text-sm font-medium text-gray-700 cursor-pointer"
                htmlFor="medication"
              >
                On Medication?
              </label>
              <input
                className="form-checkbox h-5 w-5 rounded-full text-blue-600 focus:ring-blue-500 transition duration-150 cursor-pointer"
                id="medication"
                type="checkbox"
                checked={isOnMedication}
                onChange={() => setIsOnMedication(!isOnMedication)}
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AdditionalQue;