"use client"

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Zap, Brain, MessageSquare, Flame, BookOpen, Wand2, Compass } from 'lucide-react';
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
    <div className="min-h-screen selection:bg-primary/30 text-foreground bg-background selection:text-white">
      {/* Header / Logo Section */}
      <header className="pt-12 flex justify-center scroll-reveal">
        <Image 
          src="https://i.imgur.com/NtUqBYp.png" 
          alt="Caroline Renó Logo" 
          width={280} 
          height={80} 
          className="logo-glow"
        />
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 px-4 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-flex items-center gap-3 py-1 px-4 border border-primary/30 rounded-full bg-primary/5 text-primary text-[9px] font-bold tracking-[0.3em] uppercase">
            <Compass className="w-3 h-3" />
            Minicurso Gratuito
          </div>
          <h1 className="text-4xl md:text-7xl font-headline text-foreground mb-8 leading-tight scroll-reveal">
            Conjure sua <br />
            <span className="text-primary italic font-script capitalize lowercase-none text-5xl md:text-8xl">Voz de Autoridade.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body scroll-reveal delay-100 leading-relaxed">
            Domine os rituais da fluência e liberte-se dos grilhões da insegurança que silenciam sua jornada profissional.
          </p>
          
          <div className="scroll-reveal delay-200">
            <LeadForm />
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-10 text-muted-foreground/80 font-medium tracking-widest scroll-reveal delay-300">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-primary/60" />
              <span className="text-[10px] uppercase">3 Manuscritos Digitais</span>
            </div>
            <div className="flex items-center gap-3">
              <Brain className="w-4 h-4 text-primary/60" />
              <span className="text-[10px] uppercase">Alquimia Mental</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-primary/60" />
              <span className="text-[10px] uppercase">Santuário Seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Dor */}
      <section className="py-24 bg-card/30 border-y border-primary/10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 py-2 border border-primary/20">
          <Image src="https://i.imgur.com/dHSjKcP.png" alt="Símbolo" width={30} height={30} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-headline text-foreground mb-16 scroll-reveal">
            Sua carreira definha sob a <br className="hidden md:block" /> 
            <span className="text-primary font-script lowercase-none text-4xl md:text-6xl">Maldição do Silêncio?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { text: "O medo paralisante do julgamento", icon: Flame },
              { text: "A névoa mental em momentos cruciais", icon: Flame },
              { text: "Oportunidades que evaporam por hesitação", icon: Flame },
            ].map((item, idx) => (
              <div key={idx} className="p-10 brand-card scroll-reveal">
                <item.icon className="w-5 h-5 text-primary mx-auto mb-6 opacity-60" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-headline text-primary italic scroll-reveal">
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
            <div className="ornament-line mx-auto max-w-xs scroll-reveal"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "I", title: "O Mapa das Sombras", desc: "Revele os traumas linguísticos que sabotam sua fala e aprenda a desarmá-los na origem." },
              { num: "II", title: "O Ritual da Ativação", desc: "Práticas de transmutação de conhecimento passivo em habilidade verbal imediata e fluida." },
              { num: "III", title: "O Selo da Autoridade", desc: "Projete sua voz com confiança absoluta em qualquer cenário global, sem pedir permissão." },
            ].map((card, idx) => (
              <Card key={idx} className="brand-card scroll-reveal">
                <CardContent className="p-12 text-center">
                  <span className="block text-5xl font-headline text-primary/10 mb-8">{card.num}</span>
                  <h3 className="text-xl font-headline text-primary mb-6 tracking-widest uppercase">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Teacher */}
      <section className="py-32 px-4 bg-card/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="relative p-2 border border-primary/30">
              <Image 
                src={teacherImg?.imageUrl || ''} 
                alt="Caroline Renó" 
                width={600} 
                height={800}
                className="grayscale opacity-90"
                data-ai-hint="sophisticated teacher"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary p-4 border border-background">
                <Image src="https://i.imgur.com/dHSjKcP.png" alt="Símbolo" width={40} height={40} className="invert brightness-0" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="mb-6 flex items-center gap-3 text-primary/60">
              <BookOpen className="w-4 h-4" />
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase">Fundadora da Habilidade Ativa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-8">Caroline Renó</h2>
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
              <p>
                Especialista em transmutar a comunicação de profissionais que o mercado chama de "mudos brilhantes".
              </p>
              <p>
                Caroline fundou a <strong>Habilidade Ativa</strong> — uma ordem dedicada a libertar o potencial latente de cada aluno através da psicologia comportamental aplicada ao idioma.
              </p>
              <p>
                Seu método não ensina apenas palavras; ele ensina a <strong>postura de autoridade</strong> necessária para ocupar o seu lugar de direito na elite profissional global.
              </p>
            </div>
            <div className="mt-10">
               <Image src="https://i.imgur.com/DIW3kra.png" alt="Assinatura" width={180} height={60} className="opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground text-center mb-20 scroll-reveal">Ecos de Alunos Iniciados</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Luciana M.", role: "Executiva", text: "Minha voz estava aprisionada. Caroline me deu a chave. Hoje comando reuniões globais com serenidade absoluta.", img: student1 },
              { name: "Roberto S.", role: "Tech Lead", text: "O medo era meu carcereiro. Este minicurso foi o feitiço de libertação que minha trajetória exigia.", img: student2 },
              { name: "Ana Paula K.", role: "Gestora", text: "Uma experiência de profunda transformação. Você não apenas aprende o idioma, você reclama sua identidade.", img: student3 },
            ].map((testi, idx) => (
              <div key={idx} className="p-10 brand-card scroll-reveal">
                <div className="flex items-center gap-5 mb-8">
                  <Image src={testi.img?.imageUrl || ''} alt={testi.name} width={50} height={50} className="rounded-none grayscale border border-primary/20 p-1" />
                  <div>
                    <h4 className="font-bold text-foreground tracking-widest uppercase text-[10px]">{testi.name}</h4>
                    <span className="text-[8px] text-primary font-bold uppercase tracking-widest">{testi.role}</span>
                  </div>
                </div>
                <p className="text-muted-foreground italic text-sm leading-relaxed">"{testi.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-4 bg-card/10 border-t border-primary/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground text-center mb-16 scroll-reveal">Câmara de Esclarecimentos</h2>
          <Accordion type="single" collapsible className="w-full scroll-reveal">
            {[
              { q: "Existe algum custo oculto para a iniciação?", a: "Nenhum. Este minicurso é um presente de iniciação para que você sinta a força do método Habilidade Ativa." },
              { q: "É necessário conhecimento prévio?", a: "Indicado para quem já possui os fundamentos, mas sente que o conhecimento está trancado em uma câmara secreta na hora de falar." },
              { q: "Qual o tempo de dedicação exigido?", a: "As lições são intensas e focadas, desenhadas para o cotidiano exaustivo de profissionais de elite." },
              { q: "Haverá um próximo passo?", a: "Ao final da terceira lição, você receberá o Guia de Ascensão, um mapa prático para seu próximo nível de autoridade." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-primary/10 mb-4">
                <AccordionTrigger className="text-left font-headline text-lg hover:text-primary transition-all p-6 bg-card/20">
                  <span className="flex items-center gap-4">
                    <Compass className="w-4 h-4 text-primary opacity-40" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base p-6 bg-card/10">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 px-4 text-center relative">
        <div className="max-w-4xl mx-auto relative z-10 scroll-reveal">
          <h2 className="text-4xl md:text-7xl font-headline text-foreground mb-12 leading-tight">
            Desperte a Maestria <br />
            <span className="text-primary font-script lowercase-none text-5xl md:text-8xl">que o Medo Ocultou.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-xl mx-auto leading-relaxed">
            O selo de silêncio termina neste instante. Reivindique seu lugar na ordem e domine o idioma.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="py-20 text-center text-muted-foreground/50 border-t border-primary/10 bg-background/80">
        <Image 
          src="https://i.imgur.com/NtUqBYp.png" 
          alt="Caroline Renó Logo" 
          width={150} 
          height={40} 
          className="mx-auto mb-8 opacity-40 grayscale"
        />
        <p className="text-[10px] tracking-[0.4em] uppercase mb-4">&copy; {new Date().getFullYear()} Caroline Renó</p>
        <div className="flex justify-center gap-10 text-[9px] uppercase tracking-widest">
          <span className="cursor-pointer hover:text-primary transition-colors">Termos</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Privacidade</span>
        </div>
      </footer>
    </div>
  );
}
