import PhoneFrame from '../components/PhoneFrame';
import { MdCheckCircle } from 'react-icons/md';
import riderHome from '../assets/rider-home.jpg';
import riderDetails from '../assets/rider-delivery-details.jpg';
import { RIDER_APP_URL } from '../config';

const points = [
  'Entregas de várias lojas da sua cidade na mesma tela — não fica preso a um único estabelecimento esperando o próximo pedido',
  'Você escolhe cada entrega antes de aceitar: vê a loja, o valor que recebe e a distância antes de decidir',
  'Fica online só quando quer trabalhar — sem escala fixa, sem compromisso de horário',
  'Acompanha o faturamento de hoje, da semana e do mês direto na tela inicial',
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
              Preso a uma loja só, você espera.
              <br />
              Com o Delivroo Express, você <span className="text-orange">roda mais</span>.
            </h2>
            <p className="text-ink-soft mt-4 text-lg leading-relaxed">
              Quando o entregador atende uma loja só, o ganho do dia depende do movimento
              daquele único estabelecimento. No Delivroo Express, entregas de várias lojas da sua
              cidade aparecem pra você ao mesmo tempo — mais oportunidade de aceitar a próxima
              corrida assim que termina a anterior.
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
            <div className="flex items-end gap-5">
              <PhoneFrame
                src={riderHome}
                alt="Tela inicial do app do entregador, com faturado hoje, entregas hoje e lista de novas entregas disponíveis"
                className="w-[190px] sm:w-[220px] -mb-4 rotate-[-4deg]"
              />
              <PhoneFrame
                src={riderDetails}
                alt="Tela de detalhes da entrega no app do entregador, com valor a receber, distância, mapa e botão para aceitar a entrega"
                className="w-[190px] sm:w-[220px] mt-6 rotate-[4deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
