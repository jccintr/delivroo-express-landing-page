import PhoneFrame from '../components/PhoneFrame';
import { MdCheckCircle } from 'react-icons/md';
import riderHome from '../assets/rider-home.jpg';
import riderDetails from '../assets/rider-delivery-details.jpg';
import { RIDER_APP_URL } from '../config';

const points = [
  'Entregas de várias lojas da sua cidade na mesma tela — não fique preso a um único estabelecimento esperando o próximo pedido',
  'Você escolhe cada entrega antes de aceitar: vê a loja, o valor a receber e a distância antes de decidir',
  'Fique online só quando quiser trabalhar, sem escala fixa, sem compromisso de horário',
 // 'Acompanha o faturamento de hoje, da semana e do mês direto na tela inicial',
];

export default function RiderShowcase() {
  return (
    <section id="entregadores" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-green-bg text-green text-xs font-bold px-3 py-1 rounded-full">
              PARA ENTREGADORES
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mt-4 text-balance">
              Liberdade para escolher o que e quando entregar.
              <br />
              Com o Delivroo Express, você <span className="text-orange">roda mais</span>.
            </h2>
            <p className="text-ink-soft mt-4 text-lg leading-relaxed">
              Com o aplicativo do entregador, você tem as entregas na palma da sua mão, tudo em tempo real.
             
            </p>

            <ul className="flex flex-col gap-4 mt-8">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-ink-soft leading-relaxed">
                  <MdCheckCircle className="text-green shrink-0 mt-1" size={20} />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href={RIDER_APP_URL}
              className="inline-block mt-9 bg-ink text-white font-bold px-8 py-4 rounded-full hover:bg-orange transition-colors"
            >
              Quero ser entregador
            </a>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-8 -z-10 bg-green/10 rounded-full blur-3xl" />
            {/* Empilhado (uma tela por linha) até `sm`, lado a lado a partir
                daí — o defasamento vertical (-mb-4/mt-6) e a rotação só
                fazem sentido no layout em linha, por isso também ficam
                condicionados a `sm:`. */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-4">
              <PhoneFrame
                src={riderHome}
                alt="Tela inicial do app do entregador, com faturado hoje, entregas hoje e lista de novas entregas disponíveis"
                className="w-48 sm:w-[170px] lg:w-[210px] sm:-mb-4 sm:rotate-[-4deg]"
              />
              <PhoneFrame
                src={riderDetails}
                alt="Tela de detalhes da entrega no app do entregador, com valor a receber, distância, mapa e botão para aceitar a entrega"
                className="w-48 sm:w-[170px] lg:w-[210px] sm:mt-6 sm:rotate-[4deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}