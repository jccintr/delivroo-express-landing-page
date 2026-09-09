import { MdCheckCircle, MdCancel } from 'react-icons/md';
import { STORE_SIGNUP_URL } from '../config';

const fixedRiderPoints = [
  'Salário fixo todo mês — mesmo nos dias fracos',
  'Motoboy parado esperando o próximo pedido é tempo pago do mesmo jeito',
  'Um pico de pedidos, um entregador só: ou vira fila, ou o cliente espera',
  'Você banca combustível, manutenção e seguro do veículo',
  'Ele faltou, tirou férias ou saiu da empresa? A entrega para com ele',
];

const delivrooPoints = [
  'Você paga por entrega feita, não por hora parada',
  'Sem entregador ocioso: ele só existe pra você quando tem pedido',
  'Vários entregadores da cidade disponíveis ao mesmo tempo, inclusive no pico',
  'Cada entregador usa o próprio veículo — sem custo de frota pra sua loja',
  'Sempre tem alguém online na cidade — a operação não depende de uma pessoa só',
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
            Compare com manter um entregador fixo
          </h2>
          <p className="text-ink-soft mt-4 text-lg leading-relaxed">
            Manter um motoboy contratado custa caro em dias parados e não resolve nos dias
            cheios. O Delivroo Express escala junto com o seu movimento.
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
