import { forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ setShowmodal }, ref) => {
   return createPortal(
      <dialog
         className="rounded-lg shadow-lg p-10 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] h-[20%] m-0 text-center"
         ref={ref}
      >
         <p className="text-xl mb-10">내용을 입력하세요!!</p>
         <button
            className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition duration-300"
            onClick={() => {
               ref.current.close();
               setShowmodal(false);
            }}
         >
            네
         </button>
      </dialog>,
      document.getElementById("modal")
   );
});

export default Modal;
