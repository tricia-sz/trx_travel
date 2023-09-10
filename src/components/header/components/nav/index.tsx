import Image from 'next/image';
import Link from 'next/link';

import logoTrxTravel from 'public/logo_trx-travel.svg';
import { FaMasksTheater } from 'react-icons/fa6';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { FaTrainTram } from 'react-icons/fa6';
import { GiMountainRoad } from 'react-icons/gi';

export function Nav() {
  return (
    <nav className='w-full flex justify-center items-center gap-8 py-20 text-white'>
      <Link href='/' className='mr-64'>
        <Image
          src={logoTrxTravel}
          alt='Logo of site Trx Travel'
          quality={100}
          priority={true}
        />
      </Link>
      <Link href='/pa' className='flex gap-1'>
        Belém PA
        <FaMasksTheater size={24} />
      </Link>
      <Link href='/sp' className='flex gap-1'>
        São Paulo SP
        <BsFillBuildingsFill size={24} />
      </Link>
      <Link href='/rj' className='flex gap-1'>
        Rio de Janeiro RJ
        <FaTrainTram size={24} />
      </Link>
      <Link href='/fl' className='flex gap-1'>
        Delphinopolis MG
        <GiMountainRoad size={24} />
      </Link>
      <button className='flex bg-gradient-to-r from-cyan-400 from-20% via-cyan-400 via-30% to-sky-500 to-70%  text-blue-700 font-bold  p-2 px-8 rounded-lg'>
        Blog
      </button>
    </nav>
  );
}
