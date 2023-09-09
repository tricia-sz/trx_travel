import { Container } from '../container';
import { Cards } from '@/components/cards';
import { FaCity, FaMagnifyingGlass } from 'react-icons/fa6';
import { BiSolidPlaneAlt } from 'react-icons/bi';

export function Flight() {
  return (
    <Container>
      <div className='flex justify-center items-center bg-slate-200 h-32 w-72 rounded-xl absolute bottom-0'>
        <div className='flex justify-center items-center gap-8'>
          <div className='flex items-center gap-1 bg-blue-400/50 rounded-md'>
            <BiSolidPlaneAlt color='#3E86F5' />
            <span>Flight</span>
          </div>
          <div className='flex items-center gap-1'>
            <FaCity color='#3E86F5' />
            <span>Hotel</span>
          </div>
        </div>
      </div>
      <div className='w-[1180px] h-72 flex justify-center items-center gap-8 bg-slate-200 rounded-[50px] absolute bottom-[-230px]'>
        <Cards />
        <div className='bg-blue-400 p-10 rounded-full'>
          <FaMagnifyingGlass size={50} color='#fff' />
        </div>
      </div>
    </Container>
  );
}
