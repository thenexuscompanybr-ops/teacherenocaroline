
"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { generatePersonalizedFollowUpMessage } from '@/ai/flows/personalized-follow-up-message-flow';
import { Loader2, Compass, Bird, MessageCircle, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Sua identificação mística é necessária.' }),
  email: z.string().email({ message: 'A coruja exige um e-mail válido.' }),
});

export function LeadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ message: string; name: string } | null>(null);
  const firestore = useFirestore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  function getFallbackMessage(name: string): string {
    return `Prezado(a) ${name},\n\nSua inscrição no Santuário Safe & Sound foi registrada com sucesso. Você deu o primeiro passo para enfrentar os Dementadores do Medo e quebrar a Maldição do Silêncio.\n\nNo curso "Safe & Sound: Habilidade Ativa", sob a orientação da Mestra Caroline Renó, você construirá seu Protego Mental — o escudo psicológico que transformará insegurança em Vocal Authority.\n\nPrepare-se: o primeiro ritual de Defesa Contra as Travas Mentais se aproxima. Nossa coruja digital (Suporte via Coruja) trará as próximas instruções em breve.\n\nBem-vindo(a) à Ordem. Sua voz é a arma mais poderosa do seu arsenal profissional — e nós vamos despertá-la.`;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      // 1. Salva o Lead no Pergaminho Digital (Firestore) - Não bloqueante
      const leadsRef = collection(firestore, 'leads');
      addDocumentNonBlocking(leadsRef, {
        name: values.name,
        email: values.email,
        captureDateTime: serverTimestamp(),
        source: 'Landing Page Safe & Sound',
      });

      // 2. Tenta gerar mensagem personalizada via IA, com fallback
      let message: string;
      try {
        const response = await generatePersonalizedFollowUpMessage({
          leadName: values.name,
          leadEmail: values.email,
          registrationSource: 'Santuário Safe & Sound',
          courseName: 'Safe & Sound: Habilidade Ativa',
          teacherName: 'Caroline Renó',
          courseGoal: 'Superar os Dementadores do Medo e as Trevas do Bloqueio Mental.',
          courseBenefits: 'Protego Mental, Defesa Contra Travas, Suporte via Coruja',
        });
        message = response?.message || getFallbackMessage(values.name);
      } catch (aiError) {
        console.warn('Mensagem personalizada indisponível, usando fallback:', aiError);
        message = getFallbackMessage(values.name);
      }

      setSuccessData({ message, name: values.name });
    } catch (error: any) {
      console.error('Falha no ritual de inscrição:', error);
      toast({
        variant: "destructive",
        title: "Erro no Ritual",
        description: "Os ventos mágicos estão instáveis. Por favor, tente novamente em instantes.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleJoinWhatsApp = () => {
    // Inserir link real do grupo de WhatsApp aqui
    window.open('https://chat.whatsapp.com/seu-link-aqui', '_blank');
  };

  return (
    <div className="w-full relative z-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-primary/60 uppercase tracking-[0.3em] text-[8px] md:text-[9px] font-bold">Identificação do Iniciado</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome completo" 
                    {...field} 
                    className="h-12 bg-card/30 border-primary/10 focus:border-primary/40 transition-all rounded-none placeholder:text-muted-foreground/20 text-sm font-medium" 
                  />
                </FormControl>
                <FormMessage className="text-[9px] text-primary/80 font-bold uppercase" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-primary/60 uppercase tracking-[0.3em] text-[8px] md:text-[9px] font-bold">Coruja Digital (E-mail)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="seu@email.com" 
                    {...field} 
                    className="h-12 bg-card/30 border-primary/10 focus:border-primary/40 transition-all rounded-none placeholder:text-muted-foreground/20 text-sm font-medium" 
                  />
                </FormControl>
                <FormMessage className="text-[9px] text-primary/80 font-bold uppercase" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full cta-button h-14 text-[9px] md:text-[10px] group gold-shimmer mt-4"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span className="tracking-[0.2em]">Invocando...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <span className="tracking-[0.1em] md:tracking-[0.2em]">Inscreva-se Gratuitamente</span>
                <Compass className="h-3 w-3 opacity-50 group-hover:rotate-45 transition-all" />
              </div>
            )}
          </Button>
        </form>
      </Form>

      <Dialog open={!!successData} onOpenChange={() => setSuccessData(null)}>
        <DialogContent className="bg-background border-primary/20 w-[95vw] md:max-w-2xl text-foreground rounded-none p-0 overflow-hidden outline-none sanctuary-glow">
          <div className="relative p-6 md:p-10">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-1/2">
               <Image src="https://i.imgur.com/bQxd94N.png" alt="Seal" width={400} height={400} />
            </div>
            
            <DialogHeader>
              <DialogTitle className="flex items-center gap-4 text-2xl md:text-3xl font-headline text-primary">
                <Bird className="w-6 h-6 md:w-8 md:h-8" />
                A Coruja chegou.
              </DialogTitle>
            </DialogHeader>
            <div className="mt-6 md:mt-8 space-y-6 md:space-y-8 relative z-10">
              <div className="p-4 md:p-8 bg-card/40 border border-primary/10 italic text-sm md:text-base leading-relaxed text-muted-foreground font-body max-h-[40vh] overflow-y-auto selection-sonserina custom-scrollbar">
                {successData?.message}
              </div>
              
              <div className="space-y-4">
                <p className="text-center font-bold text-primary/80 text-[10px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  Ritual Final: Entre no Grupo VIP
                  <Sparkles className="w-3 h-3" />
                </p>
                <Button 
                  onClick={handleJoinWhatsApp} 
                  className="w-full cta-button h-16 text-[10px] md:text-[12px] group gold-shimmer bg-primary hover:bg-primary/90 magic-pulse shadow-[0_0_25px_-5px_hsla(45,33%,40%,0.6)]"
                >
                  <div className="flex items-center justify-center gap-3">
                    <MessageCircle className="h-5 w-5 animate-bounce" />
                    <span className="tracking-[0.2em] font-bold">ATRAVESSAR O PORTAL (GRUPO VIP)</span>
                  </div>
                </Button>
              </div>

              <p className="text-center text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-muted-foreground/40 font-bold">
                Sua vaga no Santuário expira em breve.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
