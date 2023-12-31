import { BiSolidPlaneAlt } from 'react-icons/bi';
import { ImAirplane } from 'react-icons/im';
import { IoAirplaneSharp, IoCalendarNumberSharp } from 'react-icons/io5';

export function Cards() {
  return (
    <>
      {/* <div className='w-96 h-40 flex justify-center items-center border-gray-300 border-solid border-2 rounded-xl gap-8 leading-10'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col'>
            <span className='text-black/50'>Living From</span>
            <span className='text-2xl'>São Paulo</span>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className=' border border-gray-400 border-dashed rounded-full p-4'>
            <IoAirplaneSharp color='#9399a2' size={35} className='' />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col'>
            <span className='text-black/50'>Going to</span>
            <span className='text-2xl'>New Work</span>
          </div>
        </div>
      </div> */}
      <div className='h-40 flex justify-center items-center  border-gray-300 border-solid border-2 rounded-xl gap-8 p-4 leading-10'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center gap-2'>
              <span className='text-black/50'>Living From</span>
            </div>
            <span className='text-2xl'>São Paulo</span>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='border border-gray-400 border-dashed rounded-full p-4'>
            <IoAirplaneSharp color='#9399a2' size={35} />
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <div className='flex flex-col '>
            <div className='flex justify-center items-center gap-2'>
              <span className='text-black/80 leading-10'>Going to</span>
            </div>
            <span className='text-2xl'>Argentina</span>
          </div>
        </div>
      </div>
      <div className='w-[500px] h-40 flex justify-center items-center  border-gray-300 border-solid border-2 rounded-xl gap-8 leading-10'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center gap-2'>
              <span className='text-black/50'>Leave</span>
              <BiSolidPlaneAlt size={24} color='#3E86F5' />
            </div>
            <span className='text-2xl'>13 Nov, Wed</span>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='border border-gray-400 border-dashed rounded-full p-4'>
            <IoCalendarNumberSharp color='#9399a2' size={35} />
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <div className='flex flex-col '>
            <div className='flex justify-center items-center gap-2'>
              <span className='text-black/80 leading-10'>Return</span>
              <ImAirplane size={18} color='#3E86F5' />
            </div>
            <span className='text-2xl'>09 Nov, Sat</span>
          </div>
        </div>
      </div>
    </>
  );
}
