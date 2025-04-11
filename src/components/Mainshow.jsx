import Img from "../assets/cute.png";

export default function Mainshow({ setAddMain }) {
   return (
      <div className="w-4/5 flex flex-col items-center p-20 gap-5">
         <img src={Img} alt="" className="w-60" />
         <p className="font-blod text-2xl">No Project Selected</p>
         <p>Select a project or get started with a new one</p>
         <button
            className="bg-blue-950 text-white p-3 rounded-xl duration-300 pink:bg-pink-300 "
            onClick={() => setAddMain((prov) => !prov)}
         >
            Create new project
         </button>
      </div>
   );
}
