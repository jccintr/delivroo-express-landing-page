import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { STORE_SIGNUP_URL, RIDER_APP_URL } from '../config';

const links = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#lojistas', label: 'Para lojistas' },
  { href: '#entregadores', label: 'Para entregadores' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#topo">
          <Logo size="sm" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink/70 hover:text-orange transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={RIDER_APP_URL}
            className="text-sm font-bold text-ink px-4 py-2.5 rounded-full border-2 border-ink/10 hover:border-orange hover:text-orange-dark transition-colors"
          >
            Sou entregador
          </a>
          <a
            href={STORE_SIGNUP_URL}
            className="bg-orange text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-orange-dark transition-colors shadow-lg shadow-orange/25"
          >
            Cadastrar minha loja
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className="w-6 h-0.5 bg-ink rounded-full" />
          <span className="w-6 h-0.5 bg-ink rounded-full" />
          <span className="w-6 h-0.5 bg-ink rounded-full" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-line px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <a
              href={RIDER_APP_URL}
              onClick={() => setMenuOpen(false)}
              className="text-center text-sm font-bold text-ink px-4 py-2.5 rounded-full border-2 border-ink/10"
            >
              Sou entregador
            </a>
            <a
              href={STORE_SIGNUP_URL}
              onClick={() => setMenuOpen(false)}
              className="text-center bg-orange text-white text-sm font-bold px-5 py-2.5 rounded-full"
            >
              Cadastrar minha loja
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
