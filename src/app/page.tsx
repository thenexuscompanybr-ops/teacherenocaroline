"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, BookOpen, Compass, Wand2, Lock, EyeOff, Flame, Sparkles, Bird, MessageCircle, User } from 'lucide-react';
import { LeadForm } from '@/components/LeadForm';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { MagicParticles } from '@/components/ui/magic-particles';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';

export default function LandingPage() {
  useScrollReveal();

  // Ritual de Proteção contra F12 e Downloads
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloqueia F12, Ctrl+Shift+I/J/C e Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen selection-sonserina text-foreground bg-background relative overflow-x-hidden">
      {/* Partículas Místicas Globais */}
      <MagicParticles />
      
      {/* SEÇÃO 1: HERO - Ascensão Otimizada */}
      <section className="relative pt-2 md:pt-4 pb-16 md:pb-28 px-4 flex flex-col items-center overflow-hidden min-h-[85vh] justify-start md:justify-center text-center mystic-fog">
        {/* Elementos Gráficos de Fundo */}
        <div className="absolute top-0 right-0 opacity-15 pointer-events-none w-1/2 md:w-1/3 max-w-md">
          <Image src="https://i.imgur.com/bQxd94N.png" alt="Selo Místico" width={600} height={600} priority className="no-drag scale-110" />
        </div>
        
        <header className="mb-2 md:mb-4 scroll-reveal z-10">
          <div className="logo-float">
            <Image 
              src="https://i.imgur.com/NtUqBYp.png" 
              alt="Caroline Renó Logo" 
              width={220} 
              height={60} 
              className="logo-glow md:w-[280px] md:h-[80px] no-drag"
              priority
            />
          </div>
        </header>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-6 inline-flex items-center gap-3 py-2 px-8 border border-primary/30 bg-primary/10 text-primary text-[10px] md:text-[11px] font-bold tracking-[0.5em] uppercase sanctuary-glow">
            <Compass className="w-3.5 h-3.5" />
            Iniciação Gratuita • Grupo VIP
          </div>
          <h1 className="text-4xl md:text-7xl font-headline text-foreground mb-6 md:mb-8 leading-[1.2] scroll-reveal">
            Safe & Sound: <br />
            <span className="gold-leaf italic mystic-script text-5xl md:text-8xl block mt-4 mb-4 py-2">Onde a Magia do Inglês Acontece.</span>
            <span className="text-xl md:text-3xl block mt-4 font-body tracking-tight opacity-95">Fale Inglês Sem Medo e Destrave sua Carreira.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl font-body scroll-reveal delay-200 leading-relaxed mx-auto">
            Não espere mais para começar a falar! Participe do minicurso gratuito: <span className="magic-emphasis">Habilidade Ativa</span> e aprenda como superar o pânico na hora de falar inglês.
          </p>
          
          <div className="scroll-reveal delay-300 max-w-md mx-auto sanctuary-glow-heavy">
            <LeadForm />
          </div>

          <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-primary/60 font-bold scroll-reveal delay-400">
            Acesso imediato ao Grupo VIP de Iniciação
          </p>
        </div>

        {/* Detalhes de Autoridade */}
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-8 md:gap-12 text-primary/50 font-bold tracking-[0.4em] scroll-reveal delay-500">
           <div className="flex items-center gap-3 group cursor-default">
            <Bird className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[9px] md:text-[10px] uppercase">Suporte via Coruja</span>
          </div>
          <div className="flex items-center gap-3 group cursor-default">
            <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[9px] md:text-[10px] uppercase">Protego Mental</span>
          </div>
          <div className="flex items-center gap-3 group cursor-default">
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[9px] md:text-[10px] uppercase">Aulas via WhatsApp</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: A DOR - IMPACTO PSICOLÓGICO REFINADO */}
      <section className="py-24 md:py-36 bg-card/20 border-y border-primary/10 relative overflow-hidden px-4 mystic-fog">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10 pointer-events-none w-56 md:w-80">
           <Image src="https://i.imgur.com/7f2b52K.png" alt="Ornamental" width={600} height={600} className="no-drag" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-headline text-foreground mb-16 scroll-reveal leading-tight">
            Você sente que poderia ir mais longe… <br />
            <span className="gold-leaf italic mystic-script text-4xl md:text-7xl mt-2 block">se falasse inglês com confiança?</span>
          </h2>
          
          <div className="space-y-8 md:space-y-10 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-20 scroll-reveal">
            <p>
              O método <span className="magic-emphasis">Safe & Sound</span> combina <span className="magic-emphasis">Psicologia & Acolhimento</span> com Aulas para Destravar Seu Inglês.
            </p>
            <p className="font-bold text-foreground/95">
              Você é um profissional competente, mas na hora de uma reunião em inglês ou de uma entrevista para aquela vaga dos sonhos, sente aquele pânico?
            </p>
            <p>
              O coração dispara e as palavras somem? <span className="magic-emphasis">Você não está sozinho</span>. O problema não é a sua inteligência, é o medo que trava sua fala.
            </p>
          </div>

          {/* CITAÇÃO DE IMPACTO - AUTORIDADE PSICOLÓGICA */}
          <div className="max-w-3xl mx-auto mb-24 scroll-reveal delay-200">
            <div className="brand-card backdrop-blur-md border-l-4 border-primary p-10 md:p-14 text-left sanctuary-glow mistic-border">
              <p className="text-xl md:text-3xl text-foreground italic leading-relaxed mb-8">
                "O problema não é seu vocabulário. É o seu cérebro ativando um pânico automático quando você precisa falar em inglês."
              </p>
              <p className="text-primary font-headline text-base md:text-lg tracking-[0.3em] uppercase opacity-90">
                — Teacher Caroline Renó
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { text: "Pânico automático ao falar", icon: EyeOff },
              { text: "Sensação de bloqueio emocional", icon: Lock },
              { text: "Potencial travado pelo medo", icon: Flame },
            ].map((item, idx) => (
              <div key={idx} className="p-8 md:p-12 brand-card scroll-reveal">
                <item.icon className="w-6 h-6 text-primary/70 mx-auto mb-8" />
                <p className="text-[11px] text-muted-foreground tracking-[0.3em] leading-relaxed font-bold uppercase">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: A SOLUÇÃO - RITUAL DE APRENDIZADO */}
      <section className="py-24 md:py-40 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-4xl md:text-7xl font-headline text-foreground mb-10 scroll-reveal">
              O que você vai aprender nas <br />
              <span className="gold-leaf italic mystic-script text-4xl md:text-7xl block mt-2">Aulas de Defesa Contra as Travas</span>
            </h2>
            <div className="ornament-line mx-auto max-w-sm mb-10 opacity-60"></div>
            <p className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-primary/70 font-bold mb-14">Minicurso entregue via Grupo VIP de WhatsApp</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {[
              { 
                num: "Aula 1", 
                title: "O Mapa do Desbloqueio", 
                desc: "Entenda por que o seu cérebro entra em modo de pânico e como reverter esse processo de forma imediata." 
              },
              { 
                num: "Aula 2", 
                title: "A Técnica da Habilidade Ativa", 
                desc: "Pratique a fala de forma acolhedora e sem julgamentos, focando na comunicação real e segura." 
              },
              { 
                num: "Aula 3", 
                title: "O Plano de Carreira Fluente", 
                desc: "Como utilizar sua nova confiança para abrir portais em reuniões e entrevistas internacionais." 
              },
            ].map((card, idx) => (
              <Card key={idx} className="brand-card scroll-reveal border-primary/10">
                <CardContent className="p-10 md:p-14 text-center">
                  <span className="block text-primary/50 font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px] mb-8">{card.num}</span>
                  <h3 className="text-xl md:text-2xl font-headline text-primary mb-8 tracking-[0.15em] uppercase leading-snug">{card.title}</h3>
                  <p className="text-muted-foreground/90 leading-relaxed text-sm md:text-base">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: SOBRE A TEACHER - AUTORIDADE PSICOLÓGICA */}
      <section className="py-24 md:py-40 px-4 bg-card/10 border-y border-primary/10 overflow-hidden mystic-fog">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="relative p-3 md:p-5 border border-primary/25 bg-background/60 group mx-auto max-w-[550px] md:max-w-full sanctuary-glow mistic-border">
              <Image 
                src="https://imgur.com/iwVrdXg.png" 
                alt="Caroline Renó" 
                width={900} 
                height={1100}
                className="transition-all duration-1000 object-cover no-drag brightness-90 group-hover:brightness-105"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 scroll-reveal text-center md:text-left">
            <div className="mb-8 flex items-center justify-center md:justify-start gap-4 text-primary/70">
              <BookOpen className="w-5 h-5" />
              <span className="text-[10px] md:text-[12px] font-bold tracking-[0.6em] uppercase">Guia da Jornada</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-headline text-foreground mb-10 leading-tight">Quem vai te guiar?</h2>
            <div className="space-y-8 text-base md:text-lg text-muted-foreground/95 leading-relaxed">
              <p>
                Caroline Renó não é apenas uma professora de inglês. Com foco em <span className="magic-emphasis">Psicologia</span>, ela desenvolveu um método que une o aprendizado do idioma ao cuidado emocional: o <span className="magic-emphasis">Método para Falar Sem Medo</span>.
              </p>
              <p>
                Ela testa em si mesma tudo o que ensina, garantindo uma abordagem humana, prática e livre de julgamentos, como uma verdadeira <span className="magic-emphasis">especialista em destravar o medo de falar</span>.
              </p>
            </div>
            <div className="mt-16 pt-12 border-t border-primary/20 flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12">
               <div className="relative w-[160px] md:w-[240px]">
                 <Image 
                   src="https://i.imgur.com/DIW3kra.png" 
                   alt="Caroline Renó Signature" 
                   width={240} 
                   height={70} 
                   className="opacity-90 hover:opacity-100 transition-opacity duration-700 w-full no-drag" 
                 />
               </div>
               <div className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold text-primary/50 leading-tight text-center md:text-left">
                Habilidade Ativa <br /> Academy
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: PROVA SOCIAL - VÉU DO ANONIMATO */}
      <section className="py-24 md:py-40 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground text-center mb-20 md:mb-28 scroll-reveal tracking-[0.3em] md:tracking-[0.4em] uppercase">Quem já destravou</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: "João Silva", role: "Profissional de TI", text: "Depois de aplicar o método, apresentei um projeto inteiro em inglês para a matriz nos EUA. Sem medo, com confiança!" },
              { name: "Maria Santos", role: "Gerente de Projetos", text: "Finalmente consigo participar de reuniões internacionais sem aquele pânico. Minha carreira mudou!" },
              { name: "Ana Paula", role: "Diretora de Marketing", text: "Não é apenas sobre gramática, é sobre retomar o poder da própria voz em ambientes corporativos de elite." },
            ].map((testi, idx) => (
              <div key={idx} className="p-10 md:p-14 brand-card scroll-reveal">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-[55px] h-[55px] md:w-[65px] md:h-[65px] rounded-none border border-primary/30 bg-card/80 flex items-center justify-center sanctuary-glow">
                    <User className="w-8 h-8 text-primary/40" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground tracking-[0.2em] uppercase text-[10px] md:text-[11px]">{testi.name}</h4>
                    <span className="text-[8px] text-primary/80 font-bold uppercase tracking-[0.5em]">{testi.role}</span>
                  </div>
                </div>
                <p className="text-muted-foreground italic text-sm md:text-base leading-relaxed opacity-90">"{testi.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: FAQ - CÂMARA DE ESCLARECIMENTOS */}
      <section className="py-24 md:py-40 px-4 border-t border-primary/15 mystic-fog">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground text-center mb-16 md:mb-24 scroll-reveal tracking-[0.4em] uppercase">Câmara de Esclarecimentos</h2>
          <Accordion type="single" collapsible className="w-full scroll-reveal space-y-4">
            {[
              { q: "O curso é realmente gratuito?", a: "Sim. Este minicurso é o seu ritual de entrada gratuito para conhecer o poder do Habilidade Ativa." },
              { q: "Como vou receber as aulas?", a: "As aulas e orientações serão enviadas diretamente no nosso grupo exclusivo de WhatsApp." },
              { q: "Preciso ter nível avançado?", a: "Não. O Habilidade Ativa é para quem tem pânico de falar, independentemente do seu nível atual de conhecimento." },
              { q: "O que é o Protego Mental?", a: "É a nossa metodologia exclusiva que une psicologia e acolhimento para neutralizar os bloqueios emocionais ao falar." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-primary/10 bg-card/10 hover:bg-card/20 transition-all sanctuary-glow">
                <AccordionTrigger className="text-left font-headline text-sm md:text-lg hover:text-primary transition-all p-6 md:p-8 no-underline hover:no-underline group">
                  <span className="flex items-center gap-5">
                    <Sparkles className="w-4 h-4 text-primary/50 group-hover:rotate-12 transition-transform shrink-0" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/90 text-sm md:text-base p-6 md:p-8 border-t border-primary/5 leading-relaxed bg-background/30">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SEÇÃO 7: CTA FINAL - O CHAMADO */}
      <section className="py-36 md:py-56 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none w-full max-w-3xl scale-125">
           <Image src="https://i.imgur.com/7f2b52K.png" alt="Graphic" width={1200} height={1200} className="no-drag" />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 scroll-reveal text-center">
          <h2 className="text-4xl md:text-7xl font-headline text-foreground mb-10 md:mb-14 leading-[1.1]">
            Não deixe o medo decidir <br />
            <span className="gold-leaf italic mystic-script text-5xl md:text-9xl mt-2 block">o futuro da sua carreira.</span>
          </h2>
          <p className="text-primary/60 mb-12 md:mb-16 max-w-lg mx-auto uppercase tracking-[0.5em] text-[10px] md:text-[12px] font-bold">
            Garantir minha vaga no Habilidade Ativa
          </p>
          <div className="max-w-md mx-auto sanctuary-glow-heavy">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* RODAPÉ FINAL */}
      <footer className="py-20 md:py-28 text-center border-t border-primary/10 bg-background/80 relative z-10 px-4">
        <Image 
          src="https://i.imgur.com/NtUqBYp.png" 
          alt="Caroline Renó Logo" 
          width={180} 
          height={50} 
          className="mx-auto mb-12 opacity-30 grayscale hover:opacity-100 transition-all duration-1000 md:w-[220px] md:h-[60px] no-drag hover:grayscale-0"
        />
        <p className="text-[9px] md:text-[10px] tracking-[0.5em] md:tracking-[0.7em] uppercase mb-8 text-primary/40 font-bold">&copy; {new Date().getFullYear()} Caroline Renó | Safe & Sound</p>
        <div className="flex justify-center gap-10 md:gap-14 text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold text-muted-foreground/40">
          <span className="cursor-pointer hover:text-primary transition-colors hover:tracking-[0.6em]">Termos</span>
          <span className="cursor-pointer hover:text-primary transition-colors hover:tracking-[0.6em]">Privacidade</span>
          <span className="cursor-pointer hover:text-primary transition-colors hover:tracking-[0.6em]">Instagram</span>
        </div>
      </footer>
    </div>
  );
}