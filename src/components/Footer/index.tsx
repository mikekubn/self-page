import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  { name: 'GitHub', src: 'github', url: 'https://github.com/mikekubn' },
  { name: 'LinkedIn', src: 'linkedin', url: 'https://www.linkedin.com/in/michael-kub%C3%ADn-b48019121/' },
];

const Footer = (): React.ReactElement => (
  <footer className="bottom-0 left-0 flex items-center justify-center w-screen border-t h-14 border-sky500/20 shadow-sky500/50">
    {
      images.map((val) => (
        <Link key={val.name} href={val.url} passHref>
          <a target="_blank" rel="noreferrer">
            <div className="flex flex-row items-center justify-center p-4">
              <Image src={`/img/${val.src}.png`} width={28} height={28} />
              <p className="ml-3">{val.name}</p>
            </div>
          </a>
        </Link>
      ))
    }
  </footer>
);

export default Footer;
