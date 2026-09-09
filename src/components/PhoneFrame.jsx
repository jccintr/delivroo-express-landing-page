// Moldura de celular para exibir capturas de tela reais do app do
// entregador — diferente da referência (delivroo-landing-page), que
// desenha a UI em JSX dentro do frame, aqui usamos screenshots de verdade
// (mais convincente: é o app de verdade, não uma recriação).
//
// A largura é controlada por quem usa o componente (via className, ex:
// "w-[220px]") — o wrapper interno usa w-full pra respeitar isso, em vez
// de ter uma largura fixa aqui dentro.
export default function PhoneFrame({ src, alt, className = '' }) {
  return (
    <div className={`relative w-[240px] ${className}`}>
      <div className="rounded-[2.4rem] bg-ink p-2.5 shadow-2xl shadow-ink/30">
        <div className="relative rounded-[1.9rem] overflow-hidden bg-white w-full">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-ink rounded-b-2xl z-20" />
          <img src={src} alt={alt} className="w-full h-auto block" />
        </div>
      </div>
      {/* Botões laterais */}
      <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-ink/80 rounded-l" />
      <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-ink/80 rounded-l" />
      <div className="absolute -right-[3px] top-28 w-[3px] h-16 bg-ink/80 rounded-r" />
    </div>
  );
}
