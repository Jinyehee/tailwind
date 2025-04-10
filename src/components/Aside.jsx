import Task from "./Task";

export default function Aside({ setAddMain, post, setSelectedTask }) {
   return (
      <div className="bg-gray-900 w-1/5 h-screen font-bold text-white px-6 py-10 flex flex-col gap-5">
         <h1 className="text-2xl">YOUR PROJECT</h1>
         <button
            className="w-20 h-10 border-gray-500 border-1 rounded-xl text-gray-500"
            onClick={() => {
               setAddMain(false);
               setSelectedTask(null);
            }}
         >
            Add
         </button>
         <ul className=" text-gray-500">
            {post.map((item) => {
               return (
                  <li
                     key={item.id}
                     onClick={() => {
                        setSelectedTask(item);
                     }}
                  >
                     {item.title}
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
