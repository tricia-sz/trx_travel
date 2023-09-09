import logoTrxTravel from 'public/logo_trx-travel.svg';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { FaTrainTram } from 'react-icons/fa6';
import { FaMasksTheater } from 'react-icons/fa6';
import { GiMountainRoad } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../container';
import plane from 'public/aviao.svg';

export function Header() {
  return (
    <header className='w-full bg-gradient-to-r from-blue-600 from-10% via-sky-400  via-30% to-sky-800 to-90% justify-center item-center text-white'>
      <nav className='flex justify-center items-center font-sans gap-8 py-10'>
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
        <button className='bg-gradient-to-r from-cyan-400 from-20% via-cyan-400 via-30% to-sky-500 to-70%  text-white font-bold  p-2 px-8 rounded-lg'>
          Blog
        </button>
      </nav>
      <Container>
        <div className='max-w-screen-sm h-42 absolute bottom-[450px] right-[900px]'>
          <Image src={plane} alt={'Aviao do head'} width={300} height={300} />
        </div>
        <div className='max-w-screen-sm h-96 mt-28 mx-auto text-sky-100/80'>
          <h1 className='text-6xl mb-8 text-center'>
            Descubra sua vida, viaje <br /> para onde quiser
          </h1>
          <span className='text-2xl text-center'>
            Quer explorar o paraíso natural do mundo, vamos encontrar o <br />{' '}
            melhor destino do mundo conosco.
          </span>
        </div>
      </Container>
    </header>
  );
}
