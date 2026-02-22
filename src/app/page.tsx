"use client"

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Zap, Brain, MessageSquare, ChevronDown } from 'lucide-react';
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
    <div className="min-h-screen selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-4 overflow-hidden flex flex-col items-center">
        <MagicParticles />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block py-1 px-3 border border-primary/30 rounded-full bg-primary/5 text-primary text-sm font-bold tracking-widest uppercase">
            Inscrições Abertas
          </div>
          <h1 className="text-5xl md:text-7xl font-headline text-secondary mb-6 leading-tight magic-glow scroll-reveal">
            Fale inglês sem medo e <br />
            <span className="text-primary">destrave sua carreira.</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary/80 mb-10 max-w-2xl mx-auto font-body scroll-reveal">
            Supere os dementadores do medo e as travas mentais que impedem você de falar inglês com confiança.
          </p>
          
          <div className="scroll-reveal delay-200">
            <LeadForm />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-secondary/70 font-semibold scroll-reveal delay-300">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span>3 aulas práticas via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              <span>Método baseado em psicologia</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Sem julgamento ou pressão</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Dor */}
      <section className="py-24 bg-white/30 border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-secondary mb-12 scroll-reveal">
            Você sente que o inglês é o obstáculo <br className="hidden md:block" /> 
            invisível da sua carreira?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { text: "Medo de ser julgado pelo sotaque", icon: Zap },
              { text: "Travamento em reuniões internacionais", icon: Zap },
              { text: "Perda de oportunidades por insegurança", icon: Zap },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-[#f5f1e8]/50 border border-primary/10 shadow-sm scroll-reveal">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-lg text-secondary/80 font-body">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-2xl md:text-3xl font-headline text-secondary italic scroll-reveal">
            "O problema não é seu inglês. <span className="text-primary">É o medo.</span>"
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline text-secondary mb-4 scroll-reveal">
              As 3 aulas de Defesa Contra <br /> as Travas Mentais
            </h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full scroll-reveal"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "O Mapa do Desbloqueio", desc: "Identifique as raízes emocionais que travam sua fala e crie um novo caminho mental." },
              { num: "02", title: "A Técnica da Habilidade Ativa", desc: "Pratique o inglês de forma orgânica, sem memorização mecânica ou pressão de gramática." },
              { num: "03", title: "O Plano de Carreira Fluente", desc: "Como usar sua nova confiança para se destacar em reuniões, entrevistas e promoções." },
            ].map((card, idx) => (
              <Card key={idx} className="bg-white/40 border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 group scroll-reveal">
                <CardContent className="p-10 text-center">
                  <span className="block text-4xl font-headline text-primary/40 mb-4 group-hover:text-primary transition-colors">{card.num}</span>
                  <h3 className="text-2xl font-headline text-secondary mb-4">{card.title}</h3>
                  <p className="text-secondary/70 leading-relaxed font-body">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Teacher */}
      <section className="py-24 px-4 bg-white/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="frame-border">
              <Image 
                src={teacherImg?.imageUrl || ''} 
                alt="Teacher Caroline Renó" 
                width={600} 
                height={800}
                className="rounded-lg shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                data-ai-hint="teacher caroline"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 scroll-reveal">
            <h2 className="text-4xl font-headline text-secondary mb-6">Quem vai te guiar nessa jornada</h2>
            <div className="space-y-4 text-lg text-secondary/80 leading-relaxed font-body">
              <p>
                Olá, eu sou a <strong>Caroline Renó</strong>. Minha missão é ajudar profissionais a recuperarem sua voz no mercado internacional.
              </p>
              <p>
                Depois de anos vendo alunos tecnicamente brilhantes perderem oportunidades por causa da ansiedade e do medo de errar, desenvolvi o método <strong>Habilidade Ativa</strong>.
              </p>
              <p>
                Acredito que aprender inglês deve ser um processo de expansão, não de tortura. Aqui, você encontra um ambiente seguro e técnicas baseadas em psicologia para finalmente falar o inglês que você já sabe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-headline text-secondary text-center mb-16 scroll-reveal">Relatos de quem já atravessou o portal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Luciana M.", role: "Gerente de Projetos", text: "Eu sabia a gramática, mas na hora da reunião meu coração disparava. As técnicas da Caroline mudaram meu jogo.", img: student1 },
              { name: "Roberto S.", role: "Engenheiro de Software", text: "Pela primeira vez não senti que estava sendo julgado. O minicurso me deu a base que eu precisava para aceitar uma vaga remota.", img: student2 },
              { name: "Ana Paula K.", role: "Arquiteta", text: "O método é diferente de tudo. É acolhedor e foca no que realmente importa: a comunicação real.", img: student3 },
            ].map((testi, idx) => (
              <div key={idx} className="p-8 bg-white/60 border border-primary/5 rounded-2xl shadow-sm hover:shadow-md transition-all scroll-reveal">
                <div className="flex items-center gap-4 mb-4">
                  <Image src={testi.img?.imageUrl || ''} alt={testi.name} width={50} height={50} className="rounded-full border border-primary/20" />
                  <div>
                    <h4 className="font-bold text-secondary">{testi.name}</h4>
                    <span className="text-xs text-primary font-bold uppercase tracking-wider">{testi.role}</span>
                  </div>
                </div>
                <p className="text-secondary/70 italic font-body">"{testi.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-white/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline text-secondary text-center mb-12 scroll-reveal">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full scroll-reveal">
            {[
              { q: "O curso é realmente gratuito?", a: "Sim! O minicurso Habilidade Ativa é 100% gratuito e focado em te dar o primeiro grande passo no desbloqueio do inglês." },
              { q: "Para quem é indicado?", a: "Para profissionais que já estudaram inglês ou têm algum conhecimento, mas travam na hora de falar por medo, vergonha ou ansiedade." },
              { q: "Como as aulas são entregues?", a: "As aulas são entregues via WhatsApp de forma prática e direta, para você assistir onde e quando quiser." },
              { q: "Preciso de um nível avançado?", a: "Não. O curso foca no bloqueio emocional, que afeta desde quem é iniciante até quem já tem nível avançado mas não consegue se comunicar." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-primary/10">
                <AccordionTrigger className="text-left font-headline text-lg hover:text-primary transition-colors">
                  <span className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-secondary/70 text-base font-body">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-4 text-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-headline text-secondary mb-8 leading-tight">
            Não deixe o medo decidir <br />
            <span className="text-primary">o futuro da sua carreira.</span>
          </h2>
          <p className="text-xl text-secondary/70 mb-12 max-w-xl mx-auto font-body">
            A oportunidade de falar inglês com confiança está a um clique de distância. Inscreva-se agora e comece seu desbloqueio.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
          <p className="mt-8 text-sm text-secondary/40 font-semibold uppercase tracking-widest">
            Privacidade garantida. Sem spam.
          </p>
        </div>
      </section>

      <footer className="py-12 text-center text-secondary/40 font-body border-t border-primary/10 bg-white/10">
        <p>&copy; {new Date().getFullYear()} Habilidade Ativa - Teacher Caroline Renó. Todos os direitos reservados.</p>
        <div className="mt-2 text-xs flex justify-center gap-4">
          <span className="cursor-pointer hover:text-primary transition-colors">Termos de Uso</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Privacidade</span>
        </div>
      </footer>
    </div>
  );
}
