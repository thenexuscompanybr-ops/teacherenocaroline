
"use client"

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Brain, Flame, BookOpen, Compass, Wand2, Lock, EyeOff, Sparkles, Bird } from 'lucide-react';
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

  const teacherImg = PlaceHolderImages.find(img => img.id === 'teacher-caroline');
  const student1 = PlaceHolderImages.find(img => img.id === 'student-1');
  const student2 = PlaceHolderImages.find(img => img.id === 'student-2');
  const student3 = PlaceHolderImages.find(img => img.id === 'student-3');

  return (
    <div className="min-h-screen selection-sonserina text-foreground bg-background relative">
      <MagicParticles />
      
      {/* Header / Logo Section */}
      <header className="pt-16 pb-8 flex justify-center scroll-reveal relative z-10">
        <div className="logo-float">
          <Image 
            src="https://imgur.com/NtUqBYp.png" 
            alt="Caroline Renó Logo" 
            width={300} 
            height={90} 
            className="logo-glow"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-32 px-4 flex flex-col items-center overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none w-1/3 max-w-sm">
          <Image src="https://imgur.com/bQxd94N.png" alt="Decorative" width={500} height={500} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-10 inline-flex items-center gap-3 py-1.5 px-6 border border-primary/20 rounded-none bg-primary/5 text-primary text-[9px] font-bold tracking-[0.5em] uppercase">
            <Compass className="w-3 h-3 opacity-60" />
            Iniciação de Elite
          </div>
          <h1 className="text-4xl md:text-7xl font-headline text-foreground mb-8 leading-tight scroll-reveal">
            Safe & Sound: <br />
            <span className="text-primary italic mystic-script text-5xl md:text-8xl">Onde a Magia do Inglês Acontece.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body scroll-reveal delay-200 leading-relaxed opacity-80">
            Não espere sua carta de Hogwarts chegar para começar a falar. Acesse o santuário onde a insegurança é transmutada em fluência e autoridade.
          </p>
          
          <div className="scroll-reveal delay-300 max-w-md mx-auto">
            <LeadForm />
          </div>

          <div className="mt-24 flex flex-wrap justify-center gap-12 text-primary/40 font-bold tracking-[0.4em] scroll-reveal delay-500">
            <div className="flex items-center gap-3 group">
              <Bird className="w-3.5 h-3.5 transition-colors group-hover:text-primary" />
              <span className="text-[9px] uppercase">Suporte via Coruja</span>
            </div>
            <div className="flex items-center gap-3 group">
              <ShieldCheck className="w-3.5 h-3.5 transition-colors group-hover:text-primary" />
              <span className="text-[9px] uppercase">Protego Mental</span>
            </div>
            <div className="flex items-center gap-3 group">
              <Wand2 className="w-3.5 h-3.5 transition-colors group-hover:text-primary" />
              <span className="text-[9px] uppercase">Defesa Contra Travas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Dor - Os Dementadores */}
      <section className="py-28 bg-card/10 border-y border-primary/10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-8 py-4 border border-primary/10">
          <Image src="https://imgur.com/dHSjKcP.png" alt="Símbolo" width={28} height={28} className="opacity-50" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-headline text-foreground mb-20 scroll-reveal">
            Sua voz definha sob os <br className="hidden md:block" /> 
            <span className="text-primary mystic-script text-4xl md:text-6xl">Dementadores do Medo?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              { text: "As Trevas do Bloqueio Mental paralisante", icon: EyeOff },
              { text: "A névoa do julgamento que drena sua energia", icon: Flame },
              { text: "Oportunidades que somem como fumaça", icon: Lock },
            ].map((item, idx) => (
              <div key={idx} className="p-10 brand-card scroll-reveal">
                <item.icon className="w-4 h-4 text-primary mx-auto mb-8 opacity-40" />
                <p className="text-[13px] text-muted-foreground tracking-widest leading-relaxed font-medium uppercase">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-headline text-primary/80 italic scroll-reveal">
            "Não é falta de gramática. <br className="md:hidden" /> <span className="text-foreground/90">É um bloqueio que exige feitiços de Defesa.</span>"
          </p>
        </div>
      </section>

      {/* Como Funciona - A Tríade da Magia */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-5 pointer-events-none w-1/3 max-w-sm">
          <Image src="https://imgur.com/kmtinmG.png" alt="Decorative" width={500} height={500} />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-headline text-foreground mb-8 scroll-reveal">
              Aulas de Defesa Contra as Travas
            </h2>
            <div className="ornament-line mx-auto max-w-xs scroll-reveal mb-8"></div>
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-[10px] font-bold scroll-reveal">O Protocolo Safe & Sound de Ascensão Linguística</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "I", title: "O Revelador de Sombras", desc: "Revele os Dementadores linguísticos que sabotam sua fala e aprenda a desarmá-los na origem psíquica." },
              { num: "II", title: "Protego Mental", desc: "Psicologia e acolhimento para transmutar o conhecimento passivo em habilidade verbal imediata." },
              { num: "III", title: "O Selo da Autoridade", desc: "Projete sua voz com confiança absoluta, assumindo seu lugar de mestre em qualquer cenário global." },
            ].map((card, idx) => (
              <Card key={idx} className="brand-card scroll-reveal">
                <CardContent className="p-12 text-center">
                  <span className="block text-6xl font-headline text-primary/10 mb-8">{card.num}</span>
                  <h3 className="text-lg font-headline text-primary mb-6 tracking-[0.25em] uppercase">{card.title}</h3>
                  <p className="text-muted-foreground/80 leading-relaxed text-sm font-medium">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Teacher */}
      <section className="py-32 px-4 bg-card/5 border-y border-primary/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="relative p-3 border border-primary/15 bg-background/50 group">
              <Image 
                src={teacherImg?.imageUrl || ''} 
                alt="Caroline Renó" 
                width={600} 
                height={800}
                className="grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 border border-background shadow-2xl">
                <Image src="https://imgur.com/dHSjKcP.png" alt="Símbolo" width={32} height={32} className="invert brightness-0" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="mb-8 flex items-center gap-3 text-primary/60">
              <BookOpen className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Mestra da Alquimia Linguística</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-10">Caroline Renó</h2>
            <div className="space-y-8 text-base text-muted-foreground/90 leading-relaxed font-medium">
              <p>
                Especialista em transmutar a comunicação de profissionais que o mercado rotula como "mudos brilhantes".
              </p>
              <p>
                Fundadora do **Safe & Sound** — uma ordem dedicada a libertar o potencial latente através do acolhimento psicológico aplicado ao idioma.
              </p>
              <p>
                Seu método não ensina apenas palavras; ele ensina a **postura de autoridade** necessária para expulsar seus Dementadores pessoais.
              </p>
            </div>
            <div className="mt-14 pt-8 border-t border-primary/10">
               <Image src="https://imgur.com/DIW3kra.png" alt="Assinatura" width={180} height={60} className="opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground text-center mb-24 scroll-reveal tracking-widest uppercase">Relatos de Iniciação</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Luciana M.", role: "Executiva Senior", text: "Minha voz estava aprisionada por Dementadores. Caroline me deu o Protego Mental que eu precisava para brilhar.", img: student1 },
              { name: "Roberto S.", role: "Tech Lead", text: "O medo era meu carcereiro. O Safe & Sound foi o feitiço de libertação que minha carreira exigia.", img: student2 },
              { name: "Ana Paula K.", role: "Diretora de Operações", text: "Uma experiência de profunda transformação. Você reclama sua identidade e sua voz no mercado global.", img: student3 },
            ].map((testi, idx) => (
              <div key={idx} className="p-10 brand-card scroll-reveal">
                <div className="flex items-center gap-5 mb-10">
                  <div className="relative">
                    <Image src={testi.img?.imageUrl || ''} alt={testi.name} width={55} height={55} className="rounded-none grayscale border border-primary/20 p-1 bg-background/50" />
                    <Sparkles className="absolute -top-2 -right-2 w-3 h-3 text-primary opacity-50" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground tracking-[0.2em] uppercase text-[11px]">{testi.name}</h4>
                    <span className="text-[8px] text-primary/80 font-bold uppercase tracking-[0.4em]">{testi.role}</span>
                  </div>
                </div>
                <p className="text-muted-foreground italic text-sm leading-relaxed opacity-90">"{testi.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-4 border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground text-center mb-20 scroll-reveal tracking-widest uppercase">Câmara de Esclarecimentos</h2>
          <Accordion type="single" collapsible className="w-full scroll-reveal">
            {[
              { q: "O Safe & Sound tem algum custo?", a: "Este minicurso gratuito é o seu ritual de entrada para conhecer a força da metodologia e do Protego Mental." },
              { q: "O que é o Suporte via Coruja?", a: "Nossa equipe de suporte místico está disponível para guiar seus primeiros passos e garantir que nenhuma dúvida fique sem resposta." },
              { q: "É indicado para quem já sabe inglês?", a: "Sim. É para quem já possui os fundamentos, mas sente que o conhecimento está trancado em uma câmara secreta na hora de falar." },
              { q: "Preciso de uma carta de Hogwarts?", a: "Não espere sua carta chegar. O Safe & Sound é para quem decidiu que o momento de falar com autoridade é agora." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-primary/10 mb-6 bg-card/5">
                <AccordionTrigger className="text-left font-headline text-sm md:text-base hover:text-primary transition-all p-6 no-underline hover:no-underline group">
                  <span className="flex items-center gap-5">
                    <Compass className="w-4 h-4 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/80 text-sm p-8 border-t border-primary/10 leading-relaxed font-medium">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-48 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-full max-w-2xl">
           <Image src="https://imgur.com/7f2b52K.png" alt="Graphic" width={1000} height={1000} />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 scroll-reveal">
          <h2 className="text-4xl md:text-7xl font-headline text-foreground mb-14 leading-tight">
            Safe & Sound: <br />
            <span className="text-primary mystic-script text-5xl md:text-8xl">Sua Voz de Autoridade.</span>
          </h2>
          <p className="text-lg text-muted-foreground/80 mb-16 max-w-xl mx-auto leading-relaxed font-semibold uppercase tracking-widest text-[11px]">
            O selo de silêncio termina agora. Reivindique seu lugar na ordem de elite.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="py-24 text-center border-t border-primary/10 bg-background relative z-10">
        <Image 
          src="https://imgur.com/NtUqBYp.png" 
          alt="Caroline Renó Logo" 
          width={180} 
          height={50} 
          className="mx-auto mb-12 opacity-30 grayscale"
        />
        <p className="text-[10px] tracking-[0.6em] uppercase mb-6 text-primary/50 font-bold">&copy; {new Date().getFullYear()} Caroline Renó</p>
        <div className="flex justify-center gap-12 text-[9px] uppercase tracking-[0.4em] font-bold text-muted-foreground/50">
          <span className="cursor-pointer hover:text-primary transition-colors">Termos de Uso</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Privacidade</span>
        </div>
      </footer>
    </div>
  );
}
