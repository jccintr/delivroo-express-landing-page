// Moldura de celular para exibir capturas de tela reais do app do
// entregador — diferente da referência (delivroo-landing-page), que
// desenha a UI em JSX dentro do frame, aqui usamos screenshots de verdade
// (mais convincente: é o app de verdade, não uma recriação).
//
// IMPORTANTE: este componente NÃO define uma largura padrão própria —
// quem usa precisa sempre passar uma classe de largura via `className`
// (ex: "w-48 sm:w-[190px]"). Isso é proposital: uma largura padrão aqui
// dentro entraria em conflito de cascata CSS com a largura passada pelo
// chamador (duas classes w-[...] sem prefixo de breakpoint têm a mesma
// especificidade, e quem vence é decidido pela ordem de geração do
// Tailwind no CSS final — não pela ordem em que aparecem no JSX). Foi
// esse conflito que causava o estouro em telas pequenas.
export default function PhoneFrame({ src, alt, className = '' }) {
  return (
    <div className={`relative ${className}`}>
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