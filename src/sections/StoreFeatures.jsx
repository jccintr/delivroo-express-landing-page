import {
  MdOutlineSpaceDashboard,
  MdOutlineHistory,
  MdOutlineLocationCity,
  MdOutlineCancel,
} from 'react-icons/md';

const features = [
  {
    icon: MdOutlineSpaceDashboard,
    title: 'Dashboard da operação',
    text: 'Entregas de hoje, da semana e do mês, tempo médio até o aceite, distância percorrida e repasse aos entregadores — tudo num só painel.',
  },
  {
    icon: MdOutlineHistory,
    title: 'Histórico completo',
    text: 'Toda entrega concluída, devolvida ou cancelada fica registrada, com filtro por período pra você conferir quando quiser.',
  },
  {
    icon: MdOutlineLocationCity,
    title: 'Entregadores da sua cidade',
    text: 'Só entregadores cadastrados na mesma cidade da loja enxergam e podem aceitar suas entregas — sem confusão de rota entre cidades.',
  },
  {
    icon: MdOutlineCancel,
    title: 'Cancelamento sem burocracia',
    text: 'Mudou de ideia antes da retirada? Cancela a entrega direto no painel, sem precisar ligar pra ninguém.',
  },
];

export default function StoreFeatures() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border border-line p-6">
              <div className="w-11 h-11 rounded-2xl bg-orange/10 text-orange-dark flex items-center justify-center">
                <f.icon size={22} />
              </div>
              <p className="font-heading font-bold text-ink mt-4">{f.title}</p>
              <p className="text-sm text-ink-soft mt-2 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
