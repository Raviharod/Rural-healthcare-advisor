function PatientInfo(){
    return (
      <>
     <div className="w-full h-auto flex flex-col justify-center items-center py-8 px-4 sm:px-6">
      <h3 className="text-3xl font-extrabold text-gray-800 mb-8">Patient Information</h3>

      {/* Information Card Container: adapts width based on screen size */}
      <div className="w-[80%] max-w-4xl p-6 shadow-2xl bg-white border border-gray-100 rounded-xl transition duration-300 hover:shadow-lg">
        
        {/* Responsive Grid for Fields: 1 column on mobile, 2 on medium, 3 on large */}
        <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {/* 1. Age Input */}
          <div>
            <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">Age (Years)</label>
            <input
              type="number" // Changed to number type for better mobile keyboard input
              placeholder="e.g., 35"
              name="age"
              id="age"
              // w-full ensures full width within the grid column
              className="p-3 w-full bg-blue-50 border border-blue-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 shadow-inner"
            />
          </div>

          {/* 2. Gender Radio Group */}
          <div className="col-span-1 mb-6">
            <div className="block text-sm font-semibold text-gray-700 mb-2">Gender</div>
            {/* Flex container for radio buttons, wrapped in a nicely styled box */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 p-3 h-full bg-blue-50 border border-blue-200 rounded-lg items-center min-h-[50px]">
              
              {/* CRITICAL FIX: All radio inputs now share the same name="gender" */}

              <label htmlFor="gender_male" className="inline-flex items-center text-gray-700 cursor-pointer">
                <input 
                  type="radio" 
                  id="gender_male" 
                  value="male" 
                  name="gender" // Corrected: Same name for all radios
                  className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" 
                />
                <span className="ml-2">Male</span>
              </label>

              <label htmlFor="gender_female" className="inline-flex items-center text-gray-700 cursor-pointer">
                <input 
                  type="radio" 
                  id="gender_female" 
                  value="female" 
                  name="gender" // Corrected: Same name for all radios
                  className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" 
                />
                <span className="ml-2">Female</span>
              </label>

              <label htmlFor="gender_other" className="inline-flex items-center text-gray-700 cursor-pointer">
                <input 
                  type="radio" 
                  id="gender_other" 
                  value="other" 
                  name="gender" // Corrected: Same name for all radios
                  className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" 
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>

          {/* 3. Location Input */}
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="e.g., City, State/Province"
              className="p-3 w-full bg-blue-50 border border-blue-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 shadow-inner"
            />
          </div>

        </div>
      </div>
    </div>
  </>
    )
  }
  export default PatientInfo;