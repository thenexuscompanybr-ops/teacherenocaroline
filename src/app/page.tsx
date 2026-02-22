"use client"

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Zap, Brain, MessageSquare, Flame, BookOpen, Wand2, Compass } from 'lucide-react';
import { MagicParticles } from '@/components/ui/magic-particles';
import { LeadForm } from '@/components/LeadForm';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
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
    <div className="min-h-screen selection:bg-primary/40 text-foreground bg-[#1A2320]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 overflow-hidden flex flex-col items-center">
        <MagicParticles />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-10 inline-flex items-center gap-3 py-2 px-5 border border-primary/40 rounded-full bg-primary/5 text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
            <Compass className="w-3 h-3 animate-pulse" />
            O Portal Está Aberto
          </div>
          <h1 className="text-5xl md:text-8xl font-headline text-foreground mb-8 leading-tight magic-glow scroll-reveal">
            Conjure sua <br />
            <span className="text-primary italic">Voz de Autoridade.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body scroll-reveal delay-100">
            Domine os rituais da fluência e liberte-se dos grilhões da insegurança que silenciam sua jornada profissional.
          </p>
          
          <div className="scroll-reveal delay-200">
            <LeadForm />
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-10 text-muted-foreground/90 font-medium tracking-widest scroll-reveal delay-300">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-primary opacity-70" />
              <span className="text-xs uppercase">3 Manuscritos Digitais</span>
            </div>
            <div className="flex items-center gap-3">
              <Brain className="w-4 h-4 text-primary opacity-70" />
              <span className="text-xs uppercase">Alquimia Mental</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-primary opacity-70" />
              <span className="text-xs uppercase">Santuário Seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Dor */}
      <section className="py-32 bg-black/60 border-y border-primary/20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A2320] px-6 py-3 border border-primary/30">
          <Wand2 className="w-5 h-5 text-primary" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-headline text-foreground mb-16 scroll-reveal">
            Sua carreira definha sob a <br className="hidden md:block" /> 
            <span className="text-muted-foreground italic">Maldição do Silêncio?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { text: "O medo paralisante do julgamento", icon: Flame },
              { text: "A névoa mental em momentos cruciais", icon: Flame },
              { text: "Oportunidades que evaporam por hesitação", icon: Flame },
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-card/20 border border-primary/10 shadow-inner scroll-reveal">
                <item.icon className="w-6 h-6 text-primary mx-auto mb-6 opacity-40" />
                <p className="text-base text-muted-foreground font-body leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-2xl md:text-3xl font-headline text-primary italic scroll-reveal">
            "Não é falta de gramática. <br className="md:hidden" /> <span className="text-foreground">É um bloqueio de Defesa Subconsciente.</span>"
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-headline text-foreground mb-6 scroll-reveal">
              A Tríade do Desbloqueio
            </h2>
            <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto scroll-reveal"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "I", title: "O Mapa das Sombras", desc: "Revele os traumas linguísticos que sabotam sua fala e aprenda a desarmá-los na origem." },
              { num: "II", title: "O Ritual da Ativação", desc: "Práticas de transmutação de conhecimento passivo em habilidade verbal imediata e fluida." },
              { num: "III", title: "O Selo da Autoridade", desc: "Projete sua voz com confiança absoluta em qualquer cenário global, sem pedir permissão." },
            ].map((card, idx) => (
              <Card key={idx} className="wizard-card scroll-reveal">
                <CardContent className="p-14 text-center">
                  <span className="block text-6xl font-headline text-primary/10 mb-8">{card.num}</span>
                  <h3 className="text-2xl font-headline text-primary mb-6 tracking-wide uppercase">{card.title}</h3>
                  <p className="text-muted-foreground/80 leading-relaxed font-body text-lg">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Teacher */}
      <section className="py-32 px-4 bg-black/40">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="frame-border">
              <Image 
                src={teacherImg?.imageUrl || ''} 
                alt="Teacher Caroline Renó" 
                width={600} 
                height={800}
                className="grayscale hover:grayscale-0 transition-all duration-[2000ms] opacity-80 hover:opacity-100"
                data-ai-hint="mysterious teacher"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="mb-6 flex items-center gap-3 text-primary/60">
              <BookOpen className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">A Mestra da Jornada</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-10 magic-glow-sage">Caroline Renó</h2>
            <div className="space-y-8 text-lg text-muted-foreground/90 leading-relaxed font-body">
              <p>
                Especialista em transmutar a comunicação de profissionais que o mercado chama de "mudos brilhantes".
              </p>
              <p>
                Caroline fundou a <strong>Habilidade Ativa</strong> — uma ordem dedicada a libertar o potencial latente de cada aluno através da psicologia comportamental aplicada ao idioma.
              </p>
              <p>
                Seu método não ensina apenas palavras; ele ensina a <strong>postura ministerial</strong> necessária para ocupar o seu lugar de direito na elite profissional global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-headline text-foreground text-center mb-24 scroll-reveal">Ecos de Alunos Iniciados</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Luciana M.", role: "Summa Cum Laude", text: "Minha voz estava aprisionada. Caroline me deu a chave. Hoje comando reuniões globais com serenidade absoluta.", img: student1 },
              { name: "Roberto S.", role: "Arquiteto de Sistemas", text: "O medo era meu carcereiro. Este minicurso foi o feitiço de libertação que minha trajetória exigia.", img: student2 },
              { name: "Ana Paula K.", role: "Líder Visionária", text: "Uma experiência de profunda transformação. Você não apenas aprende o idioma, você reclama sua identidade.", img: student3 },
            ].map((testi, idx) => (
              <div key={idx} className="p-10 bg-card/30 border border-primary/10 hover:border-primary/30 transition-all duration-700 scroll-reveal">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <Image src={testi.img?.imageUrl || ''} alt={testi.name} width={64} height={64} className="rounded-none grayscale border border-primary/20 p-1" />
                    <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-1">
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground tracking-widest uppercase text-xs">{testi.name}</h4>
                    <span className="text-[9px] text-primary font-bold uppercase tracking-[0.3em]">{testi.role}</span>
                  </div>
                </div>
                <p className="text-muted-foreground/80 italic font-body leading-relaxed text-base">"{testi.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-4 bg-black/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline text-foreground text-center mb-16 scroll-reveal">Câmara de Esclarecimentos</h2>
          <Accordion type="single" collapsible className="w-full scroll-reveal">
            {[
              { q: "Existe algum custo oculto para a iniciação?", a: "Nenhum. Este minicurso é um presente de iniciação para que você sinta a força do método Habilidade Ativa." },
              { q: "É necessário conhecimento arcano prévio?", a: "Indicado para quem já possui os fundamentos, mas sente que o conhecimento está trancado em uma câmara secreta na hora de falar." },
              { q: "Qual o tempo de dedicação exigido?", a: "As lições são intensas e focadas, desenhadas para o cotidiano exaustivo de profissionais de elite." },
              { q: "Haverá um Plano de Ascensão?", a: "Ao final da terceira lição, você receberá o Guia de Ascensão, um mapa prático para seu próximo nível de autoridade." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-primary/20 mb-4 overflow-hidden">
                <AccordionTrigger className="text-left font-headline text-xl hover:text-primary transition-all p-7 bg-card/30">
                  <span className="flex items-center gap-5">
                    <Compass className="w-4 h-4 text-primary opacity-50" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/90 text-lg font-body p-8 bg-card/20 border-t border-primary/10">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-48 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_0%,_transparent_70%)]"></div>
        <MagicParticles />
        <div className="max-w-4xl mx-auto relative z-10 scroll-reveal">
          <h2 className="text-4xl md:text-7xl font-headline text-foreground mb-12 leading-tight magic-glow">
            Desperte a Maestria <br />
            <span className="text-primary italic">que o Medo Ocultou.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-20 max-w-xl mx-auto font-body">
            O selo de silêncio termina neste instante. Reivindique seu lugar na ordem e domine o idioma.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
          <p className="mt-16 text-[9px] text-muted-foreground/30 font-bold uppercase tracking-[0.5em]">
            Proteção Criptográfica e Arcana
          </p>
        </div>
      </section>

      <footer className="py-20 text-center text-muted-foreground/40 font-body border-t border-primary/20 bg-black/80">
        <p className="tracking-[0.4em] uppercase text-[10px] font-bold mb-6 text-primary/50">Ordem da Habilidade Ativa</p>
        <p className="text-xs">&copy; {new Date().getFullYear()} Mestra Caroline Renó. Tradição e Excelência Linguística.</p>
        <div className="mt-8 text-[9px] flex justify-center gap-10 uppercase tracking-[0.3em] font-bold">
          <span className="cursor-pointer hover:text-primary transition-colors">Pergaminhos de Uso</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Privacidade</span>
        </div>
      </footer>
    </div>
  );
}
