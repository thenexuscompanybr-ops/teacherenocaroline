"use client"

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Brain, MessageSquare, Flame, BookOpen, Compass } from 'lucide-react';
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
    <div className="min-h-screen selection-sonserina text-foreground bg-background">
      {/* Header / Logo Section */}
      <header className="pt-16 pb-8 flex justify-center scroll-reveal">
        <Image 
          src="https://imgur.com/NtUqBYp.png" 
          alt="Caroline Renó Logo" 
          width={280} 
          height={80} 
          className="logo-glow"
        />
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-32 px-4 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-10 inline-flex items-center gap-3 py-1.5 px-6 border border-primary/20 rounded-none bg-primary/5 text-primary text-[9px] font-bold tracking-[0.4em] uppercase">
            <Compass className="w-3 h-3 opacity-60" />
            Iniciação Gratuita
          </div>
          <h1 className="text-4xl md:text-7xl font-headline text-foreground mb-8 leading-tight scroll-reveal">
            Conjure sua <br />
            <span className="text-primary italic font-script capitalize lowercase-none text-5xl md:text-8xl">Voz de Autoridade.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body scroll-reveal delay-200 leading-relaxed opacity-80">
            Domine os rituais da fluência e liberte-se dos grilhões da insegurança que silenciam sua jornada profissional.
          </p>
          
          <div className="scroll-reveal delay-300">
            <LeadForm />
          </div>

          <div className="mt-24 flex flex-wrap justify-center gap-12 text-primary/40 font-bold tracking-[0.3em] scroll-reveal delay-500">
            <div className="flex items-center gap-3 group">
              <MessageSquare className="w-3.5 h-3.5 transition-colors group-hover:text-primary" />
              <span className="text-[9px] uppercase">3 Manuscritos</span>
            </div>
            <div className="flex items-center gap-3 group">
              <Brain className="w-3.5 h-3.5 transition-colors group-hover:text-primary" />
              <span className="text-[9px] uppercase">Alquimia Mental</span>
            </div>
            <div className="flex items-center gap-3 group">
              <ShieldCheck className="w-3.5 h-3.5 transition-colors group-hover:text-primary" />
              <span className="text-[9px] uppercase">Santuário Seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Dor */}
      <section className="py-28 bg-card/10 border-y border-primary/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-6 py-3 border border-primary/10">
          <Image src="https://imgur.com/dHSjKcP.png" alt="Símbolo" width={24} height={24} className="opacity-40" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-headline text-foreground mb-20 scroll-reveal">
            Sua carreira definha sob a <br className="hidden md:block" /> 
            <span className="text-primary font-script lowercase-none text-4xl md:text-6xl">Maldição do Silêncio?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              { text: "O medo paralisante do julgamento alheio", icon: Flame },
              { text: "A névoa mental em momentos cruciais de fala", icon: Flame },
              { text: "Oportunidades de elite que evaporam por hesitação", icon: Flame },
            ].map((item, idx) => (
              <div key={idx} className="p-10 brand-card scroll-reveal">
                <item.icon className="w-4 h-4 text-primary mx-auto mb-8 opacity-40" />
                <p className="text-[13px] text-muted-foreground tracking-wide leading-relaxed font-medium uppercase">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-headline text-primary/80 italic scroll-reveal">
            "Não é falta de gramática. <br className="md:hidden" /> <span className="text-foreground/90">É um bloqueio de Defesa Subconsciente.</span>"
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-headline text-foreground mb-8 scroll-reveal">
              A Tríade do Desbloqueio
            </h2>
            <div className="ornament-line mx-auto max-w-xs scroll-reveal"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "I", title: "O Mapa das Sombras", desc: "Revele os traumas linguísticos que sabotam sua fala e aprenda a desarmá-los na origem psíquica." },
              { num: "II", title: "O Ritual da Ativação", desc: "Práticas de transmutação de conhecimento passivo em habilidade verbal imediata e fluida." },
              { num: "III", title: "O Selo da Autoridade", desc: "Projete sua voz com confiança absoluta em qualquer cenário global, sem pedir permissão." },
            ].map((card, idx) => (
              <Card key={idx} className="brand-card scroll-reveal">
                <CardContent className="p-12 text-center">
                  <span className="block text-6xl font-headline text-primary/5 mb-8">{card.num}</span>
                  <h3 className="text-lg font-headline text-primary mb-6 tracking-[0.2em] uppercase">{card.title}</h3>
                  <p className="text-muted-foreground/80 leading-relaxed text-sm">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Teacher */}
      <section className="py-32 px-4 bg-card/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="relative p-3 border border-primary/20 bg-background/50">
              <Image 
                src={teacherImg?.imageUrl || ''} 
                alt="Caroline Renó" 
                width={600} 
                height={800}
                className="grayscale opacity-80 hover:opacity-100 transition-opacity duration-1000"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-5 border border-background shadow-2xl">
                <Image src="https://imgur.com/dHSjKcP.png" alt="Símbolo" width={32} height={32} className="invert brightness-0" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="mb-8 flex items-center gap-3 text-primary/50">
              <BookOpen className="w-4 h-4" />
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase">Fundadora da Habilidade Ativa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-10">Caroline Renó</h2>
            <div className="space-y-8 text-base text-muted-foreground/90 leading-relaxed">
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
            <div className="mt-14">
               <Image src="https://imgur.com/DIW3kra.png" alt="Assinatura" width={180} height={60} className="opacity-60 hover:opacity-90 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground text-center mb-24 scroll-reveal">Ecos de Alunos Iniciados</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Luciana M.", role: "Executiva Senior", text: "Minha voz estava aprisionada. Caroline me deu a chave. Hoje comando reuniões globais com serenidade absoluta.", img: student1 },
              { name: "Roberto S.", role: "Tech Lead", text: "O medo era meu carcereiro. Este minicurso foi o feitiço de libertação que minha trajetória profissional exigia.", img: student2 },
              { name: "Ana Paula K.", role: "Diretora de Operações", text: "Uma experiência de profunda transformação. Você não apenas aprende o idioma, você reclama sua identidade.", img: student3 },
            ].map((testi, idx) => (
              <div key={idx} className="p-10 brand-card scroll-reveal">
                <div className="flex items-center gap-5 mb-10">
                  <Image src={testi.img?.imageUrl || ''} alt={testi.name} width={50} height={50} className="rounded-none grayscale border border-primary/20 p-1 bg-background/50" />
                  <div>
                    <h4 className="font-bold text-foreground tracking-[0.2em] uppercase text-[10px]">{testi.name}</h4>
                    <span className="text-[8px] text-primary/80 font-bold uppercase tracking-[0.3em]">{testi.role}</span>
                  </div>
                </div>
                <p className="text-muted-foreground italic text-sm leading-relaxed opacity-80">"{testi.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-4 border-t border-primary/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground text-center mb-20 scroll-reveal tracking-widest uppercase">Câmara de Esclarecimentos</h2>
          <Accordion type="single" collapsible className="w-full scroll-reveal">
            {[
              { q: "Existe algum custo oculto para a iniciação?", a: "Nenhum. Este minicurso é um presente de iniciação para que você sinta a força do método Habilidade Ativa." },
              { q: "É necessário conhecimento prévio?", a: "Indicado para quem já possui os fundamentos, mas sente que o conhecimento está trancado em uma câmara secreta na hora de falar." },
              { q: "Qual o tempo de dedicação exigido?", a: "As lições são intensas e focadas, desenhadas para o cotidiano exaustivo de profissionais de elite." },
              { q: "Haverá um próximo passo?", a: "Ao final da terceira lição, você receberá o Guia de Ascensão, um mapa prático para seu próximo nível de autoridade." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-primary/10 mb-6 bg-card/5">
                <AccordionTrigger className="text-left font-headline text-sm md:text-base hover:text-primary transition-all p-6 no-underline hover:no-underline">
                  <span className="flex items-center gap-5">
                    <Compass className="w-4 h-4 text-primary opacity-30" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/70 text-sm p-8 border-t border-primary/5 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-48 px-4 text-center relative overflow-hidden">
        {/* Elemento gráfico de fundo sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-full max-w-lg">
           <Image src="https://imgur.com/7f2b52K.png" alt="Graphic" width={1000} height={1000} />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 scroll-reveal">
          <h2 className="text-4xl md:text-7xl font-headline text-foreground mb-14 leading-tight">
            Desperte a Maestria <br />
            <span className="text-primary font-script lowercase-none text-5xl md:text-8xl">que o Medo Ocultou.</span>
          </h2>
          <p className="text-lg text-muted-foreground/70 mb-16 max-w-xl mx-auto leading-relaxed font-medium">
            O selo de silêncio termina neste instante. Reivindique seu lugar na ordem e domine o idioma.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="py-24 text-center border-t border-primary/5 bg-background">
        <Image 
          src="https://imgur.com/NtUqBYp.png" 
          alt="Caroline Renó Logo" 
          width={180} 
          height={50} 
          className="mx-auto mb-12 opacity-30 grayscale"
        />
        <p className="text-[10px] tracking-[0.5em] uppercase mb-6 text-primary/40 font-bold">&copy; {new Date().getFullYear()} Caroline Renó</p>
        <div className="flex justify-center gap-12 text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground/40">
          <span className="cursor-pointer hover:text-primary transition-colors">Termos</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Privacidade</span>
        </div>
      </footer>
    </div>
  );
}
