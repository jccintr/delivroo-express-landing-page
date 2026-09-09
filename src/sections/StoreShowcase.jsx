import BrowserFrame from '../components/BrowserFrame';
import storeDashboard from '../assets/store-dashboard.jpg';
import storeNovaEntrega from '../assets/store-nova-entrega.jpg';
import storeEntregas from '../assets/store-entregas.jpg';

export default function StoreShowcase() {
  return (
    <section id="painel-loja" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-orange/10 text-orange-dark text-xs font-bold px-3 py-1 rounded-full">
            PARA LOJISTAS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mt-4 text-balance">
            Toda a operação de entrega, numa tela só
          </h2>
          <p className="text-ink-soft mt-4 text-lg leading-relaxed">
            Peça a entrega em menos de um minuto, acompanhe cada uma em tempo real e veja como
            está o desempenho da sua loja — tudo pelo painel web, de qualquer computador.
          </p>
        </div>

        <BrowserFrame
          src={storeDashboard}
          alt="Dashboard do painel da loja Delivroo Express, com indicadores de entregas aguardando entregador e em andamento, estatísticas de hoje, gráfico dos últimos 30 dias, top entregadores e atividade recente"
          className="mt-12 max-w-4xl mx-auto"
        />

        <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          <div>
            <BrowserFrame
              src={storeNovaEntrega}
              alt="Formulário de nova entrega no painel da loja, com dados do destinatário, do pacote e da forma de pagamento"
            />
            <p className="text-center text-sm text-ink-soft mt-3">
              Cria a entrega em poucos campos — o entregador é atribuído depois, sem você precisar escolher
            </p>
          </div>
          <div>
            <BrowserFrame
              src={storeEntregas}
              alt="Tela de entregas em andamento no painel da loja, com status, endereço, distância e valor de repasse de cada uma"
            />
            <p className="text-center text-sm text-ink-soft mt-3">
              Acompanha cada entrega em andamento, do aceite até a conclusão
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}