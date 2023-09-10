import { MainNav } from './components/main_nav';
import { Nav } from './components/nav';

export function Header() {
  return (
    <header className='w-full bg-gradient-to-r from-blue-600 from-10% via-sky-400  via-30% to-sky-700 to-90% text-white'>
      <Nav />
      <MainNav />
    </header>
  );
}
