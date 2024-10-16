import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { ThreeDCardDemo } from "../components/Jobcard";

const Jobposting = () => {
  return (
    <>
      <nav className="bg-neutral-950 text-white flex justify-between items-center h-[10vh] p-5 fixed top-0 left-auto right-auto transform  w-full z-50">
        <div className="logo font-bold text-2xl">Tomorrow Tech Code(TTC)</div>
        <div className="flex justify-center items-center gap-x-5">
          <div className="flex justify-center items-center gap-2">
            <IoSearch color="white" size={25} fontWeight={10} />
            <input
              type="text"
              placeholder="Title or company"
              className="rounded-md p-2 w-[30vw] bg-gray-600 text-white border border-gray-400"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <CiLocationOn color="white" size={25} fontWeight={30} />
            <input
              type="text"
              placeholder="location"
              className="rounded-md p-2 bg-gray-600 text-white border w-[20vw] border-gray-400"
            />
          </div>
        </div>
      </nav>
      <div className="bg-neutral-950 h-auto grid grid-cols-3 gap-8 justify-items-center p-5">
        <ThreeDCardDemo
          post="Travel blogger"
          company="wanderlust magzine"
          type="freelance"
          stipend="$100/hr"
          location="india"
        />
        <ThreeDCardDemo
          post="Travel blogger"
          company="wanderlust magzine"
          type="freelance"
          stipend="$100/hr"
          location="india"
        />
        <ThreeDCardDemo
          post="Travel blogger"
          company="wanderlust magzine"
          type="freelance"
          stipend="$100/hr"
          location="india"
        />
        <ThreeDCardDemo
          post="Travel blogger"
          company="wanderlust magzine"
          type="freelance"
          stipend="$100/hr"
          location="india"
        />
        <ThreeDCardDemo
          post="food blogger"
          company="mithas"
          type="contract based"
          stipend="$140/day"
          location="india"
        />
        <ThreeDCardDemo
          post="food blogger"
          company="mithas"
          type="contract based"
          stipend="$140/day"
          location="india"
        />
        <ThreeDCardDemo
          post="food blogger"
          company="mithas"
          type="contract based"
          stipend="$140/day"
          location="india"
        />

      </div>
    </>
  );
};

export default Jobposting;
