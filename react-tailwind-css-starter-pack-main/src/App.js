import { useState } from "react";
import "./App.css";

function App() {

  const[count, setCount] =  useState(0);
// Made By Amitoj Singh
 function decreaseHandler(){
    setCount(count - 1);
   }
 function increaseHandler(){
    setCount(count + 1);
 }
 function resetHandler(){
    setCount(0);
 }

  // const[count, setCount] = useState(0);

  // function decreaseHandler() {
  //   setCount(count-1);
  // }
  // function increaseHandler() {
  //   setCount(count+1);
  // }

  // function resetHandler() {
  //   setCount(0);
  // }

  return (
  //  <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">

    
  //   <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>

  //   <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">

  //     <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
  //       -
  //     </button>
      
  //     <div className="font-bold gap-12 text-5xl">
  //       {count}
  //     </div>

  //     <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
  //       +
  //     </button>

  //   </div>

  //   <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
  //     Reset
  //   </button>

  //  </div>fon

  // Developed Again By Amitoj Singh
        <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-600 flex-col gap-10">
          <div className="text-[#47a1fa] font-medium text-2xl">Increment and Decrement</div>

          <div className="flex flex-row bg-white gap-10 py-3 rounded-sm justify-center items-center text-[#344513]">
            <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-2xl">
                 -
            </button>

          {/* Initialize the value */}
            <div>
               {count}
            </div> 

            <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-2xl ">
                +
            </button>
    
           </div>
            <button className="bg-blue-600 w-20 border text-[white] font-serif font-semibold" onClick={resetHandler} > Reset </button>
        </div>
  );
}

export default App;
