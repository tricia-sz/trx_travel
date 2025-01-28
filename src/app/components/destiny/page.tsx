import { BsBuildingsFill } from "react-icons/bs";
import {  FaPlaneArrival, FaPlaneDeparture, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import {  IoSearch } from "react-icons/io5";
import { PiAirplaneTiltFill } from "react-icons/pi";

export default function Destiny() {

  return (
    <section className="max-w-screen-md  items-center justify-center mx-auto">
      <div>
        <div className="bg-gray-100 flex w-72   rounded-t-3xl items-center justify-center p-4 gap-4">
          <div className=" ">
            <button className="flex gap-2 p-3 rounded-3xl hover:bg-blue-300"><PiAirplaneTiltFill color="#3E86F5" size={24}/>Fight</button>
          </div>
          
          <div className="p-2 gap-2 flex">
            <button className="flex gap-2 p-3 rounded-3xl hover:bg-blue-300"><BsBuildingsFill color="#3E86F5" size={24}/>Hotel</button>
          </div>
        </div>
        <div className="">
          <div className="flex bg-gray-100 rounded-r-2xl gap-6 pt-8 pb-8 justify-center">
              <div className="flex justify-center items-center p-2 gap-4 border border-gray-300 rounded-xl">
                <div className="">
                  <p className="text-gray-500">Livin From</p>
                  <span className="text-gray-900">Dubai</span>
                </div>
                 <div className="border border-dashed border-gray-500 rounded-full items-center justify-center "><IoIosAirplane className="text-gray-400" size={24}/></div>
                 <div className="p-4">
                  <p className="text-gray-500">Goin to</p>
                  <span className="text-gray-900">New York</span>
                </div>
              </div>

              <div className="flex  justify-center items-center p-8 gap-8 border border-gray-300 rounded-xl">
                <div className="">
                 <div className="flex gap-2 justify-center items-center">
                  <p className="text-gray-500">Leave </p><FaPlaneDeparture color="#3E86F5" />
                 </div>
                  <span className="text-gray-900">23 Jan, Sat</span>
                </div>
                 <div className="items-center justify-center "><FaRegCalendarAlt className="text-gray-400" size={24}/></div>
                 <div className="">
                 <div className="flex gap-2 justify-center items-center">
                  <p className="text-gray-500">Return </p><FaPlaneArrival color="#3E86F5" />
                 </div>
                  <span className="text-gray-900">23 Jan, Sat</span>
                </div>
              </div>

              <div className=" w-28 flex justify-center items-center p-2 gap-2 rounded-full bg-blue-400">
                <IoSearch size={70} color="#FFF"/>
                
              </div>
            </div>
          </div>
          
          
      </div>
    </section>
  );
}

