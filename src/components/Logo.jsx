import { MdLunchDining } from 'react-icons/md';

// Mesmo componente/identidade visual do delivroo-express-store-web
// (src/components/Logo.jsx) — ícone de talher/prato num círculo laranja
// suave + "Delivroo" em laranja e "Express" em tinta escura, fonte Baloo 2.
export default function Logo({ className = '', dark = false, size = 'md' }) {
  const textSize = size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-lg' : 'text-2xl';
  const markSize = size === 'lg' ? 44 : size === 'sm' ? 26 : 34;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="bg-orange/20 rounded-full p-1 flex items-center justify-center shrink-0"
        style={{ width: markSize, height: markSize }}
      >
        <MdLunchDining size={24} className="text-orange" />
      </div>
      <span
        className={`font-heading font-extrabold ${textSize} tracking-tight ${dark ? 'text-white' : 'text-ink'}`}
      >
        <span className="text-orange">Delivroo</span> Express
      </span>
    </div>
  );
}
