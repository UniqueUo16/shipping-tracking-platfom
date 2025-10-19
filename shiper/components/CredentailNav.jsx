import { ChevronDown } from "lucide-react";

export default function CredentailNav() {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center bg-[#4853b4] sm:p-[1rem] sm:gap-[4rem] shadow-2xl  shadow-[#0e0635] rounded-md"
      >
        
        <div className="flex gap-2.5 py-[0.3rem] text-sm sm:text-base">
          Join The Newsletter <ChevronDown size={16} className="mt-[0.2rem]" />
        </div>
        <div className="flex gap-2.5 py-[0.3rem] text-sm sm:text-base sm:ml-[-27rem] items-start ">
           Newsletter <ChevronDown size={16} className="mt-[0.2rem]" />
        </div>
        

        <div className="flex flex-wrap gap-4 sm:gap-[2rem] items-center mt-2 sm:mt-0 p-1">
          <span className="flex gap-2.5 text-sm sm:text-base">
            FAQs <ChevronDown size={16} className="mt-[0.2rem]" />
          </span>

          <span className="flex border border-black p-2 rounded-2xl px-[1rem] text-sm sm:text-base">
            Login
          </span>

          <span className="flex gap-2.5 px-[1.5rem] sm:px-[2rem] py-2 rounded-sm bg-[#3a2097] text-white hover:bg-white hover:text-neutral-800 text-sm sm:text-base">
            SignIn
          </span>
        </div>
      </div>
    </div>
  );
}
