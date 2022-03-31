import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  { name: 'GitHub', src: 'github', url: 'https://github.com/mikekubn' },
  { name: 'LinkedIn', src: 'linkedin', url: 'https://www.linkedin.com/in/michael-kub%C3%ADn-b48019121/' },
];

const Footer = (): React.ReactElement => (
  <footer className="border-t footer h-14 border-sky500/20 shadow-sky500/50">
    {
      images.map((val) => (
        <Link key={val.name} href={val.url} passHref>
          <a target="_blank" rel="noreferrer">
            <div className="p-4 flex-row-center-content">
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
