import {
  MdStorefront,
  MdOutlineAddBox,
  MdOutlineNotificationsActive,
  MdOutlineDirectionsBike,
  MdOutlineToggleOn,
  MdOutlinePayments,
} from 'react-icons/md';

const storeSteps = [
  {
    icon: MdStorefront,
    title: 'Cadastre sua loja',
    text: 'Crie sua conta, verifique o e-mail e cadastre o endereço da loja na sua cidade. Leva poucos minutos.',
  },
  {
    icon: MdOutlineAddBox,
    title: 'Solicite a entrega',
    text: 'Informe o endereço do cliente e os dados do pacote. A entrega já entra no radar dos entregadores da região.',
  },
  {
    icon: MdOutlineNotificationsActive,
    title: 'Acompanhe em tempo real',
    text: 'Veja no painel quando um entregador aceita, retira e entrega — com notificação a cada etapa, sem precisar atualizar a página.',
  },
];

const riderSteps = [
  {
    icon: MdOutlineToggleOn,
    title: 'Fique online quando quiser',
    text: 'Sem escala fixa. Você decide os dias e horários que quer trabalhar — é só alternar entre online e offline no app.',
  },
  {
    icon: MdOutlineDirectionsBike,
    title: 'Aceite as entregas que quiser',
    text: 'Veja as entregas disponíveis de várias lojas da sua cidade ao mesmo tempo e escolha as que fazem sentido pra sua rota.',
  },
  {
    icon: MdOutlinePayments,
    title: 'Acompanhe seus ganhos',
    text: 'Faturamento de hoje, da semana e do mês, direto na tela inicial do app — sem precisar anotar em lugar nenhum.',
  },
];

function StepList({ steps }) {
  return (
    <ol className="flex flex-col gap-6">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-11 h-11 rounded-2xl bg-orange/10 text-orange-dark flex items-center justify-center shrink-0">
              <step.icon size={22} />
            </div>
            {i < steps.length - 1 && <div className="w-px flex-1 bg-line mt-2" />}
          </div>
          <div className="pb-2">
            <p className="font-heading font-bold text-ink">{step.title}</p>
            <p className="text-sm text-ink-soft mt-1 leading-relaxed">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Como funciona
          </h2>
          <p className="text-ink-soft mt-4 text-lg">
            Dos dois lados da entrega — pra quem pede e pra quem entrega — o Delivroo Express é
            simples de começar a usar hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-16">
          <div className="bg-white rounded-3xl border border-line p-7 sm:p-9">
            <span className="inline-block bg-orange/10 text-orange-dark text-xs font-bold px-3 py-1 rounded-full">
              PARA LOJISTAS
            </span>
            <h3 className="font-heading font-bold text-xl text-ink mt-3 mb-6">
              Da solicitação à entrega, em três passos
            </h3>
            <StepList steps={storeSteps} />
          </div>

          <div className="bg-white rounded-3xl border border-line p-7 sm:p-9">
            <span className="inline-block bg-green-bg text-green text-xs font-bold px-3 py-1 rounded-full">
              PARA ENTREGADORES
            </span>
            <h3 className="font-heading font-bold text-xl text-ink mt-3 mb-6">
              Do cadastro à primeira corrida, em três passos
            </h3>
            <StepList steps={riderSteps} />
          </div>
        </div>
      </div>
    </section>
  );
}
