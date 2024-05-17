import Link from 'next/link';

export const NavMenu = () => {
  return (
    <nav>
      <Link href="/">Главная</Link>
      <Link href="/about"> О нас</Link>
    </nav>
  );
};
