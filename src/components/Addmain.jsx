import { useState } from "react";

export default function Addmain({ setAddMain, setPost, setShowmodal }) {
   const [list, setList] = useState({
      id: 0,
      title: "",
      content: "",
      date: "",
   });

   const handlePost = (e) => {
      setList((prev) => {
         return {
            ...prev,
            [e.target.name]: e.target.value,
         };
      });
   };

   const addPost = () => {
      if (!list.title || !list.content || !list.date) {
         setShowmodal(true);
         return;
      }
      const newList = {
         id: Math.floor(Math.random() * 1000000),
         title: list.title,
         content: list.content,
         date: list.date,
      };

      setPost((prev) => [...prev, newList]);

      setList({
         id: 0,
         title: "",
         content: "",
         date: "",
      });

      setAddMain((prev) => !prev);
   };

   return (
      <div className="flex flex-col gap-5 w-[35rem] ml-16 mt-20 ">
         <div className="flex gap-4  justify-end">
            <button
               className="px-6 py-2"
               onClick={() => setAddMain((prov) => !prov)}
            >
               Cancel
            </button>
            <button
               className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition duration-300"
               onClick={addPost}
            >
               Create
            </button>
         </div>
         <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Title</label>
            <input
               type="text"
               className="bg-gray-100 p-3 rounded-md border border-gray-300 focus:outline-none"
               placeholder="Enter the title"
               name="title"
               value={list.title}
               onChange={handlePost}
            />
         </div>
         <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Description</label>
            <textarea
               className="bg-gray-100 p-3 rounded-md border border-gray-300 focus:outline-none"
               placeholder="Enter the description"
               name="content"
               value={list.content}
               onChange={handlePost}
            />
         </div>
         <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Date</label>
            <input
               type="date"
               className="bg-gray-100 p-3 rounded-md border border-gray-300 focus:outline-none"
               name="date"
               value={list.date}
               onChange={handlePost}
            />
         </div>
      </div>
   );
}
