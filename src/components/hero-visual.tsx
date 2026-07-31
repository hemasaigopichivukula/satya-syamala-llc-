export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      <div className="absolute inset-[7%] rounded-full border border-gold/25 animate-[spin_30s_linear_infinite]" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-white/20 animate-[spin_38s_linear_infinite_reverse]" />
      <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M94 180 184 116l104 45 96-69M88 319l96-53 102 50 118-76M184 116v150m104-105-2 155M94 180l-6 139m296-227 20 148" stroke="url(#line)" strokeWidth="2" opacity=".75"/>
        <defs><linearGradient id="line" x1="80" y1="80" x2="420" y2="360"><stop stopColor="#E7CF9B"/><stop offset="1" stopColor="#ffffff" stopOpacity=".2"/></linearGradient></defs>
      </svg>
      {[["22%","34%","AI"],["58%","25%","INSIGHT"],["43%","60%","ACTION"],["73%","49%","GROWTH"],["20%","65%","PROCESS"]].map(([left,top,label], i) => (
        <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left, top }}>
          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/25 bg-white/10 p-2 text-center text-[9px] font-bold tracking-widest text-white shadow-2xl backdrop-blur sm:h-20 sm:w-20 sm:text-[10px]" style={{ animation: `float 5s ease-in-out ${i * .45}s infinite` }}>{label}</div>
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-navy-dark shadow-[0_0_60px_rgba(199,154,59,.2)]">
        <div className="text-center"><span className="block font-serif text-4xl font-bold text-gold">S</span><span className="text-[8px] font-bold tracking-[.25em] text-white">STRATEGY</span></div>
      </div>
    </div>
  );
}
