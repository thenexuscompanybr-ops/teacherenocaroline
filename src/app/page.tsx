
"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, BookOpen, Compass, Lock, EyeOff, Flame, Sparkles, MessageCircle } from 'lucide-react';
import { LeadForm } from '@/components/LeadForm';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { MagicParticles } from '@/components/ui/magic-particles';
import { SacredOwl } from '@/components/ui/sacred-owl';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';

export default function LandingPage() {
  useScrollReveal();

  const images = {
    seal: PlaceHolderImages.find(img => img.id === 'hero-seal')!,
    logo: PlaceHolderImages.find(img => img.id === 'brand-logo')!,
    ornamental: PlaceHolderImages.find(img => img.id === 'ornamental-element')!,
    teacher: PlaceHolderImages.find(img => img.id === 'teacher-caroline')!,
    signature: PlaceHolderImages.find(img => img.id === 'brand-signature')!,
  };

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
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
      <MagicParticles />
      
      {/* SEÇÃO 1: HERO */}
      <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 px-4 flex flex-col items-center justify-center text-center mystic-fog min-h-[90vh] md:min-h-screen">
        <div className="absolute top-0 right-0 opacity-15 pointer-events-none w-1/2 md:w-1/3 max-w-md">
          <Image 
            src={images.seal.imageUrl} 
            alt={images.seal.description} 
            width={600} 
            height={600} 
            priority 
            className="no-drag scale-110" 
            data-ai-hint={images.seal.imageHint}
          />
        </div>
        
        <header className="mb-8 md:mb-12 scroll-reveal z-10">
          <div className="logo-float">
            <Image 
              src={images.logo.imageUrl} 
              alt={images.logo.description} 
              width={220} 
              height={60} 
              className="logo-glow md:w-[280px] md:h-[80px] no-drag"
              priority
              data-ai-hint={images.logo.imageHint}
            />
          </div>
        </header>

        <div className="max-w-4xl mx-auto relative z-10 w-full px-4">
          <div className="mb-6 inline-flex items-center gap-3 py-1.5 px-6 border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.5em] uppercase">
            <Compass className="w-3.5 h-3.5" />
            Iniciação Gratuita • Grupo VIP
          </div>
          <h1 className="text-4xl md:text-7xl font-headline text-foreground mb-6 leading-[1.2] scroll-reveal">
            Safe & Sound: <br />
            <span className="gold-leaf italic mystic-script text-5xl md:text-8xl block mt-2 mb-2 py-2">Onde a Magia do Inglês Acontece.</span>
            <span className="text-xl md:text-3xl block mt-1 font-body tracking-tight opacity-95">Fale Inglês Sem Medo e Destrave sua Carreira.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl font-body scroll-reveal leading-relaxed mx-auto">
            Não espere mais para começar a falar! Participe do minicurso gratuito: <span className="magic-emphasis">Habilidade Ativa</span> e aprenda como superar o pânico na hora de falar inglês.
          </p>
          
          <div className="scroll-reveal max-w-md mx-auto relative">
            <LeadForm />
          </div>

          <p className="mt-10 text-[10px] uppercase tracking-[0.4em] text-primary/70 font-bold scroll-reveal">
            Acesso imediato ao Grupo VIP de Iniciação
          </p>
        </div>

        <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-8 md:gap-12 text-primary/60 font-bold tracking-[0.4em] scroll-reveal z-10">
           <div className="flex items-center gap-3 group cursor-default">
            <SacredOwl className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
            <span className="text-[9px] uppercase">Suporte via Coruja</span>
          </div>
          <div className="flex items-center gap-3 group cursor-default">
            <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[9px] uppercase">Protego Mental</span>
          </div>
          <div className="flex items-center gap-3 group cursor-default">
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[9px] uppercase">Aulas via WhatsApp</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: A DOR */}
      <section className="py-20 md:py-32 bg-card/10 border-y border-primary/10 relative overflow-hidden px-4 mystic-fog">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10 pointer-events-none w-56 md:w-80">
           <Image 
            src={images.ornamental.imageUrl} 
            alt={images.ornamental.description} 
            width={600} 
            height={600} 
            className="no-drag" 
            data-ai-hint={images.ornamental.imageHint}
           />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-headline text-foreground mb-12 scroll-reveal leading-tight">
            Você sente que poderia ir mais longe… <br />
            <span className="gold-leaf italic mystic-script text-4xl md:text-7xl mt-2 block">se falasse inglês com confiança?</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16 scroll-reveal">
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

          <div className="max-w-3xl mx-auto mb-16 scroll-reveal px-4">
            <div className="brand-card backdrop-blur-md border-l-4 border-primary p-8 md:p-12 text-left mistic-border shadow-none">
              <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                "O problema não é seu vocabulário. É o seu cérebro ativando um pânico automático quando você precisa falar em inglês."
              </p>
              <p className="text-primary font-headline text-sm md:text-base tracking-[0.3em] uppercase opacity-90">
                — Teacher Caroline Renó
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Pânico automático ao falar", icon: EyeOff },
              { text: "Sensação de bloqueio emocional", icon: Lock },
              { text: "Potencial travado pelo medo", icon: Flame },
            ].map((item, idx) => (
              <div key={idx} className="p-8 md:p-10 brand-card scroll-reveal shadow-none bg-card/40">
                <item.icon className="w-5 h-5 text-primary/70 mx-auto mb-4" />
                <p className="text-[10px] text-muted-foreground tracking-[0.3em] leading-relaxed font-bold uppercase">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: A SOLUÇÃO */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-headline text-foreground mb-8 scroll-reveal">
              O que você vai aprender nas <br />
              <span className="gold-leaf italic mystic-script text-4xl md:text-7xl block mt-2">Aulas de Defesa Contra as Travas</span>
            </h2>
            <div className="ornament-line mx-auto max-w-sm mb-8 opacity-60"></div>
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-primary/70 font-bold mb-10">Aulas exclusivas para integrantes da Grupo Vip</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
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
              <Card key={idx} className="brand-card scroll-reveal border-primary/10 bg-card/60 shadow-none">
                <CardContent className="p-10 md:p-12 text-center">
                  <span className="block text-primary/50 font-bold uppercase tracking-[0.5em] text-[10px] mb-6">{card.num}</span>
                  <h3 className="text-lg md:text-xl font-headline text-primary mb-6 tracking-[0.15em] uppercase leading-snug">{card.title}</h3>
                  <p className="text-muted-foreground/90 leading-relaxed text-sm">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: SOBRE A TEACHER */}
      <section className="py-20 md:py-32 px-4 bg-card/5 border-y border-primary/10 overflow-hidden mystic-fog">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="relative p-3 md:p-5 border border-primary/25 bg-background/60 group mx-auto max-w-[500px] md:max-w-full mistic-border shadow-none">
              <Image 
                src={images.teacher.imageUrl} 
                alt={images.teacher.description} 
                width={900} 
                height={1100}
                className="transition-all duration-1000 object-cover no-drag brightness-90 group-hover:brightness-105"
                data-ai-hint={images.teacher.imageHint}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 scroll-reveal text-center md:text-left">
            <div className="mb-6 flex items-center justify-center md:justify-start gap-5 text-primary/70">
              <BookOpen className="w-5 h-5" />
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase">Guia da Jornada</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-8 leading-tight">Eu Sou Caroline Renó</h2>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground/95 leading-relaxed">
              <p>
                Há 7 anos, eu era você. Profissional competente, mas travava em inglês. Perdia oportunidades, evitava reuniões internacionais, tinha medo de ser julgada.
              </p>
              <p className="font-bold text-foreground italic">
                Então descobri algo: o problema não era meu inglês. Era meu medo.
              </p>
              <p>
                Comecei a estudar Psicologia e descobri técnicas que funcionam. Apliquei em mim mesma, e em 3 meses consegui apresentar um projeto inteiro em inglês para uma multinacional.
              </p>
              <p>
                Desde então, ajudei mais de <span className="magic-emphasis">1.200 profissionais</span> a destravar seu inglês usando o mesmo método. Hoje, eu ensino o que aprendi: <span className="magic-emphasis">Psicologia + Inglês + Acolhimento</span>.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12">
               <div className="relative w-[140px] md:w-[180px]">
                 <Image 
                   src={images.signature.imageUrl} 
                   alt={images.signature.description} 
                   width={240} 
                   height={70} 
                   className="opacity-90 hover:opacity-100 transition-opacity duration-700 w-full no-drag" 
                   data-ai-hint={images.signature.imageHint}
                 />
               </div>
               <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-primary/50 leading-tight text-center md:text-left">
                Habilidade Ativa <br /> Academy
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: FAQ */}
      <section className="py-20 md:py-32 px-4 border-t border-primary/10 mystic-fog">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground text-center mb-12 md:mb-20 scroll-reveal tracking-[0.4em] uppercase">Câmara de Esclarecimentos</h2>
          <Accordion type="single" collapsible className="w-full scroll-reveal space-y-4">
            {[
              { q: "O curso é realmente gratuito?", a: "Sim. Este minicurso é o seu ritual de entrada gratuito para conhecer o poder do Habilidade Ativa." },
              { q: "Como vou receber as aulas?", a: "As aulas e orientações serão enviadas diretamente no nosso grupo exclusivo de WhatsApp." },
              { q: "Preciso ter nível avançado?", a: "Não. O Habilidade Ativa é para quem tem pânico de falar, independentemente do seu nível atual de conhecimento." },
              { q: "O que é o Protego Mental?", a: "É a nossa metodologia exclusiva que une psicologia e acolhimento para neutralizar os bloqueios emocionais ao falar." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-primary/10 bg-card/20 hover:bg-card/30 transition-all">
                <AccordionTrigger className="text-left font-headline text-sm md:text-base hover:text-primary transition-all p-8 no-underline hover:no-underline group">
                  <span className="flex items-center gap-5">
                    <Sparkles className="w-4 h-4 text-primary/50 group-hover:rotate-12 transition-transform shrink-0" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/90 text-sm p-8 border-t border-primary/5 leading-relaxed bg-background/20">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SEÇÃO 6: CTA FINAL */}
      <section className="py-32 md:py-48 px-4 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none w-full max-w-3xl scale-125">
           <Image 
            src={images.ornamental.imageUrl} 
            alt={images.ornamental.description} 
            width={1200} 
            height={1200} 
            className="no-drag" 
            data-ai-hint={images.ornamental.imageHint}
           />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 scroll-reveal text-center w-full">
          <h2 className="text-4xl md:text-7xl font-headline text-foreground mb-10 leading-[1.1]">
            Não deixe o medo decidir <br />
            <span className="gold-leaf italic mystic-script text-5xl md:text-9xl mt-2 block">o futuro da sua carreira.</span>
          </h2>
          <p className="text-primary/70 mb-10 max-w-lg mx-auto uppercase tracking-[0.5em] text-[10px] font-bold">
            Garantir minha vaga no Habilidade Ativa
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="pt-6 md:pt-10 pb-20 md:pb-32 text-center border-t border-primary/15 bg-background/95 backdrop-blur-xl relative z-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12 transition-all duration-1000 hover:scale-105 group">
            <Image 
              src={images.logo.imageUrl} 
              alt={images.logo.description} 
              width={180} 
              height={50} 
              className="mx-auto opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 md:w-[220px] md:h-[60px] no-drag"
              data-ai-hint={images.logo.imageHint}
            />
          </div>
          
          <div className="ornament-line mx-auto max-w-[240px] mb-10 opacity-30"></div>
          
          <p className="text-[9px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] uppercase mb-10 text-primary/50 font-bold">
            &copy; {new Date().getFullYear()} Caroline Renó | Safe & Sound • Habilidade Ativa Academy
          </p>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-[9px] uppercase tracking-[0.5em] font-bold text-muted-foreground/40">
            <span className="cursor-pointer hover:text-primary transition-all duration-700 hover:tracking-[0.8em] relative group">
              Termos de Uso
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary/40 transition-all duration-700 group-hover:w-full"></span>
            </span>
            <span className="cursor-pointer hover:text-primary transition-all duration-700 hover:tracking-[0.8em] relative group">
              Política de Privacidade
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary/40 transition-all duration-700 group-hover:w-full"></span>
            </span>
            <span className="cursor-pointer hover:text-primary transition-all duration-700 hover:tracking-[0.8em] relative group">
              Instagram Oficial
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary/40 transition-all duration-700 group-hover:w-full"></span>
            </span>
          </div>
          
          <div className="mt-16 opacity-15 pointer-events-none select-none flex justify-center animate-magical-float">
            <SacredOwl className="w-10 h-10 text-primary" />
          </div>
        </div>
      </footer>
    </div>
  );
}
