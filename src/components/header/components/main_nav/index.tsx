import { Container } from '@/components/container';
import Image from 'next/image';
import plane from 'public/aviao.svg';

export function MainNav() {
  return (
    <Container>
      {/* <div className='max-w-screen-sm h-42 absolute bottom-[450px] right-[900px]'>
        <Image src={plane} alt={'Aviao do head'} width={300} height={300} />
      </div> */}
      <div className='w-full h-96 text-center'>
        <h1 className='text-6xl mb-8'>
          Descubra sua vida, viaje <br /> para onde quiser
        </h1>
        <span className='text-2xl'>
          Quer explorar o paraíso natural do mundo, vamos encontrar o <br />{' '}
          melhor destino do mundo conosco.
        </span>
      </div>
    </Container>
  );
}
