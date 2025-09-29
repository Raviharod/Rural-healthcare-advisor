import PatientInfo from "./PatientInfo";
import SymptomInput from "./SymptomInput";
import AdditionalQue from "./AdditionalQue";
function SymptomForm() {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center gap-4 mt-10 bg-[#f6f8f6]">
        <h1 className="text-2xl md:text-4xl text-[#17cf54] font-bold">
          Symptom Checker
        </h1>
        <p className="font-bold mx-3">
          Tell us how you're feeling, and our AI will provide some insights.
        </p>
      </div>
      <div>
        <form action="">
          {/* patient information */}
          <PatientInfo></PatientInfo>

          {/* symptom input  */}
          <SymptomInput></SymptomInput>

          {/* additional questions */}
          <AdditionalQue></AdditionalQue>
        </form>
      </div>
    </>
  );
}

export default SymptomForm;
