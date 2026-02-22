
"use client"

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, BookOpen, Compass, Wand2, Lock, EyeOff, Flame, Sparkles, Bird, MessageCircle } from 'lucide-react';
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
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LandingPage() {
  useScrollReveal();

  const student1 = PlaceHolderImages.find(img => img.id === 'student-1');
  const student2 = PlaceHolderImages.find(img => img.id === 'student-2');
  const student3 = PlaceHolderImages.find(img => img.id === 'student-3');

  return (
    <div className="min-h-screen selection-sonserina text-foreground bg-background relative overflow-x-hidden">
      {/* Partículas Místicas Globais */}
      <MagicParticles />
      
      {/* SEÇÃO 1: HERO */}
      <section className="relative pt-12 pb-20 md:pb-32 px-4 flex flex-col items-center overflow-hidden min-h-[90vh] justify-center text-center">
        {/* Elementos Gráficos de Fundo */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-1/2 md:w-1/3 max-w-sm">
          <Image src="https://i.imgur.com/bQxd94N.png" alt="Selo Místico" width={500} height={500} />
        </div>
        <div className="absolute bottom-0 left-0 opacity-5 pointer-events-none w-1/2 md:w-1/3 max-w-sm rotate-180">
          <Image src="https://i.imgur.com/7f2b52K.png" alt="Ornamental" width={500} height={500} />
        </div>
        
        <header className="mb-12 md:mb-16 scroll-reveal z-10">
          <div className="logo-float">
            <Image 
              src="https://i.imgur.com/NtUqBYp.png" 
              alt="Caroline Renó Logo" 
              width={220} 
              height={60} 
              className="logo-glow md:w-[280px] md:h-[80px]"
            />
          </div>
        </header>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-6 inline-flex items-center gap-3 py-1.5 px-6 border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
            <Compass className="w-3 h-3" />
            Iniciação Gratuita • Grupo VIP
          </div>
          <h1 className="text-3xl md:text-6xl font-headline text-foreground mb-6 md:mb-8 leading-tight scroll-reveal">
            Safe & Sound: <br />
            <span className="text-primary italic mystic-script text-4xl md:text-7xl block mt-2">Onde a Magia do Inglês Acontece.</span>
            <span className="text-xl md:text-3xl block mt-4 font-body tracking-tight opacity-90">Fale Inglês sem Medo e Destrave sua Carreira.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl font-body scroll-reveal delay-200 leading-relaxed mx-auto">
            Não espere sua carta de Hogwarts chegar para começar a falar! Participe do minicurso gratuito <span className="magic-emphasis">Habilidade Ativa</span> e aprenda como superar os <span className="magic-emphasis">Dementadores do Medo</span> e as <span className="magic-emphasis">Trevas do Bloqueio Mental</span>.
          </p>
          
          <div className="scroll-reveal delay-300 max-w-md mx-auto">
            <LeadForm />
          </div>

          <p className="mt-6 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-primary/40 font-bold scroll-reveal delay-400">
            Acesso imediato ao Grupo VIP de Iniciação
          </p>
        </div>

        {/* Detalhes de Autoridade */}
        <div className="mt-20 md:mt-24 flex flex-wrap justify-center gap-6 md:gap-8 text-primary/40 font-bold tracking-[0.3em] scroll-reveal delay-500">
           <div className="flex items-center gap-2">
            <Bird className="w-3 h-3" />
            <span className="text-[8px] md:text-[9px] uppercase">Suporte via Coruja</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3 h-3" />
            <span className="text-[8px] md:text-[9px] uppercase">Protego Mental</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-3 h-3" />
            <span className="text-[8px] md:text-[9px] uppercase">Aulas via WhatsApp</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: A DOR */}
      <section className="py-20 md:py-28 bg-card/10 border-y border-primary/10 relative overflow-hidden px-4">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none w-48 md:w-64">
           <Image src="https://i.imgur.com/7f2b52K.png" alt="Ornamental" width={500} height={500} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-5xl font-headline text-foreground mb-12 scroll-reveal">
            Você sente que o seu inglês é o <br />
            <span className="text-primary italic mystic-script text-3xl md:text-6xl">‘elefante na sala’ da sua carreira?</span>
          </h2>
          
          <div className="space-y-6 md:space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16 scroll-reveal">
            <p>
              Você é um profissional competente, mas na hora de uma reunião em inglês ou de uma entrevista para aquela vaga dos sonhos, sente a presença dos <span className="magic-emphasis">Dementadores do Medo</span>?
            </p>
            <p className="font-bold text-foreground/90">
              O coração dispara e as palavras somem? Você não está sozinho. O problema não é a sua inteligência, é o seu <span className="magic-emphasis">bloqueio emocional</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { text: "Medo de ser julgado pelo sotaque", icon: EyeOff },
              { text: "Sensação de que 'sabe ler, mas não consegue falar'", icon: Lock },
              { text: "Perda de oportunidades de promoção", icon: Flame },
            ].map((item, idx) => (
              <div key={idx} className="p-6 md:p-8 brand-card scroll-reveal">
                <item.icon className="w-5 h-5 text-primary/60 mx-auto mb-6" />
                <p className="text-[10px] text-muted-foreground tracking-widest leading-relaxed font-bold uppercase">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: A SOLUÇÃO */}
      <section className="py-20 md:py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-headline text-foreground mb-8 scroll-reveal">
              O que você vai aprender nas <br />
              <span className="text-primary italic mystic-script text-3xl md:text-6xl">Aulas de Defesa Contra as Travas</span>
            </h2>
            <div className="ornament-line mx-auto max-w-xs mb-8"></div>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-primary/60 font-bold mb-12">Minicurso entregue via Grupo VIP de WhatsApp</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                num: "Aula 1", 
                title: "O Mapa do Desbloqueio", 
                desc: "Focaremos em entender por que o cérebro trava e como reverter esse processo, aplicando o Protego Mental." 
              },
              { 
                num: "Aula 2", 
                title: "A Técnica da Habilidade Ativa", 
                desc: "Pratique a fala de forma lúdica e sem pressão, como em um verdadeiro treino de feitiços linguísticos." 
              },
              { 
                num: "Aula 3", 
                title: "O Plano de Carreira Fluente", 
                desc: "Preparação para transições de carreira com confiança, utilizando o inglês para abrir novos portais." 
              },
            ].map((card, idx) => (
              <Card key={idx} className="brand-card scroll-reveal">
                <CardContent className="p-8 md:p-10 text-center">
                  <span className="block text-primary/40 font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-6">{card.num}</span>
                  <h3 className="text-lg md:text-xl font-headline text-primary mb-6 tracking-wider uppercase">{card.title}</h3>
                  <p className="text-muted-foreground/80 leading-relaxed text-sm">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: SOBRE A TEACHER */}
      <section className="py-20 md:py-32 px-4 bg-card/5 border-y border-primary/5 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="relative p-2 md:p-4 border border-primary/15 bg-background/50 group mx-auto max-w-[500px] md:max-w-full sanctuary-glow">
              <Image 
                src="https://i.imgur.com/iwVrdXg.png" 
                alt="Caroline Renó" 
                width={800} 
                height={1000}
                className="transition-all duration-1000 object-cover"
              />
               <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
                  <Image src="https://i.imgur.com/kmtinmG.png" alt="Graphic" width={180} height={180} />
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 scroll-reveal text-center md:text-left">
            <div className="mb-6 flex items-center justify-center md:justify-start gap-3 text-primary/60">
              <BookOpen className="w-4 h-4" />
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.5em] uppercase">Guia da Jornada</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-headline text-foreground mb-8">Quem vai te guiar?</h2>
            <div className="space-y-6 text-sm md:text-base text-muted-foreground/90 leading-relaxed">
              <p>
                Caroline Renó não é apenas uma professora de inglês. Com foco em <span className="magic-emphasis">Psicologia</span>, ela desenvolveu um método que une o aprendizado do idioma ao cuidado com a mente: o <span className="magic-emphasis">Protego Mental</span>.
              </p>
              <p>
                Ela testa em si mesma tudo o que ensina, garantindo uma abordagem humana, prática e livre de julgamentos, como uma verdadeira mentora de <span className="magic-emphasis">Defesa Contra as Artes das Trevas do Bloqueio Mental</span>.
              </p>
            </div>
            <div className="mt-12 pt-10 border-t border-primary/10 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8">
               <div className="relative w-[140px] md:w-[220px]">
                 <Image 
                   src="https://i.imgur.com/DIW3kra.png" 
                   alt="Caroline Renó" 
                   width={220} 
                   height={60} 
                   className="opacity-80 hover:opacity-100 transition-opacity duration-700 w-full" 
                 />
               </div>
               <div className="text-[8px] md:text-[8px] uppercase tracking-[0.4em] font-bold text-primary/40 leading-tight text-center md:text-left">
                Habilidade Ativa <br /> Academy
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: PROVA SOCIAL */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-headline text-foreground text-center mb-16 md:mb-20 scroll-reveal tracking-[0.2em] md:tracking-[0.3em] uppercase">Quem já destravou</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "João Silva", role: "Profissional de TI", text: "Depois de aplicar o método, apresentei um projeto inteiro em inglês para a matriz nos EUA. Sem medo, com confiança!", img: student1 },
              { name: "Maria Santos", role: "Gerente de Projetos", text: "Finalmente consigo participar de reuniões internacionais sem aquele pânico. Minha carreira mudou!", img: student2 },
              { name: "Ana Paula", role: "Diretora de Marketing", text: "Não é apenas sobre gramática, é sobre retomar o poder da própria voz em ambientes corporativos de elite.", img: student3 },
            ].map((testi, idx) => (
              <div key={idx} className="p-8 md:p-10 brand-card scroll-reveal">
                <div className="flex items-center gap-4 mb-8">
                  <Image src={testi.img?.imageUrl || ''} alt={testi.name} width={45} height={45} className="rounded-none border border-primary/20 md:w-[50px] md:h-[50px]" />
                  <div>
                    <h4 className="font-bold text-foreground tracking-wider uppercase text-[9px] md:text-[10px]">{testi.name}</h4>
                    <span className="text-[7px] text-primary font-bold uppercase tracking-[0.4em]">{testi.role}</span>
                  </div>
                </div>
                <p className="text-muted-foreground italic text-xs md:text-sm leading-relaxed">"{testi.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: FAQ */}
      <section className="py-20 md:py-32 px-4 border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-headline text-foreground text-center mb-12 md:mb-16 scroll-reveal tracking-widest uppercase">Câmara de Esclarecimentos</h2>
          <Accordion type="single" collapsible className="w-full scroll-reveal">
            {[
              { q: "O curso é realmente gratuito?", a: "Sim. Este minicurso é o seu ritual de entrada gratuito para conhecer o poder do Protego Mental." },
              { q: "Como vou receber as aulas?", a: "As aulas e orientações serão enviadas diretamente no nosso grupo exclusivo de WhatsApp." },
              { q: "Preciso ter nível avançado?", a: "Não. O Habilidade Ativa é para quem tem medo de falar, independentemente do seu nível atual de conhecimento." },
              { q: "O que é o Protego Mental?", a: "É a nossa metodologia exclusiva que une psicologia e acolhimento para neutralizar os bloqueios emocionais ao falar." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-primary/10 mb-4 bg-card/5">
                <AccordionTrigger className="text-left font-headline text-xs md:text-base hover:text-primary transition-all p-5 md:p-6 no-underline hover:no-underline">
                  <span className="flex items-center gap-4">
                    <Sparkles className="w-3 h-3 text-primary/40 shrink-0" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/80 text-xs md:text-sm p-5 md:p-6 border-t border-primary/5 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SEÇÃO 7: RODAPÉ E CTA FINAL */}
      <section className="py-32 md:py-48 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none w-full max-w-2xl">
           <Image src="https://i.imgur.com/7f2b52K.png" alt="Graphic" width={1000} height={1000} />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 scroll-reveal text-center">
          <h2 className="text-3xl md:text-6xl font-headline text-foreground mb-8 md:mb-10 leading-tight">
            Não deixe o medo decidir <br />
            <span className="text-primary italic mystic-script text-4xl md:text-8xl">o futuro da sua carreira.</span>
          </h2>
          <p className="text-muted-foreground mb-10 md:mb-14 max-w-lg mx-auto uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px] font-bold">
            Garantir minha vaga no Habilidade Ativa
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* RODAPÉ FINAL */}
      <footer className="py-16 md:py-20 text-center border-t border-primary/5 bg-background relative z-10 px-4">
        <Image 
          src="https://i.imgur.com/NtUqBYp.png" 
          alt="Caroline Renó Logo" 
          width={150} 
          height={45} 
          className="mx-auto mb-10 opacity-20 grayscale hover:opacity-100 transition-opacity duration-1000 md:w-[180px] md:h-[50px]"
        />
        <p className="text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.5em] uppercase mb-6 text-primary/30 font-bold">&copy; {new Date().getFullYear()} Caroline Renó | Safe & Sound</p>
        <div className="flex justify-center gap-6 md:gap-8 text-[7px] md:text-[8px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-muted-foreground/30">
          <span className="cursor-pointer hover:text-primary transition-colors">Termos</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Privacidade</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Instagram</span>
        </div>
      </footer>
    </div>
  );
}
