import * as React from 'react';
import { GoHeart } from 'react-icons/go';

const Footer = (): React.ReactNode => {
  return (
    <footer
      className="pt-6 pb-6 text-center text-xs text-gray-600"
      role="contentinfo"
    >
      <p className="text-balance">
        Fait avec <GoHeart role="presentation" className="inline-flex" />,
        réalisé pour l'opération de{' '}
        <a
          href="https://www.natagora.be/sauvetage-des-batraciens"
          title="batraciens.be"
          className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
        >
          Sauvetage des batraciens
        </a>
        , pour{' '}
        <a
          href="https://www.natagora.be/"
          title="Natagora"
          className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
        >
          Natagora
        </a>
      </p>

      <p>
        Une erreur ? Une idée ? Contribuez au projet sur{' '}
        <a
          href="https://github.com/lebolnobel/rainne-obs"
          title="Github, rainne-obs"
          className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
