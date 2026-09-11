import PhoneFrame from '../components/PhoneFrame';
import riderHome from '../assets/rider-home.jpg';
import { STORE_SIGNUP_URL } from '../config';

export default function Hero() {
  return (
    <section id="topo" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange/10 via-cream to-cream" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-white border border-ink/10 rounded-full px-3.5 py-1.5 text-xs font-bold text-orange-dark shadow-sm">
            🛵 Entregas sob demanda, sem entregador fixo
          </span>

          <h1 className="font-heading font-extrabold text-[2.4rem] leading-[1.08] sm:text-5xl sm:leading-[1.08] text-ink mt-5 text-balance">
           Suas entregas<br />
            <span className="text-orange">Sem complicações</span>
          </h1>

          <p className="text-lg text-ink-soft mt-6 max-w-lg leading-relaxed">
            O Delivroo Express conecta sua loja a entregadores da sua cidade em
            tempo real. Sem folha de pagamento fixa, sem diária e sem entregador parado esperando pedido. Você
            paga ao entregador apenas o valor das entregas concluídas.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a  href={STORE_SIGNUP_URL}
              target="_blank"
              className="bg-orange text-white font-bold px-7 py-4 rounded-full hover:bg-orange-dark transition-colors shadow-lg shadow-orange/30"
            >
              Quero cadastrar minha loja
            </a>
            <a href="#entregadores"
              className="font-bold text-ink px-7 py-4 rounded-full border-2 border-ink/10 hover:border-ink/30 transition-colors"
            >
              Quero entregar
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-sm text-ink-soft">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green" /> Acompanhe em tempo real
            </span>
           
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green" /> Somente entregadores locais
            </span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-8 -z-10 bg-orange/10 rounded-full blur-3xl" />
          <PhoneFrame
            src={riderHome}
            alt="Tela inicial do app do entregador Delivroo, mostrando faturamento do dia e entregas disponíveis"
            className="w-60 max-w-full animate-floaty"
          />
        </div>
      </div>
    </section>
  );
}