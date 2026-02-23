"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { MagicParticles } from '@/components/ui/magic-particles';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SacredOwl } from '@/components/ui/sacred-owl';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function TermsPage() {
  useScrollReveal();
  const logo = PlaceHolderImages.find(img => img.id === 'brand-logo')!;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden selection-sonserina font-body">
      <MagicParticles />
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="mb-12 flex flex-col items-center text-center scroll-reveal">
          <Link href="/" className="mb-12 hover:scale-105 transition-transform duration-500">
            <Image 
              src={logo.imageUrl} 
              alt={logo.description} 
              width={200} 
              height={60} 
              className="logo-glow no-drag"
              priority
              data-ai-hint={logo.imageHint}
            />
          </Link>
          
          <div className="inline-flex items-center gap-3 py-1.5 px-6 border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-8">
            <SacredOwl className="w-3.5 h-3.5" />
            Estatutos do Santuário
          </div>
          
          <h1 className="text-4xl md:text-6xl font-headline mb-6 leading-tight">
            Termos de <span className="gold-leaf italic mystic-script text-5xl md:text-8xl block mt-2 py-10 px-2">Uso e Conduta</span>
          </h1>
          <div className="ornament-line mx-auto max-w-xs opacity-40"></div>
        </div>

        <div className="brand-card p-8 md:p-16 space-y-12 text-muted-foreground leading-relaxed text-sm md:text-base border-primary/20 bg-card/20 backdrop-blur-xl scroll-reveal">
          <section>
            <h2 className="text-primary font-headline text-xl mb-4 tracking-widest uppercase">1. Aceitação dos Termos</h2>
            <p>
              Ao cruzar os portais da Safe & Sound Academy (doravante denominada "Santuário"), o iniciado concorda em cumprir estes estatutos. O acesso às nossas práticas e ensinamentos implica na aceitação plena e sem reservas de todas as diretrizes aqui estabelecidas.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-headline text-xl mb-4 tracking-widest uppercase">2. Propriedade Intelectual</h2>
            <p>
              Todos os rituais, métodos (incluindo o Protego Mental e Habilidade Ativa), textos, logotipos e magias visuais são de propriedade exclusiva da Mestra Caroline Renó. A reprodução não autorizada de nossa alquimia linguística é estritamente proibida e sujeita a penalidades civis e místicas.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-headline text-xl mb-4 tracking-widest uppercase">3. Conduta do Iniciado</h2>
            <p>
              O Santuário é um ambiente de acolhimento e crescimento. Espera-se que todos os membros mantenham uma conduta de respeito mútuo. Qualquer tentativa de sabotagem, desrespeito ou uso de artes obscuras (spam, ataques cibernéticos) resultará no banimento imediato de todos os nossos círculos de ensino.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-headline text-xl mb-4 tracking-widest uppercase">4. Limitação de Responsabilidade</h2>
            <p>
              Embora nossos métodos sejam desenhados para a maestria, o sucesso final depende da disciplina e dedicação de cada iniciado. O Santuário fornece as ferramentas e o mapa; o caminhar pela jornada da fluência é uma responsabilidade individual.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-headline text-xl mb-4 tracking-widest uppercase">5. Alterações nos Estatutos</h2>
            <p>
              Reservamo-nos o direito de transmutar estes termos a qualquer momento para melhor servir à segurança e evolução do Santuário. Recomendamos consultas periódicas a este pergaminho.
            </p>
          </section>
        </div>

        <div className="mt-16 text-center scroll-reveal">
          <Link href="/" className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.4em] uppercase text-primary/60 hover:text-primary transition-all group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            Retornar ao Portal Principal
          </Link>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-primary/10 bg-background/50">
        <p className="text-[9px] tracking-[0.5em] uppercase text-muted-foreground/40 font-bold">
          &copy; {new Date().getFullYear()} Caroline Renó | Safe & Sound • Habilidade Ativa Academy
        </p>
      </footer>
    </div>
  );
}
