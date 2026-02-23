"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { MagicParticles } from '@/components/ui/magic-particles';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SacredOwl } from '@/components/ui/sacred-owl';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function PrivacyPage() {
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
            Protego Mental e Dados
          </div>
          
          <h1 className="text-4xl md:text-6xl font-headline mb-6 leading-tight">
            Política de <span className="gold-leaf italic mystic-script text-5xl md:text-8xl block mt-2 py-10 px-2">Privacidade</span>
          </h1>
          <div className="ornament-line mx-auto max-w-xs opacity-40"></div>
        </div>

        <div className="brand-card p-8 md:p-16 space-y-12 text-muted-foreground leading-relaxed text-sm md:text-base border-primary/20 bg-card/20 backdrop-blur-xl scroll-reveal">
          <section>
            <h2 className="text-primary font-headline text-xl mb-4 tracking-widest uppercase">1. Coleta de Identidade</h2>
            <p>
              Para iniciar sua jornada na Safe & Sound, coletamos apenas as informações essenciais através da nossa Coruja Digital: seu nome e e-mail. Essas informações são tratadas como segredos sagrados, utilizados exclusivamente para personalizar sua convocação e manter você informado sobre seus rituais de aprendizagem.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-headline text-xl mb-4 tracking-widest uppercase">2. Uso da Informação</h2>
            <p>
              Seus dados são a chave para abrirmos portais de comunicação. Nós os utilizamos para enviar as aulas do Grupo VIP, mensagens de apoio via WhatsApp e informações sobre o método Protego Mental. Nunca utilizaremos seus dados para rituais obscuros ou envio de mensagens indesejadas (spam).
            </p>
          </section>

          <section>
            <h2 className="text-primary font-headline text-xl mb-4 tracking-widest uppercase">3. Proteção e Segurança</h2>
            <p>
              Implementamos camadas de segurança rigorosas para garantir que sua identidade permaneça inviolável. Utilizamos tecnologias de criptografia e proteção de dados que funcionam como um escudo místico em torno das suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-headline text-xl mb-4 tracking-widest uppercase">4. Compartilhamento Consciente</h2>
            <p>
              Seus dados nunca são vendidos a mercadores de informações. Compartilhamos apenas o estritamente necessário com serviços essenciais de infraestrutura (como Firebase para armazenamento e WhatsApp para comunicação), que seguem seus próprios protocolos de proteção rigorosos.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-headline text-xl mb-4 tracking-widest uppercase">5. Seus Direitos de Iniciado</h2>
            <p>
              Você detém total autoridade sobre seus dados. A qualquer momento, você pode solicitar a purificação (exclusão) das suas informações de nossos registros através do Suporte via Coruja. Respeitamos seu livre arbítrio em decidir quando deseja encerrar sua jornada conosco.
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
