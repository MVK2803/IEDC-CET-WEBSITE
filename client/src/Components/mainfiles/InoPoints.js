import React from "react";
import '../../index.css';
import iedcvideo from "../../Assets/Videos/INO.mp4";

function Ino( {sectionRef}) {
  return (
    
        <div  ref={sectionRef} className = "w-3/4 border-t-[1px] border-t-gray-800 pt-12 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-12 block text-4xl font-bold text-white" > INO Points  </h>
       
      <div className="flex lg:flex-row items-center flex-col gap-16 h-full">
        <div className="  my-auto">
          
          <p className="text-[#9ca9b3] text-xl text-left ">Introducing 𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦 A revolution in how CET thinks. Your work and hardships will now be recognized by 𝗜𝗘𝗗𝗖 𝗖𝗘𝗧. Earn through registrations to events and workshops Redeem cash prize and vouchers. So what are you waiting for ! Start farming your INO POINTS now. 𝗖𝗢𝗠𝗣𝗘𝗧𝗘 𝗖𝗢𝗟𝗟𝗘𝗖𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧</p>
        </div>
        <video width={528} height={290.4} controls src={iedcvideo} />
      </div>
      <button className="bg-[#5658dd] text-white px-4 py-2 rounded hover:bg-green-600"
          ><a href="/inoTable">View Ino Table</a></button>
    </div>
  );
}

export default Ino;