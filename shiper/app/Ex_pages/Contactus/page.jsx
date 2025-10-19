import { NetworkIcon, SendIcon } from "lucide-react";

export default function Contactus() {
    return(
        <div className="p-4 bg-gray-200 "> 
                       {/* End Form */}
        <form className=" rounded-lg p-6 flex flex-col text-black my-[5rem]">
          <span className="flex justify-between items-center text-xl font-semibold mb-4">
            Send us a message <NetworkIcon className="animate-spin text-gray-600" />
          </span>

          <label className="mb-1 text-sm font-medium">Enter Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full p-2 mb-4 rounded border"
          />

          <label className="mb-1 text-sm font-medium">Enter Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-2 mb-4 rounded border"
          />

          <label className="mb-1 text-sm font-medium">Enter Message</label>
          <textarea
            placeholder="Enter Message (Optional)"
            className="w-full p-3 mb-4 rounded border"
            rows={4}
          />

          <button
            type="submit"
            className="rounded-sm p-3 flex justify-center items-center gap-2 text-white bg-black hover:bg-gray-900"
          >
            Send <SendIcon size={18} />
          </button>
        </form>
      
        </div>
    )
}