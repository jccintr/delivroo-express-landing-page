import Logo from '../components/Logo';
import { STORE_SIGNUP_URL, RIDER_APP_URL } from '../config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">
          <div className="max-w-xs">
            <Logo size="sm" />
            <p className="text-sm text-ink-soft mt-4 leading-relaxed">
              A plataforma que conecta lojas a entregadores independentes, em tempo real, na
              mesma cidade.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-heading font-bold text-ink mb-3">Plataforma</p>
              <ul className="flex flex-col gap-2 text-ink-soft">
                <li>
                  <a href="#como-funciona" className="hover:text-orange transition-colors">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#lojistas" className="hover:text-orange transition-colors">
                    Para lojistas
                  </a>
                </li>
                <li>
                  <a href="#entregadores" className="hover:text-orange transition-colors">
                    Para entregadores
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-heading font-bold text-ink mb-3">Comece agora</p>
              <ul className="flex flex-col gap-2 text-ink-soft">
                <li>
                  <a href={STORE_SIGNUP_URL} target="_blank" className="hover:text-orange transition-colors">
                    Cadastrar minha loja
                  </a>
                </li>
                <li>
                  <a href={RIDER_APP_URL} className="hover:text-orange transition-colors">
                    Quero ser entregador
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-line mt-10 pt-6 text-xs text-ink-soft">
          © {year} Delivroo Express. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
