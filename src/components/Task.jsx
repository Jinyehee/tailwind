import { useState } from "react";

export default function Task({ task, deleteTask }) {
   const [comment, setComment] = useState("");
   const [comments, setComments] = useState([]);

   const handleComment = (e) => {
      setComment(e.target.value);
   };

   const handelComments = () => {
      if (comment) {
         setComments((prev) => [...prev, comment]);
         setComment("");
         console.log(comments);
      }
   };

   const clearComment = (index) => {
      const newComments = [...comments];
      newComments.splice(index, 1);
      setComments(newComments);
   };
   return (
      <div className="gap-5 w-[35rem] ml-16 mt-20 ">
         <div className="flex gap-4  justify-between mb-2">
            <p className="text-2xl">{task.title}</p>
            <button className="py-2" onClick={() => deleteTask(task.id)}>
               Delete
            </button>
         </div>
         <p className="text-gray-400 mb-4">{task.date}</p>
         <p className="mb-4 pb-4 border-b-1 border-gray-500">{task.content}</p>
         <p className="text-2xl mb-4">Tasks</p>
         <div className="flex justify-between gap-5 mb-4">
            <input
               type="text"
               className="bg-gray-100 px-2 py-1 border border-gray-300 focus:outline-none w-full"
               onChange={handleComment}
               value={comment}
            />
            <button className="w-20" onClick={handelComments}>
               Add Task
            </button>
         </div>
         {comments.length === 0 ? (
            <p>This project does not have any tasks yet.</p>
         ) : (
            <ul className="flex flex-col bg-gray-100 p-4 mt-2 gap-3">
               {comments.map((item, index) => {
                  return (
                     <li className="flex justify-between" key={index}>
                        <p>{item}</p>
                        <button onClick={() => clearComment(index)}>
                           Clear
                        </button>
                     </li>
                  );
               })}
            </ul>
         )}
      </div>
   );
}
