import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CHECKOUT_URL } from "@/lib/checkout";
import hero from "@/assets/hero-mockup.jpg";

const TITLE = "CriptoVisionários | Aprenda a Analisar o Mercado de Criptomoedas";
const DESC =
  "Aprenda os fundamentos dos ativos digitais e desenvolva um processo mais organizado para estudar, analisar e acompanhar o mercado de criptomoedas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={`btn-cta ${className}`}>
      {children} <span aria-hidden>→</span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">{children}</p>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{children}</h2>
);

const Check = () => <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">✓</span>;
const Cross = () => <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-destructive/15 text-xs font-bold text-destructive">✕</span>;

const noise = ["BTC −4,2%", "🚨 ALERTA", "Nova altcoin!", "@influencer: COMPRA AGORA", "ETH ▲", "Notícia urgente", "FOMO", "Token X lançado", "Gráfico 1m", "Rumor no X", "Pump?", "Dump?"];

const learn = [
  ["📘", "Fundamentos das criptomoedas"], ["₿", "Bitcoin"], ["Ξ", "Ethereum"], ["⛓", "Blockchain"],
  ["📊", "Funcionamento do mercado"], ["🔎", "Análise de projetos"], ["🧠", "Mentalidade"],
  ["🛡", "Segurança e custódia"], ["📈", "Conceitos de análise de mercado"], ["🎯", "Identificação de oportunidades"],
];

const steps = [
  ["ENTENDER", "Compreender o funcionamento dos ativos digitais e da tecnologia por trás deles."],
  ["INVESTIGAR", "Aprender quais informações observar em um projeto."],
  ["AVALIAR", "Organizar fatores relevantes antes de tomar uma decisão."],
  ["GERENCIAR", "Compreender risco, exposição e comportamento diante da volatilidade."],
  ["PROTEGER", "Conhecer conceitos fundamentais de segurança, custódia e proteção."],
  ["ACOMPANHAR", "Desenvolver uma rotina de acompanhamento do mercado."],
];

const modules = [
  ["O novo mercado financeiro", "Entenda o surgimento dos ativos digitais e por que eles ganharam relevância."],
  ["Bitcoin", "Entenda a proposta do Bitcoin, escassez digital, oferta e funcionamento básico."],
  ["Ethereum", "Conheça Ethereum, contratos inteligentes, tokens e aplicações descentralizadas."],
  ["Blockchain", "Entenda como a tecnologia funciona e por que ela é importante."],
  ["Como funciona o mercado", "Entenda preço, volatilidade, ciclos, oferta, demanda e comportamento do mercado."],
  ["Como analisar projetos", "Aprenda a investigar projetos e organizar informações antes de formar uma opinião."],
  ["Segurança", "Conheça conceitos importantes sobre carteiras, custódia e proteção."],
  ["Mentalidade do investidor", "Aprenda a lidar melhor com volatilidade, medo, euforia e decisões emocionais."],
];

const bonus = [
  ["Guia de Segurança em Criptoativos", "Checklist com cuidados importantes para quem está começando."],
  ["Checklist de Análise", "Uma lista prática para organizar sua investigação de um projeto."],
  ["Plano de Evolução", "Um roteiro para continuar estudando o mercado depois de concluir o método."],
];

