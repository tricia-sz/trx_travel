import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Container } from '@/components/container';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='w-full'>
      <Container>Container</Container>
    </main>
  );
}
