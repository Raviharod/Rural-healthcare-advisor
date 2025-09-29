import React, { useState, useCallback, useMemo } from 'react';

// --- Icons (using lucide-react names for common icons) ---
// Assuming lucide-react is available, we define the components here.
const Search = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const Settings = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.12a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.2c0 .24-.13.46-.35.59l-.42.25a2 2 0 0 0-.73 2.73l.78 1.12a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.12a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.2c0-.24.13-.46.35-.59l.42-.25a2 2 0 0 0 .73-2.73l-.78-1.12a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.73V2Z"/><circle cx="12" cy="12" r="3"/></svg>
);
const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const SymptomInput = () => {
  const [inputValue, setInputValue] = useState('');
  // Initial state to match the example image tags
  const [symptoms, setSymptoms] = useState(['Fever', 'Cough', 'Headache']);

  // Handles text input changes
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  // Adds a symptom to the list on Enter key press
  const handleAddSymptom = useCallback((e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const newSymptom = inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1).toLowerCase();
      
      // Prevent adding duplicates
      if (!symptoms.map(s => s.toLowerCase()).includes(newSymptom.toLowerCase())) {
        setSymptoms([...symptoms, newSymptom]);
      }
      setInputValue(''); // Clear the input field
      e.preventDefault(); // Prevent form submission if applicable
    }
  }, [inputValue, symptoms]);

  // Removes a symptom from the list
  const handleRemoveSymptom = useCallback((symptomToRemove) => {
    setSymptoms(symptoms.filter(symptom => symptom !== symptomToRemove));
  }, [symptoms]);

  // Memoize the symptom tag list for performance
  const symptomTags = useMemo(() => (
    symptoms.map((symptom, index) => (
      <button
        key={index}
        onClick={() => handleRemoveSymptom(symptom)}
        className="flex items-center space-x-1 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full shadow-sm hover:bg-blue-200 transition duration-150 ease-in-out"
      >
        <span>{symptom}</span>
        {/* 'X' icon for closing/removing the tag */}
        <X className="w-3 h-3 text-blue-500 hover:text-blue-700" />
      </button>
    ))
  ), [symptoms, handleRemoveSymptom]);

  return (
    <div className="h-auto w-full flex items-start justify-center p-4 sm:p-2">
      
      {/* Main Card Container: Responsive width and shadow */}
      <div className=" w-[70%] bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">

        {/* Header Section */}
        <div className="flex items-center mb-6">
          <Settings className="w-6 h-6 text-gray-700 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Symptom Input</h2>
        </div>

        {/* Input/Search Area */}
        <div className="relative mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleAddSymptom}
            placeholder="Type your symptoms (e.g., fever, cough, headache) and press Enter"
            className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 shadow-inner transition duration-150"
          />
          {/* Search Icon */}
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Tags/Symptom List Area */}
        <div className="flex flex-wrap gap-3 pt-2 min-h-[40px]">
          {symptomTags}
        </div>
      </div>
    </div>
  );
};

export default SymptomInput;