const faq = [
  ["Preciso entender de criptomoedas?", "Não. O conteúdo foi estruturado para ajudar quem está construindo sua base."],
  ["Preciso investir dinheiro?", "Não. O objetivo é educacional. Você pode estudar o método antes de decidir se deseja investir."],
  ["O CriptoVisionários indica quais criptomoedas comprar?", "Não. O conteúdo ensina conceitos e processos de análise. Não existe garantia de valorização."],
  ["É um curso?", "É um método educacional digital, composto por materiais estruturados para você estudar no seu ritmo."],
  ["Como recebo o acesso?", "Após a confirmação do pagamento, o acesso será disponibilizado digitalmente."],
  ["Existe garantia?", "Sim. 7 dias, conforme as condições apresentadas no momento da compra."],
];

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="relative">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] max-w-full -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
          <div className="min-w-0">
            <p className="truncate text-lg font-extrabold tracking-tight">
              CRIPTO<span className="text-gradient">VISIONÁRIOS</span>
            </p>
            <p className="text-[10px] font-semibold tracking-[0.3em] text-muted-foreground">EDUCAÇÃO • ANÁLISE • AUTONOMIA</p>
          </div>
          <a href="#oferta" className="hidden shrink-0 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary/50 sm:inline-block">Ver oferta</a>
        </nav>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-8 md:pt-14 lg:grid-cols-2">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Antes de perguntar qual criptomoeda comprar, <span className="text-gradient">aprenda a identificar se ela realmente merece sua atenção.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Um método estruturado para quem quer entender o mercado de ativos digitais, analisar projetos e tomar decisões com mais conhecimento — mesmo começando do zero.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Cta className="text-base">QUERO ACESSAR O MÉTODO</Cta>
              <p className="text-sm text-muted-foreground">Acesso completo por <strong className="text-foreground">R$47</strong></p>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Pagamento único • Acesso digital • Conteúdo educacional</p>
          </div>
          <img src={hero} alt="Mockup do material CriptoVisionários: ebook e páginas internas" width={1200} height={1104} className="w-full rounded-3xl border shadow-glow" />
        </div>
      </header>

      {/* TRUST BAR */}
      <div className="border-y bg-card/60">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-6 text-sm font-semibold md:grid-cols-4">
          {["Acesso imediato", "Método estruturado", "Conteúdo para iniciantes", "Pagamento único"].map((t) => (
            <li key={t} className="flex items-center gap-2"><Check />{t}</li>
          ))}
        </ul>
      </div>

      {/* PROBLEMA */}
      <Section className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow>O problema</Eyebrow>
          <H2>O problema não é falta de informação.</H2>
          <p className="mt-4 text-xl font-bold text-gradient">É não saber o que fazer com tanta informação.</p>
          <p className="mt-6 text-muted-foreground">Todos os dias surgem novas criptomoedas, projetos, narrativas, influencers e opiniões. Uma pessoa que está começando pode facilmente ficar perdida.</p>
          <ul className="mt-6 space-y-2 font-medium">
            {["Qual projeto analisar?", "O que realmente importa?", "Quais riscos observar?", "Como evitar decisões tomadas pelo medo ou pela euforia?"].map((q) => (
              <li key={q} className="border-l-2 border-violet pl-3">{q}</li>
            ))}
          </ul>
        </div>
        <div className="card-premium relative flex min-h-[340px] flex-wrap content-center justify-center gap-2 overflow-hidden p-6">
          {noise.map((n, i) => (
            <span key={n} className={`rounded-md border bg-secondary px-3 py-1.5 text-xs text-muted-foreground ${i % 3 === 0 ? "rotate-2" : i % 3 === 1 ? "-rotate-2" : ""}`}>{n}</span>
          ))}
          <div className="absolute inset-0 grid place-items-center bg-background/55 backdrop-blur-[2px]">
            <p className="rounded-xl border bg-card px-6 py-4 text-2xl font-extrabold tracking-tight md:text-3xl">INFORMAÇÃO <span className="text-gradient">≠</span> PROCESSO</p>
          </div>
        </div>
      </Section>

      {/* NOVA ABORDAGEM */}
      <Section className="text-center">
        <Eyebrow>A nova abordagem</Eyebrow>
        <H2>Você não precisa tentar prever o futuro.</H2>
        <p className="mt-4 text-xl font-bold text-gradient md:text-2xl">Precisa aprender a analisar melhor o presente.</p>
        <div className="mt-12 flex flex-col items-center gap-3 md:flex-row md:justify-center">
          {["ENTENDER", "ANALISAR", "AVALIAR", "DECIDIR", "ACOMPANHAR"].map((s, i, a) => (
            <div key={s} className="flex flex-col items-center gap-3 md:flex-row">
              <span className="card-premium px-5 py-3 text-sm font-extrabold tracking-widest">{s}</span>
              {i < a.length - 1 && <span className="text-primary"><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></span>}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-muted-foreground">O método foi pensado para ajudar você a construir autonomia — e não depender exclusivamente de opiniões externas para entender o que está acontecendo.</p>
      </Section>

      {/* PRODUTO */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>O produto</Eyebrow>
          <H2>Conheça o CriptoVisionários.</H2>
          <p className="mt-6 text-lg text-muted-foreground">Um método educacional criado para ajudar você a construir uma base sólida sobre ativos digitais e desenvolver um processo mais organizado para estudar o mercado.</p>
        </div>
        <h3 className="mt-12 text-lg font-bold">O que você encontra:</h3>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {learn.map(([icon, t]) => (
            <div key={t} className="card-premium flex items-center gap-3 p-4">
              <span className="text-xl" aria-hidden>{icon}</span>
              <span className="text-sm font-semibold">{t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* MÉTODO */}
      <Section>
        <Eyebrow>Processo</Eyebrow>
        <H2>O Método <span className="text-gradient">CriptoVisionários</span></H2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([t, d], i) => (
            <article key={t} className="card-premium p-7">
              <p className="text-gradient text-4xl font-extrabold">0{i + 1}</p>
              <h3 className="mt-4 text-lg font-extrabold tracking-widest">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* MÓDULOS */}
      <Section>
        <Eyebrow>Conteúdo</Eyebrow>
        <H2>O que você vai aprender</H2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(([t, d], i) => (
            <article key={t} className="card-premium p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-primary">MÓDULO {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* DIFERENCIAL */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Diferencial</Eyebrow>
          <H2>Não queremos transformar você em alguém que segue sinais.</H2>
          <p className="mt-4 text-xl text-muted-foreground">Queremos ajudar você a desenvolver capacidade de análise.</p>
        </div>
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border bg-card/50 p-7">
            <h3 className="font-extrabold tracking-widest text-muted-foreground">MÉTODO TRADICIONAL</h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {["Seguir influencer", "Comprar por indicação", "Entrar por FOMO", "Tomar decisões emocionais", "Não entender o ativo"].map((x) => <li key={x} className="flex gap-3"><Cross />{x}</li>)}
            </ul>
          </div>
          <div className="grid place-items-center text-sm font-extrabold text-muted-foreground">VS</div>
          <div className="card-premium border-primary/40 p-7 shadow-glow">
            <h3 className="font-extrabold tracking-widest text-gradient">CRIPTOVISIONÁRIOS</h3>
            <ul className="mt-5 space-y-3">
              {["Estudar", "Investigar", "Comparar", "Avaliar riscos", "Criar seu próprio processo"].map((x) => <li key={x} className="flex gap-3"><Check />{x}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* PARA QUEM */}
      <Section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="card-premium p-8 md:p-10">
          <H2>O CriptoVisionários foi feito para você se...</H2>
          <ul className="mt-8 space-y-4">
            {["Está começando no mercado de criptomoedas", "Quer entender melhor Bitcoin e outros ativos digitais", "Quer aprender a analisar projetos", "Quer reduzir sua dependência de opiniões externas", "Quer desenvolver mais autonomia", "Quer criar uma base antes de colocar mais dinheiro em risco"].map((x) => <li key={x} className="flex gap-3"><Check />{x}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border bg-card/40 p-8">
          <h3 className="text-xl font-extrabold">O CriptoVisionários NÃO é para quem:</h3>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            {["Procura enriquecimento rápido", "Quer sinais garantidos", "Procura uma fórmula para prever o mercado", "Acredita que existe investimento sem risco", "Espera promessa de lucro"].map((x) => <li key={x} className="flex gap-3"><Cross />{x}</li>)}
          </ul>
        </div>
      </Section>

      {/* BÔNUS */}
      <Section>
        <Eyebrow>Bônus inclusos</Eyebrow>
        <H2>E ainda você recebe:</H2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {bonus.map(([t, d], i) => (
            <article key={t} className="card-premium relative overflow-hidden p-7">
              <div className="bg-gradient-brand absolute inset-x-0 top-0 h-1" />
              <p className="text-xs font-bold tracking-[0.2em] text-violet">🎁 BÔNUS 0{i + 1}</p>
              <h3 className="mt-3 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* TRANSFORMAÇÃO */}
      <Section>
        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border bg-card/40 p-8">
            <h3 className="font-extrabold tracking-widest text-muted-foreground">ANTES</h3>
            <ul className="mt-5 space-y-3 italic text-muted-foreground">
              {["Não sei por onde começar.", "Vejo centenas de criptomoedas.", "Cada pessoa fala uma coisa.", "Tenho medo de cometer erros."].map((x) => <li key={x}>“{x}”</li>)}
            </ul>
          </div>
          <div className="text-center text-2xl text-primary"><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></div>
          <div className="card-premium border-primary/40 p-8">
            <h3 className="font-extrabold tracking-widest text-gradient">DEPOIS</h3>
            <ul className="mt-5 space-y-3 font-semibold">
              {["Tenho uma base.", "Sei o que investigar.", "Tenho critérios.", "Consigo organizar minha análise."].map((x) => <li key={x}>“{x}”</li>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* OFERTA */}
      <Section id="oferta" className="scroll-mt-6">
        <div className="relative overflow-hidden rounded-3xl border bg-card p-8 shadow-glow md:p-14">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-[100px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <H2>Comece sua jornada no mercado de ativos digitais com um método.</H2>
              <p className="mt-8 text-sm font-extrabold tracking-[0.25em] text-gradient">CRIPTOVISIONÁRIOS · INCLUI</p>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {["Método completo", "Fundamentos", "Bitcoin", "Ethereum", "Blockchain", "Análise de projetos", "Segurança", "Mentalidade", "Checklists", "Bônus"].map((x) => <li key={x} className="flex gap-2"><Check />{x}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border bg-background/60 p-8 text-center">
              <p className="text-muted-foreground">De <s>R$97</s> por</p>
              <p className="mt-2 text-6xl font-extrabold tracking-tight md:text-7xl">R$47</p>
              <p className="mt-2 font-semibold">Pagamento único.</p>
              <Cta className="mt-8 w-full py-5 text-base md:text-lg">QUERO ACESSAR O CRIPTOVISIONÁRIOS</Cta>
              <p className="mt-4 text-xs text-muted-foreground">🔒 Pagamento seguro • Acesso digital</p>
            </div>
          </div>
        </div>
      </Section>

      {/* GARANTIA */}
      <Section className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <div className="bg-gradient-brand grid h-40 w-40 shrink-0 place-items-center rounded-full p-[3px]">
          <div className="grid h-full w-full place-items-center rounded-full bg-background">
            <div className="text-center"><p className="text-5xl font-extrabold">7</p><p className="text-xs font-bold tracking-[0.25em] text-muted-foreground">DIAS</p></div>
          </div>
        </div>
        <div>
          <H2>7 dias de garantia</H2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Você terá 7 dias para acessar o material e conhecer o conteúdo. Se entender que o produto não faz sentido para você, poderá solicitar o reembolso dentro das condições da garantia.</p>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="max-w-3xl">
        <H2>Perguntas frequentes</H2>
        <div className="mt-10 space-y-3">
          {faq.map(([q, a], i) => (
            <div key={q} className="rounded-xl border bg-card">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
                {q}<span className={`shrink-0 text-primary transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="text-center">
        <H2>O mercado não precisa ser um jogo de adivinhação.</H2>
        <p className="mt-4 text-lg text-muted-foreground">Comece construindo conhecimento, processo e autonomia.</p>
        <Cta className="mt-10 text-base md:text-lg">QUERO COMEÇAR AGORA</Cta>
        <p className="mt-4 text-sm text-muted-foreground">R$47 — pagamento único</p>
      </Section>

      <footer className="border-t pb-28 md:pb-10">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div><p className="font-extrabold">CRIPTO <span className="text-gradient">VISIONÁRIOS</span></p><p className="text-sm text-muted-foreground">Educação sobre ativos digitais.</p></div>
            <nav className="flex flex-wrap gap-5 text-sm text-muted-foreground">
              {["Termos de Uso", "Política de Privacidade", "Contato", "Garantia"].map((l) => <a key={l} href="#" className="hover:text-foreground">{l}</a>)}
            </nav>
          </div>
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground"><strong>Aviso de risco:</strong> conteúdos educacionais não constituem recomendação individual de investimento. Ativos digitais apresentam riscos e volatilidade. Resultados não são garantidos.</p>
        </div>
      </footer>

      {/* CTA FIXO MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/90 p-3 backdrop-blur md:hidden">
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-cta w-full py-4 text-sm">QUERO ACESSAR — R$47</a>
      </div>
    </div>
  );
}
