import Mainshow from "./components/Mainshow";
import Aside from "./components/Aside";
import Addmain from "./components/Addmain";
import Task from "./components/Task";
import Modal from "./components/Modal";
import { useRef, useState } from "react";
import ModeButton from "./components/ModeButton";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
   const [addMain, setAddMain] = useState(true);
   const [selectedTask, setSelectedTask] = useState(null);
   const [post, setPost] = useState([]);
   const [showmodal, setShowmodal] = useState(false);
   console.log(post);
   console.log(addMain);
   const modalRef = useRef(null);

   const deleteTask = (taskId) => {
      setPost((prev) => prev.filter((task) => task.id !== taskId));
      setSelectedTask(null);
      setAddMain(true);
   };

   if (showmodal) {
      modalRef.current.showModal();
   }

   return (
      <ThemeProvider>
         <div className="m-0 p-0 flex pink:bg-pink-50">
            <ModeButton />
            <Aside
               setAddMain={setAddMain}
               post={post}
               setSelectedTask={setSelectedTask}
            />
            {selectedTask ? (
               <Task task={selectedTask} deleteTask={deleteTask} />
            ) : addMain ? (
               <Mainshow setAddMain={setAddMain} />
            ) : (
               <Addmain
                  setAddMain={setAddMain}
                  setPost={setPost}
                  setShowmodal={setShowmodal}
               />
            )}
         </div>
         <Modal ref={modalRef} setShowmodal={setShowmodal} />
      </ThemeProvider>
   );
}

export default App;
