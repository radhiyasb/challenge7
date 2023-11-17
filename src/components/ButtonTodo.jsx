import React from "react";
import { Button } from "react-bootstrap";

 function ButtonTodo({ clickedTodo }) {
   return (
     <div className="container">
       <Button
         style={{ width: "25rem", height: "3rem" }}
         variant="info text-white"
         onClick={clickedTodo}
       >Todo
       </Button>
     </div>
   );
 }

// export default ButtonTodo;

// function ButtonTodo ({clickedTodo}) {
//   return(
//   <div className='d-grip gap-2'>
//     <Button className='w-[25rem] h-[3rem] mb-[0.3rem] mt-[0.3rem] info text-white' onClick={clickedTodo}>
//       ToDo
//     </Button>
//   </div> 
//   ) 
// }

export default ButtonTodo;