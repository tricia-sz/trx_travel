import { Container } from '../container';
import { Cards } from '@/components/cards';
import { FaCity, FaMagnifyingGlass } from 'react-icons/fa6';
import { BiSolidPlaneAlt } from 'react-icons/bi';

export function Flight() {
  return (
    <Container>
      <div className='flex justify-center items-center bg-slate-100 h-32 w-72 rounded-xl absolute bottom-[400px]'>
        <div className='flex justify-center items-center gap-8 mb-10 '>
          <div className='flex items-center gap-1 bg-blue-400/50 p-4 rounded-2xl'>
            <BiSolidPlaneAlt color='#3E86F5' />
            <span>Flight</span>
          </div>
          <div className='flex items-center gap-1'>
            <FaCity color='#3E86F5' />
            <span>Hotel</span>
          </div>
        </div>
      </div>
      <div className='w-[1180px] h-72 flex justify-center items-center gap-8 bg-slate-100 rounded-[50px] absolute bottom-[160px]'>
        <Cards />
        <div className='bg-gradient-to-r from-cyan-400 from-20% via-cyan-400 via-30% to-sky-500 to-70%  p-10 rounded-full'>
          <FaMagnifyingGlass size={50} color='#fff' />
        </div>
      </div>
    </Container>
  );
}
