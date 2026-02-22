"use client"

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Zap, Brain, MessageSquare, Flame, BookOpen, Wand2 } from 'lucide-react';
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
    <div className="min-h-screen selection:bg-primary/30 text-foreground">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 overflow-hidden flex flex-col items-center">
        <MagicParticles />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block py-1.5 px-4 border border-primary/30 rounded-sm bg-primary/5 text-primary text-xs font-bold tracking-[0.3em] uppercase">
            Protocolo de Iniciação Aberto
          </div>
          <h1 className="text-5xl md:text-8xl font-headline text-foreground mb-8 leading-tight magic-glow scroll-reveal">
            Domine o Idioma <br />
            <span className="text-primary italic">Sem Sombras de Medo.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body scroll-reveal delay-100">
            Conclua o seu treinamento ministerial e expulse os dementadores da insegurança que travam sua voz profissional.
          </p>
          
          <div className="scroll-reveal delay-200">
            <LeadForm />
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground/80 font-medium tracking-wide scroll-reveal delay-300">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span>3 Lições via Coruja Digital</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              <span>Psicologia Transmutativa</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Santuário Sem Julgamentos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Dor */}
      <section className="py-32 bg-black/40 border-y border-primary/10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 py-2 border border-primary/20">
          <Wand2 className="w-6 h-6 text-primary" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-headline text-foreground mb-16 scroll-reveal">
            Sua carreira está sob o feitiço <br className="hidden md:block" /> 
            da Invisibilidade Profissional?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { text: "A Maldição do Julgamento alheio", icon: Flame },
              { text: "O Labirinto do Silêncio em reuniões", icon: Flame },
              { text: "Portais fechados por falta de fluência", icon: Flame },
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-sm bg-card/40 border border-primary/5 shadow-2xl scroll-reveal">
                <item.icon className="w-8 h-8 text-accent mx-auto mb-6 opacity-80" />
                <p className="text-lg text-muted-foreground font-body">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-2xl md:text-3xl font-headline text-primary italic scroll-reveal">
            "Não é falta de vocabulário. <br className="md:hidden" /> <span className="text-foreground">É um bloqueio de Defesa.</span>"
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-headline text-foreground mb-6 scroll-reveal">
              O Grimório do Desbloqueio
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto scroll-reveal"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { num: "I", title: "O Mapa das Sombras", desc: "Revele as raízes subconscientes que sabotam sua comunicação e desfaça os nós mentais." },
              { num: "II", title: "A Alquimia da Fala", desc: "Transmute o conhecimento passivo em habilidade ativa através de métodos práticos e intuitivos." },
              { num: "III", title: "A Ascensão Profissional", desc: "Projete sua nova voz em ambientes de alto impacto: reuniões, palestras e entrevistas globais." },
            ].map((card, idx) => (
              <Card key={idx} className="wizard-card scroll-reveal">
                <CardContent className="p-12 text-center">
                  <span className="block text-5xl font-headline text-primary/20 mb-6 group-hover:text-primary transition-colors">{card.num}</span>
                  <h3 className="text-2xl font-headline text-foreground mb-6 tracking-wide">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-body">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Teacher */}
      <section className="py-32 px-4 bg-black/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="frame-border border border-primary/20">
              <Image 
                src={teacherImg?.imageUrl || ''} 
                alt="Teacher Caroline Renó" 
                width={600} 
                height={800}
                className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-primary/10"
                data-ai-hint="mysterious teacher"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 scroll-reveal">
            <div className="mb-6 flex items-center gap-3 text-primary">
              <BookOpen className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest uppercase">A Mestra da Jornada</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-8">Caroline Renó</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-body">
              <p>
                Especialista em destravar a comunicação de profissionais que o mercado chama de "mudos brilhantes".
              </p>
              <p>
                Após decifrar por que mentes tecnicamente impecáveis falham sob pressão, Caroline fundou a <strong>Habilidade Ativa</strong> — uma ordem dedicada a libertar o potencial latente de cada aluno.
              </p>
              <p>
                Seu método não ensina apenas gramática; ele ensina a <strong>coragem acadêmica</strong> necessária para ocupar o seu lugar de direito no cenário internacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-headline text-foreground text-center mb-20 scroll-reveal">Ecos de Sucesso pelo Mundo</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Luciana M.", role: "Summa Cum Laude", text: "Minha voz era trancada em um cofre. Caroline me deu a chave. Hoje lidero reuniões em Londres sem hesitar.", img: student1 },
              { name: "Roberto S.", role: "Arquiteto de Sistemas", text: "O medo era meu carcereiro. O minicurso foi o feitiço de libertação que minha carreira precisava.", img: student2 },
              { name: "Ana Paula K.", role: "Visionária Global", text: "Uma experiência quase mística. Você não apenas aprende, você se transforma.", img: student3 },
            ].map((testi, idx) => (
              <div key={idx} className="p-10 bg-card/40 border border-primary/10 rounded-sm shadow-xl hover:bg-card/60 transition-all scroll-reveal">
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative">
                    <Image src={testi.img?.imageUrl || ''} alt={testi.name} width={60} height={60} className="rounded-full grayscale border-2 border-primary/30" />
                    <div className="absolute -bottom-1 -right-1 bg-primary text-background rounded-full p-1">
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground tracking-wide">{testi.name}</h4>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest">{testi.role}</span>
                  </div>
                </div>
                <p className="text-muted-foreground/90 italic font-body leading-relaxed">"{testi.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-4 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline text-foreground text-center mb-16 scroll-reveal">Câmara de Dúvidas</h2>
          <Accordion type="single" collapsible className="w-full scroll-reveal">
            {[
              { q: "Existe algum custo oculto?", a: "Nenhum. Este minicurso é um presente de iniciação para que você conheça o poder do método Habilidade Ativa." },
              { q: "É necessário conhecimento prévio?", a: "Indicado para quem já possui os fundamentos, mas sente que o conhecimento está trancado em uma câmara secreta na hora de falar." },
              { q: "Qual o tempo de dedicação?", a: "As lições são curtas e intensas, desenhadas para se encaixarem na rotina de profissionais ocupados." },
              { q: "Haverá certificação ministerial?", a: "Você receberá o Plano de Ascensão ao final da terceira lição, um guia prático para seu próximo nível." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-primary/10 mb-2">
                <AccordionTrigger className="text-left font-headline text-xl hover:text-primary transition-all p-6 bg-card/20 rounded-t-sm">
                  <span className="flex items-center gap-4">
                    <Wand2 className="w-5 h-5 text-primary/60" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg font-body p-6 bg-card/10 rounded-b-sm border-x border-b border-primary/5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 px-4 text-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
        <MagicParticles />
        <div className="max-w-4xl mx-auto relative z-10 scroll-reveal">
          <h2 className="text-4xl md:text-7xl font-headline text-foreground mb-10 leading-tight">
            Desperte o Gigante <br />
            <span className="text-primary italic">que Dorme em Você.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-xl mx-auto font-body">
            O selo de silêncio termina aqui. Inscreva-se e receba as chaves do seu desbloqueio imediato.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
          <p className="mt-12 text-[10px] text-muted-foreground/40 font-bold uppercase tracking-[0.4em]">
            Segurança Arcanamente Garantida
          </p>
        </div>
      </section>

      <footer className="py-16 text-center text-muted-foreground/30 font-body border-t border-primary/10 bg-black/40">
        <p className="tracking-widest uppercase text-[10px] font-bold mb-4">Ordem da Habilidade Ativa</p>
        <p className="text-xs">&copy; {new Date().getFullYear()} Teacher Caroline Renó. Tradição e Excelência.</p>
        <div className="mt-6 text-[10px] flex justify-center gap-8 uppercase tracking-widest font-bold">
          <span className="cursor-pointer hover:text-primary transition-colors">Pergaminhos de Uso</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Privacidade</span>
        </div>
      </footer>
    </div>
  );
}