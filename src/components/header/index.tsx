import logoTrxTravel from 'public/logo_trx-travel.svg';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { FaTrainTram } from 'react-icons/fa6';
import { FaMasksTheater } from 'react-icons/fa6';
import { GiMountainRoad } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../container';

export function Header() {
  return (
    <header className='w-full bg-[url("/bgh.svg")] bg-cover bg-center h-trx  justify-center item-center text-white'>
      <nav className='flex justify-center items-center font-sans gap-8 py-10'>
        <Link href='/' className='mr-64'>
          <Image
            className='flex justify-center items-center'
            src={logoTrxTravel}
            alt='Logo of site Trx Travel'
            quality={100}
            priority={true}
          />
        </Link>
        <Link href='/pa' className='flex  gap-1'>
          Belém PA
          <FaMasksTheater size={24} color='#a1caf8' />
        </Link>
        <Link href='/sp' className='flex  gap-1'>
          São Paulo SP
          <BsFillBuildingsFill size={24} color='#a1caf8' />
        </Link>
        <Link href='/rj'className='flex  gap-1'>
          Rio de Janeiro RJ
          <FaTrainTram size={24} color='#a1caf8' />
        </Link>
        <Link href='/fl' className='flex  gap-1'>
            Delphinopolis MG
            <GiMountainRoad size={24} color='#a1caf8' />
        </Link>
        <button className='bg-sky-200 text-sky-500 font-bold  p-2 px-8 rounded-lg'>Blog</button>
     </nav>
     <Container>
      <div className='w-full h-80 mt-40 justify-center items-center mx-auto text-center text-white'>
        <h1 className='text-7xl mb-10'>Descubra sua vida, viaje <br/ > para onde quiser</h1>
        <span className='text-2xl'>
          Quer explorar o paraíso natural do mundo, vamos encontrar o  <br/ > melhor destino do mundo conosco.
        </span>
      </div>
      </Container>
    </header>
  );
}
