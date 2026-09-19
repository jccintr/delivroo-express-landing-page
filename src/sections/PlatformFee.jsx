import { MdCheckCircle } from 'react-icons/md';
import { STORE_SIGNUP_URL } from '../config';

// Taxa vigente hoje, cobrada pela Delivroo Express (não pelo entregador).
// Esse valor é configurável no painel do admin (Settings.deliveryFee na
// API) e pode mudar sem deploy — se for alterado por lá, ATUALIZAR AQUI
// TAMBÉM, senão a landing fica anunciando um preço desatualizado.
const CURRENT_FEE = 'R$ 1,50';
const FREE_DELIVERIES_COUNT = 5;

export default function PlatformFee() {
  return (
    <section id="preco" className="py-10 sm:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-orange/10 text-orange-dark text-xs font-bold px-3 py-1 rounded-full">
            PREÇO
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mt-4 text-balance">
            Apenas <span className="text-orange">{CURRENT_FEE}*</span> por entrega concluída
          </h2>
          <p className="text-ink-soft mt-4 text-lg leading-relaxed">
            Essa é a única cobrança da Delivroo Express. Sem mensalidade, sem percentual sobre o valor do
            pedido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="rounded-3xl border-2 border-orange bg-orange/5 p-7 sm:p-8 relative">
            <span className="absolute -top-3 left-6 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
              Taxa da Delivroo Express
            </span>
            <p className="font-heading font-extrabold text-4xl text-ink mt-3">{CURRENT_FEE}*</p>
            <p className="text-sm text-ink mt-2 leading-relaxed">
              Por entrega concluída. É o que você paga pra usar nossa plataforma, o despacho automático entre
              entregadores da sua cidade e o acompanhamento em tempo real — nada além disso.
            </p>

            <div className="mt-6 flex items-start gap-3 bg-white rounded-2xl border border-orange/30 p-4">
              <MdCheckCircle className="text-orange shrink-0 mt-0.5" size={22} />
              <p className="text-sm text-ink leading-relaxed">
                As <strong>{FREE_DELIVERIES_COUNT} primeiras entregas</strong> de cada loja são isentas
                dessa taxa da plataforma, pra você testar sem compromisso.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-line p-7 sm:p-8">
            <span className="inline-block bg-ink/5 text-ink-soft text-xs font-bold px-3 py-1 rounded-full">
              Valor pago ao entregador
            </span>
            <p className="font-heading font-bold text-lg text-ink mt-3">
              É de responsabilidade da loja
            </p>
            <p className="text-sm text-ink-soft mt-2 leading-relaxed">
              O valor que você paga ao entregador por cada entrega é estabelecido pela plataforma de acordo com a distância e outros parâmetros que possam interferir no processo de entrega. A promoção das{' '}
              {FREE_DELIVERIES_COUNT} primeiras entregas grátis vale só pra nossa taxa, não para o que você
              paga ao entregador, ou seja, o entregador sempre será remunerado pela sua entrega.
            </p>
          </div>
        </div>

        <p className="text-xs text-ink-soft text-center mt-6">
          *Taxa da plataforma vigente hoje — sujeita a atualização sem aviso prévio.
        </p>

        <div className="text-center mt-10">
          <a
            href={STORE_SIGNUP_URL}
            target="_blank"
            className="inline-block bg-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-dark transition-colors shadow-lg shadow-orange/25"
          >
            Cadastrar minha loja
          </a>
        </div>
      </div>
    </section>
  );
}
