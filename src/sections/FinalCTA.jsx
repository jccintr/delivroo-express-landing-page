import { STORE_SIGNUP_URL, RIDER_APP_URL } from '../config';

export default function FinalCTA() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="bg-ink rounded-[2.5rem] px-8 py-14 sm:px-16 sm:py-20 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-green/10 rounded-full blur-3xl" />

          <h2 className="relative font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
            Pronto pra começar?
          </h2>
          <p className="relative text-white/70 mt-4 text-lg max-w-xl mx-auto">
            Escolha o seu lado da entrega — sua loja ganhando agilidade, ou você ganhando mais
            corridas por dia.
          </p>

          <div className="relative flex flex-wrap items-center justify-center gap-4 mt-9">
            <a
              href={STORE_SIGNUP_URL}
              target="_blank"
              className="bg-orange text-white font-bold px-7 py-4 rounded-full hover:bg-orange-dark transition-colors shadow-lg shadow-orange/30"
            >
              Cadastrar minha loja
            </a>
            <a
              href={RIDER_APP_URL}
              className="bg-white/10 text-white font-bold px-7 py-4 rounded-full border-2 border-white/20 hover:bg-white/20 transition-colors"
            >
              Quero ser entregador
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
