import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Container } from '@/components/container';
import { Flight } from '@/components/flight';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='w-full'>
      <Flight />
    </main>
  );
}
