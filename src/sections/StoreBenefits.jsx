import { MdCheckCircle, MdCancel } from 'react-icons/md';
import { STORE_SIGNUP_URL } from '../config';

const fixedRiderPoints = [
  'Diária ou salário fixo todo mês, mesmo nos dias fracos.',
  'Entregador parado esperando pedidos dá prejuízo, você tem que pagar do mesmo jeito.',
  'Muitos pedidos simultâneos, um entregador só não dá conta, maior tempo de espera para o cliente.',
  'Você banca combustível, manutenção e seguro do veículo.',
  'Entregador doente ou de férias ? Seu delivery para.',
];

const delivrooPoints = [
  'Você paga somente por entrega feita.',
  'Sem entregador ocioso: ele só existe pra você quando tem pedido',
  'Vários entregadores da cidade disponíveis ao mesmo tempo, para lhe atender quando você mais precisa.',
  'Cada entregador usa o próprio veículo, sem custo extra para sua loja.',
  'Há sempre um entregador disponível, seu delivery não pode parar',
];

export default function StoreBenefits() {
  return (
    <section id="lojistas" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-block bg-orange/10 text-orange-dark text-xs font-bold px-3 py-1 rounded-full">
            PARA LOJISTAS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mt-4 text-balance">
            Compare: Entregador fixo vs <span className="text-orange">Delivroo Express</span>
          </h2>
          <p className="text-ink-soft mt-4 text-lg leading-relaxed">
            Manter um entregador contratado custa caro em dias de pouca demanda e não resolve nos dias
            de maior movimento. O Delivroo Express escala junto com a sua necessidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="rounded-3xl border border-line p-7 sm:p-8">
            <h3 className="font-heading font-bold text-lg text-ink-soft">Entregador fixo</h3>
            <ul className="flex flex-col gap-4 mt-6">
              {fixedRiderPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                  <MdCancel className="text-red shrink-0 mt-0.5" size={20} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-orange bg-orange/5 p-7 sm:p-8 relative">
            <span className="absolute -top-3 right-6 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
              Delivroo Express
            </span>
            <h3 className="font-heading font-bold text-lg text-ink">Entrega sob demanda</h3>
            <ul className="flex flex-col gap-4 mt-6">
              {delivrooPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ink leading-relaxed">
                  <MdCheckCircle className="text-green shrink-0 mt-0.5" size={20} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href={STORE_SIGNUP_URL}
            className="inline-block bg-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-dark transition-colors shadow-lg shadow-orange/25"
          >
            Cadastrar minha loja
          </a>
        </div>
      </div>
    </section>
  );
}
