"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, BookOpen, Compass, Lock, EyeOff, Flame, Sparkles, MessageCircle, Heart, MapPin, Palette, Globe, Coffee } from 'lucide-react';
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const aboutSlides = [
    {
      title: "Quem é a CAROLINE por trás das aulas?",
      subtitle: "e o que a minha história tem a ver com a sua, mesmo que você ainda não saiba",
      icon: Heart,
      content: []
    },
    {
      title: "Nasci em Piranguinho",
      subtitle: "uma cidadezinha no sul de Minas Gerais",
      icon: MapPin,
      content: [
        "Daquelas onde o tempo passa mais devagar, o café é coado na hora...",
        "E a gente aprende cedo que escutar também é uma forma de cuidar.",
        "Aqui eu percebi que o silêncio ensina.",
        "E talvez por isso ensinar, para mim, nunca foi corrigir, mas acolher."
      ]
    },
    {
      title: "Me formei em MODA E DESIGN",
      subtitle: "observando o mundo pelas formas e cores",
      icon: Palette,
      content: [
        "Aprendi a observar o mundo pelas formas, pelas cores, pelos detalhes.",
        "Mas foi na Psicologia que comecei a entender o que não se vê.",
        "Ensinar sempre fez parte de mim: já dei aula de informática, artes, desenho e inglês.",
        "E hoje, quando ensino, levo tudo isso comigo: a beleza da arte, a leveza da escuta, e a alma que cabe nas palavras."
      ]
    },
    {
      title: "Durante a pandemia, eu morava nos EUA",
      subtitle: "Longe da minha terra, da minha língua, de mim",
      icon: Globe,
      content: [
        "Longe da minha terra, da minha língua, de mim...",
        "Comecei a dar aulas de inglês aos domingos, só pra passar o tempo.",
        "MAS O QUE ERA DISTRAÇÃO virou destino.",
        "As aulas criaram raízes, e eu me redescobri professora. De alma."
      ]
    },
    {
      title: "Aqui, a aula não é palco. É espaço.",
      subtitle: "Para rir, aprender, se soltar, desabafar",
      icon: Coffee,
      content: [
        "Para rir, aprender, se soltar, desabafar.",
        "Já me disseram que minhas aulas parecem uma segunda terapia, e quer saber? Eu levo isso como elogio.",
        "Because aprender uma nova língua também é um jeito de se ouvir com mais carinho."
      ]
    },
    {
      title: "E o que tudo isso tem a ver com você?",
      subtitle: "Talvez você também esteja se sentindo fora do lugar",
      icon: Sparkles,
      content: [
        "Talvez você também esteja se sentindo fora do lugar. Com medo de falar. Com vergonha de travar.",
        "E talvez tudo que você precise seja um espaço seguro. Leve. Real.",
        "Se for o seu caso... fica.",
        "Because essa história tem tudo para continuar com você aqui."
      ]
    }
  ];

  return (
    <div className="min-h-svh selection-sonserina text-foreground bg-background relative overflow-x-hidden flex flex-col">
      <MagicParticles />
      
      {/* SEÇÃO 1: HERO */}
      <section className="relative pt-2 md:pt-12 pb-12 md:pb-24 px-4 flex flex-col items-center justify-center text-center mystic-fog min-h-svh w-full">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-1/2 md:w-1/3 max-w-md overflow-hidden">
          <Image 
            src={images.seal.imageUrl} 
            alt={images.seal.description} 
            width={600} 
            height={600} 
            priority 
            className="no-drag scale-125 md:scale-110" 
            data-ai-hint={images.seal.imageHint}
          />
        </div>
        
        <header className="mb-4 md:mb-10 scroll-reveal z-10 w-full flex justify-center">
          <div className="logo-float max-w-[150px] md:max-w-[280px] w-full">
            <Image 
              src={images.logo.imageUrl} 
              alt={images.logo.description} 
              width={300} 
              height={85} 
              className="logo-glow w-full h-auto no-drag"
              priority
              data-ai-hint={images.logo.imageHint}
            />
          </div>
        </header>

        <div className="max-w-5xl mx-auto relative z-10 w-full px-2 flex flex-col items-center">
          <div className="mb-4 inline-flex items-center gap-3 py-1.5 px-4 border border-primary text-primary text-[9px] md:text-[11px] font-bold tracking-[0.4em] uppercase whitespace-nowrap">
            <Compass className="w-3.5 h-3.5" />
            Iniciação Gratuita • Grupo VIP
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline text-foreground mb-4 md:mb-8 leading-[1.1] scroll-reveal w-full flex flex-col items-center">
            Safe & Sound:
            <span className="gold-leaf mystic-script text-[7.5vw] md:text-5xl lg:text-6xl block mt-2 py-2 px-2 sm:px-6 whitespace-nowrap text-center">
              Onde a Magia do Inglês Acontece.
            </span>
            <span className="text-base md:text-xl lg:text-2xl block mt-3 font-body tracking-tight opacity-95">
              Fale Inglês Sem Medo e Destrave sua Carreira.
            </span>
          </h1>
          
          <p className="text-xs md:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl font-body scroll-reveal leading-relaxed mx-auto px-2">
            Não precisa mais esperar sua carta de Hogwarts chegar... Participe do minicurso gratuito: <span className="magic-emphasis text-primary">Habilidade Ativa</span> e aprenda como superar o pânico na hora de falar inglês.
          </p>
          
          <div className="scroll-reveal w-full max-w-md mx-auto relative px-2">
            <LeadForm />
          </div>

          <p className="mt-6 md:mt-12 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary font-bold scroll-reveal">
            Acesso imediato ao Grupo VIP de Iniciação
          </p>
        </div>

        <div className="mt-8 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-12 text-primary font-bold tracking-[0.2em] md:tracking-[0.4em] scroll-reveal z-10 w-full px-4">
           <div className="flex items-center gap-2 group cursor-default">
            <SacredOwl className="w-4 h-4 group-hover:scale-110 transition-transform duration-500" />
            <span className="text-[8px] md:text-[10px] uppercase">Suporte via Coruja</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[8px] md:text-[10px] uppercase">Protego Mental</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[8px] md:text-[10px] uppercase">Aulas via WhatsApp</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: A DOR */}
      <section className="py-20 md:py-32 bg-card/10 border-y border-primary/10 relative overflow-hidden px-4 mystic-fog w-full">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10 pointer-events-none w-48 md:w-80 overflow-hidden">
           <Image 
            src={images.ornamental.imageUrl} 
            alt={images.ornamental.description} 
            width={600} 
            height={600} 
            className="no-drag" 
            data-ai-hint={images.ornamental.imageHint}
           />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h2 className="text-2xl md:text-5xl font-headline text-foreground mb-10 md:mb-16 scroll-reveal leading-tight px-2">
            Você sente que poderia ir mais longe… <br />
            <span className="gold-leaf mystic-script text-3xl md:text-7xl mt-2 block py-2 px-6">se falasse inglês com confiança?</span>
          </h2>
          
          <div className="space-y-6 md:space-y-8 text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 md:mb-20 scroll-reveal px-2">
            <p>
              O método <span className="magic-emphasis text-primary">Safe & Sound</span> combina <span className="magic-emphasis text-primary">Psicologia & Acolhimento</span> com Aulas para Destravar Seu Inglês.
            </p>
            <p className="font-bold text-foreground/95">
              Você é um profissional competente, mas na hora de uma reunião em inglês ou de uma entrevista para aquela vaga dos sonhos, sente aquele pânico?
            </p>
            <p>
              O coração dispara e as palavras somem? <span className="magic-emphasis text-primary">Você não está sozinho</span>. O problema não é a sua inteligência, é o medo que trava sua fala.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12 md:mb-20 scroll-reveal px-2">
            <div className="brand-card backdrop-blur-md border-l-4 border-primary p-8 md:p-14 text-left mistic-border shadow-2xl">
              <p className="text-lg md:text-2xl text-foreground italic leading-relaxed mb-6">
                "O problema não é seu vocabulário. É o seu cérebro ativando um pânico automático quando você precisa falar em inglês."
              </p>
              <p className="text-primary font-headline text-xs md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase">
                — Teacher Caroline Renó
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-2">
            {[
              { text: "Pânico automático ao falar", icon: EyeOff },
              { text: "Sensação de bloqueio emocional", icon: Lock },
              { text: "Potencial travado pelo medo", icon: Flame },
            ].map((item, idx) => (
              <div key={idx} className="p-8 md:p-12 brand-card scroll-reveal shadow-xl bg-card/60 flex flex-col items-center">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mb-4" />
                <p className="text-[10px] md:text-[11px] text-muted-foreground tracking-[0.2em] md:tracking-[0.3em] leading-relaxed font-bold uppercase text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: A SOLUÇÃO */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16 md:mb-28">
            <h2 className="text-3xl md:text-6xl font-headline text-foreground mb-8 md:mb-10 scroll-reveal leading-tight">
              O que você vai aprender nas <br />
              <span className="gold-leaf mystic-script text-3xl md:text-8xl block mt-2 py-2 px-6">Aulas de Defesa Contra as Travas</span>
            </h2>
            <div className="ornament-line mx-auto max-w-sm mb-8 opacity-60"></div>
            <p className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-primary font-bold mb-4">Aulas exclusivas do Grupo VIP</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-2">
            {[
              { 
                num: "Aula 1", 
                title: "O Contra-Feitiço do Medo", 
                desc: "Descubra como desarmar o pânico de falar inglês e liberar sua voz das amarras do bloqueio emocional." 
              },
              { 
                num: "Aula 2", 
                title: "O Caldeirão da Consistência", 
                desc: "Aprenda a fórmula para manter o foco e a disciplina, transformando o estudo em um ritual diário de evolução. Como encaixar o inglês na rotina sem surtar." 
              },
              { 
                num: "Aula 3", 
                title: "A Transfiguração da Voz (Safe & Sound)", 
                desc: "Domine a arte da comunicação segura e assuma sua autoridade vocal em qualquer cenário profissional. O segredo para falar sem medo e com o som certo." 
              },
            ].map((card, idx) => (
              <Card key={idx} className="brand-card scroll-reveal border-primary/20 bg-card/70 shadow-2xl h-full">
                <CardContent className="p-10 md:p-14 text-center flex flex-col items-center h-full">
                  <span className="block text-primary/90 font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[11px] mb-6">{card.num}</span>
                  <h3 className="text-lg md:text-2xl font-headline text-primary mb-6 tracking-[0.1em] md:tracking-[0.15em] uppercase leading-tight">{card.title}</h3>
                  <p className="text-muted-foreground/95 leading-relaxed text-sm md:text-base">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: CRÔNICAS DA MESTRA (CARROSSEL) */}
      <section className="py-20 md:py-32 px-4 bg-card/5 border-y border-primary/10 overflow-hidden mystic-fog w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-2/5 scroll-reveal flex justify-center order-2 md:order-1">
              <div className="relative p-2 md:p-4 border border-primary/30 bg-background/80 group mx-auto max-w-[300px] md:max-w-none w-full mistic-border shadow-2xl">
                <Image 
                  src={images.teacher.imageUrl} 
                  alt={images.teacher.description} 
                  width={800} 
                  height={1000}
                  className="transition-all duration-1000 object-cover no-drag brightness-90 group-hover:brightness-105 w-full h-auto"
                  data-ai-hint={images.teacher.imageHint}
                />
                <div className="mt-6 text-center">
                  <div className="relative w-[120px] md:w-[160px] mx-auto">
                    <Image 
                      src={images.signature.imageUrl} 
                      alt={images.signature.description} 
                      width={240} 
                      height={70} 
                      className="opacity-95 hover:opacity-100 transition-opacity duration-700 w-full h-auto no-drag" 
                      data-ai-hint={images.signature.imageHint}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5 scroll-reveal order-1 md:order-2">
              <div className="mb-10 flex items-center justify-center md:justify-start gap-4 text-primary">
                <BookOpen className="w-5 h-5" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Memórias do Santuário</span>
              </div>

              <Carousel className="w-full">
                <CarouselContent>
                  {aboutSlides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="flex flex-col h-full min-h-[350px]">
                        <h2 className="text-2xl md:text-5xl font-headline text-foreground mb-6 leading-tight tracking-tight">
                          {slide.title}
                        </h2>
                        
                        <div className="mb-10">
                          <h3 className="gold-leaf mystic-script text-2xl md:text-5xl block py-2 leading-relaxed">
                            {slide.subtitle}
                          </h3>
                          <div className="h-[1px] w-24 bg-primary/30 mt-4"></div>
                        </div>
                        
                        {slide.content.length > 0 ? (
                          <div className="space-y-6 md:space-y-8 text-base md:text-xl text-muted-foreground/95 leading-relaxed font-body">
                            {slide.content.map((text, idx) => (
                              <p key={idx} className={idx === slide.content.length - 1 && index === aboutSlides.length - 1 ? "magic-emphasis text-primary italic pt-4" : ""}>
                                {text}
                              </p>
                            ))}
                          </div>
                        ) : (
                          index === 0 && (
                            <div className="mt-6 flex justify-center md:justify-start">
                               <div className="p-8 brand-card bg-primary/5 border-primary/20 flex items-center gap-6 max-w-sm">
                                 <slide.icon className="w-10 h-10 text-primary animate-magical-float" />
                                 <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary leading-relaxed">Folheie estas crônicas para iniciarmos nossa jornada</p>
                               </div>
                            </div>
                          )
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center md:justify-start gap-6 mt-8">
                  <CarouselPrevious className="static translate-y-0 border-primary/40 text-primary hover:bg-primary/20 h-12 w-12" />
                  <CarouselNext className="static translate-y-0 border-primary/40 text-primary hover:bg-primary/20 h-12 w-12" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: FAQ */}
      <section className="py-20 md:py-32 px-4 border-t border-primary/10 mystic-fog w-full">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-2xl md:text-4xl font-headline text-foreground text-center mb-12 md:mb-24 scroll-reveal tracking-[0.3em] md:tracking-[0.5em] uppercase leading-tight">Câmara de Esclarecimentos</h2>
          <Accordion type="single" collapsible className="w-full scroll-reveal space-y-4 md:space-y-6">
            {[
              { q: "O curso é realmente gratuito?", a: "Sim. Este minicurso é o seu ritual de entrada gratuito para conhecer o poder do Habilidade Ativa." },
              { q: "Como vou receber as aulas?", a: "As aulas e orientações serão enviadas diretamente no nosso grupo exclusivo de WhatsApp." },
              { q: "Preciso ter nível avançado?", a: "Não. O Habilidade Ativa é para quem tem pânico de falar, independentemente do seu nível atual de conhecimento." },
              { q: "O que é o Protego Mental?", a: "É a nossa metodologia exclusiva que une psicologia e acolhimento para neutralizar os bloqueios emocionais ao falar." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-primary/20 bg-card/30 hover:bg-card/40 transition-all rounded-sm overflow-hidden">
                <AccordionTrigger className="text-left font-headline text-sm md:text-lg hover:text-primary transition-all p-8 md:p-10 no-underline hover:no-underline group">
                  <span className="flex items-center gap-5 md:gap-7 pr-4">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:rotate-12 transition-transform shrink-0" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/95 text-sm md:text-base p-8 md:p-10 border-t border-primary/10 leading-relaxed bg-background/30">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SEÇÃO 6: CTA FINAL */}
      <section className="py-24 md:py-48 px-4 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[60svh] w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none w-full max-w-4xl scale-150 overflow-hidden">
           <Image 
            src={images.ornamental.imageUrl} 
            alt={images.ornamental.description} 
            width={1200} 
            height={1200} 
            className="no-drag w-full h-auto" 
            data-ai-hint={images.ornamental.imageHint}
           />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 scroll-reveal text-center w-full px-2">
          <h2 className="text-3xl md:text-7xl font-headline text-foreground mb-8 md:mb-12 leading-[1.1] px-1">
            Não deixe o medo decidir <br />
            <span className="gold-leaf mystic-script text-4xl md:text-9xl mt-2 block py-4 px-10">o futuro da sua carreira.</span>
          </h2>
          <p className="text-primary mb-8 md:mb-12 max-w-lg mx-auto uppercase tracking-[0.3em] md:tracking-[0.6em] text-[10px] md:text-[12px] font-bold">
            Garantir minha vaga no Habilidade Ativa
          </p>
          <div className="max-w-md mx-auto w-full px-2">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="pt-16 md:pt-24 pb-20 md:pb-40 text-center border-t border-primary/20 bg-background/98 backdrop-blur-2xl relative z-20 px-4 w-full mt-auto">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-10 md:mb-16 transition-all duration-1000 hover:scale-105 group flex justify-center">
            <div className="max-w-[150px] md:max-w-[240px] w-full">
              <Image 
                src={images.logo.imageUrl} 
                alt={images.logo.description} 
                width={240} 
                height={70} 
                className="mx-auto opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 w-full h-auto no-drag"
                data-ai-hint={images.logo.imageHint}
              />
            </div>
          </div>
          
          <div className="ornament-line mx-auto max-w-[200px] md:max-w-[300px] mb-10 md:mb-12 opacity-40"></div>
          
          <p className="text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[1em] uppercase mb-10 md:mb-16 text-primary font-bold">
            &copy; {new Date().getFullYear()} Caroline Renó | Safe & Sound • Habilidade Ativa Academy
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.6em] font-bold text-muted-foreground/50">
            <Link href="/termos" className="cursor-pointer hover:text-primary transition-all duration-700 hover:tracking-[0.6em] md:hover:tracking-[0.8em] relative group px-2">
              Termos de Uso
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-primary/60 transition-all duration-700 group-hover:w-full"></span>
            </Link>
            <Link href="/privacidade" className="cursor-pointer hover:text-primary transition-all duration-700 hover:tracking-[0.6em] md:hover:tracking-[0.8em] relative group px-2">
              Política de Privacidade
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-primary/60 transition-all duration-700 group-hover:w-full"></span>
            </Link>
            <span className="cursor-pointer hover:text-primary transition-all duration-700 hover:tracking-[0.6em] md:hover:tracking-[0.8em] relative group px-2">
              Instagram Oficial
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-primary/60 transition-all duration-700 group-hover:w-full"></span>
            </span>
          </div>
          
          <div className="mt-16 md:mt-24 opacity-20 pointer-events-none select-none flex justify-center animate-magical-float">
            <SacredOwl className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
        </div>
      </footer>
    </div>
  );
}
