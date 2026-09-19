import BrowserFrame from '../components/BrowserFrame';
import storeDashboard from '../assets/store-dashboard.jpg';
import storeNovaEntrega from '../assets/store-nova-entrega.jpg';
import storeEntregas from '../assets/store-entregas.jpg';

export default function StoreShowcase() {
  return (
    <section id="painel-loja" className="py-5 sm:py-5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-orange/10 text-orange-dark text-xs font-bold px-3 py-1 rounded-full">
            PARA LOJISTAS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mt-4 text-balance">
            Painel web completo para sua loja
          </h2>
          <p className="text-ink-soft mt-4 text-lg leading-relaxed">
            O Delivroo Express tem um painel web exclusivo para lojas, onde você consegue solicitar entregas, acompanhar cada uma em tempo real.
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
              Crie a sua entrega em poucos campos
            </p>
          </div>
          <div>
            <BrowserFrame
              src={storeEntregas}
              alt="Tela de entregas em andamento no painel da loja, com status, endereço, distância e valor de repasse de cada uma"
            />
            <p className="text-center text-sm text-ink-soft mt-3">
              Acompanhe cada entrega em andamento, do aceite até a conclusão
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}