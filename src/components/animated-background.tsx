"use client";

/**
 * Fundo animado e decorativo da página.
 * Combina uma grade sutil com "auroras" coloridas em movimento lento.
 * Fica fixo atrás de todo o conteúdo e não captura cliques.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grade sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] dark:opacity-[0.25]" />

      {/* Auroras em movimento */}
      <div className="absolute -top-1/3 left-1/4 h-[40rem] w-[40rem] rounded-full bg-violet-400/30 blur-[120px] animate-aurora dark:bg-violet-600/20" />
      <div
        className="absolute top-1/4 -right-1/4 h-[35rem] w-[35rem] rounded-full bg-sky-400/30 blur-[120px] animate-aurora dark:bg-sky-600/20"
        style={{ animationDelay: "-8s", animationDuration: "30s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-fuchsia-400/20 blur-[120px] animate-aurora dark:bg-fuchsia-600/15"
        style={{ animationDelay: "-16s", animationDuration: "28s" }}
      />
    </div>
  );
}
