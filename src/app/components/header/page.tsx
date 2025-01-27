
import Image from "next/image";
import { PiCityFill } from "react-icons/pi";


import TravelLogo from "@/assets/logo-travel.png"
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";



export default function Header() {

  return (
    <header className={` flex justify-between items-center text-slate-200  text-center antialiased text-xl`} >
      <section className="w-full bg-bannerImg  bg-no-repeat bg-cover bg-inherit h-screen flex-wrap">
        <div className="w-full  flex justify-between items-center p-8">
          <div className="pl-36">
            <Image src={TravelLogo} alt="Logo TRX travel" width={250} />
          </div>
          <div className="justify-end items-end">
            <ul className=" w-full flex">
              <li className="flex gap-2 items-center p-2 m-1 hover:text-blue-950">
                
                <p className="hover:bg-slate-400 text-blue-100 hover:text-blue-900 flex gap-2 rounded-full p-2 tracking-tight">  São Paulo <PiCityFill className="text-yellow-600" size={24} /></p>
              </li>
              <li className="flex gap-2 items-center p-2 m-1 ">
               
                <p className="hover:bg-slate-400 text-blue-100 hover:text-blue-900 flex gap-2 rounded-full p-2 tracking-tight">  Rio de Janeiro<FaUmbrellaBeach className="text-yellow-600 " size={24} /> </p>
              </li>
             
              <li className="flex gap-2 items-center p-2 m-1 ">
               
                <p className="hover:bg-slate-400 hover:text-blue-900 text-blue-100 flex gap-2 rounded-full p-2 tracking-tight"> Belém  <GiPalmTree className="text-yellow-600 " size={24} /> </p>
              </li>

              <button className="w-28 bg-white p-2 m-10 rounded-md text-blue-700 font-medium shadow-2xl border-2 hover:bg-blue-500 hover:text-white  ">Blog</button>
            </ul>
          </div>
        </div>

        <div className="max-w-screen-2xl justify-center mx-auto text-wrap p-48 ">
          <h2 className="text-7xl font-semibold pb-4 tracking-tighter  ">
            Descubra sua vida, viaje
          </h2>
          <h2 className="text-7xl font-semibold pb-10 tracking-tighter  ">
            para onde quiser
          </h2>
          <p className="max-w-screen-md font-medium text-2xl tracking-tighter mx-auto">
            Quer explorar o paraíso natural do mundo, vamos encontrar o melhor destino do mundo conosco.
          </p>
        </div>
      </section>
    </header>
  );
}

