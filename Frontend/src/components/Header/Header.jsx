import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <header className="w-full h-15 flex justify-between items-center px-4 py-2 shadow-md text-black">
      <div className="flex justify-between items-center gap-2">
        {/* logo */}
        <div className="text-4xl text-black">
          <MdOutlineHealthAndSafety />
        </div>
        <div className="font-bold">Rural Healthcare Advisory</div>
      </div>
      <div>
        {/* nav options */}
        <ul className="md:flex justify-between items-center gap-6 hidden">
          <Link to="/">Home</Link>
          <Link to="/symptomsForm">Check Symptoms</Link>
          <li>Consult Doctor</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Language</li>
        </ul>
        <div className="md:hidden text-3xl">&#8801;</div>
      </div>
      <div>
        {/* login/signip */}
        <Link to="/login" className="p-2 bg-[#17cf54] rounded hover:cursor-pointer">Login/Signup</Link>
      </div>
    </header>
    </>
  );
}

export default Header;
