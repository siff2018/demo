import { Inter, Lusitana } from 'next/font/google';

// Configure the fonts
const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

export { inter, lusitana };