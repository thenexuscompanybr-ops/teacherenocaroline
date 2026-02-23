"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { Loader2, Compass, MessageCircle, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
import { SacredOwl } from '@/components/ui/sacred-owl';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Sua identificação mística é necessária.' }),
  email: z.string().email({ message: 'A coruja exige um e-mail válido.' }),
});

export function LeadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ message: string; name: string } | null>(null);
  const firestore = useFirestore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    const fallbackMessage = `Prezado(a) ${values.name}, sua convocação para o Santuário Safe & Sound foi aceita. Você deu o primeiro passo para silenciar a Maldição do Silêncio e retomar o poder da sua voz em inglês. O mensageiro já está a caminho com as instruções para o primeiro ritual no WhatsApp.`;

    try {
      const leadsRef = collection(firestore, 'leads');
      addDocumentNonBlocking(leadsRef, {
        name: values.name,
        email: values.email,
        captureDateTime: serverTimestamp(),
        source: 'Landing Page Safe & Sound',
      });

      const aiPromise = generatePersonalizedFollowUpMessage({
        leadName: values.name,
        leadEmail: values.email,
        registrationSource: 'Santuário Safe & Sound',
        courseName: 'Safe & Sound: Habilidade Ativa',
        teacherName: 'Caroline Renó',
        courseGoal: 'Superar os Dementadores do Medo e as Trevas do Bloqueio Mental.',
        courseBenefits: 'Protego Mental, Defesa Contra Travas, Suporte via Coruja',
      }).catch(() => null);

      const aiResponse = await Promise.race([
        aiPromise,
        new Promise(resolve => setTimeout(() => resolve(null), 1500))
      ]) as any;

      setSuccessData({ 
        message: aiResponse?.message || fallbackMessage, 
        name: values.name 
      });
      
    } catch (error: any) {
      setSuccessData({ message: fallbackMessage, name: values.name });
    } finally {
      setIsLoading(false);
    }
  }

  const handleJoinWhatsApp = () => {
    window.open('https://chat.whatsapp.com/seu-link-aqui', '_blank');
  };

  return (
    <div className="w-full relative z-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] font-bold">Identificação do Iniciado</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome completo" 
                    {...field} 
                    className="h-12 md:h-14 bg-foreground text-background border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all rounded-none placeholder:text-background/40 text-sm md:text-base font-medium shadow-2xl" 
                  />
                </FormControl>
                <FormMessage className="text-[10px] text-primary font-bold uppercase mt-1.5" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] font-bold">Coruja Digital (E-mail)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="seu@email.com" 
                    {...field} 
                    className="h-12 md:h-14 bg-foreground text-background border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all rounded-none placeholder:text-background/40 text-sm md:text-base font-medium shadow-2xl" 
                  />
                </FormControl>
                <FormMessage className="text-[10px] text-primary font-bold uppercase mt-1.5" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full cta-button h-14 md:h-16 text-[10px] md:text-[12px] group gold-shimmer mt-4 shadow-2xl"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="tracking-[0.1em] md:tracking-[0.2em]">Invocando...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <span className="tracking-[0.1em] md:tracking-[0.3em]">Inscreva-se Gratuitamente</span>
                <Compass className="h-4 w-4 opacity-70 group-hover:rotate-45 transition-all" />
              </div>
            )}
          </Button>
        </form>
      </Form>

      <Dialog open={!!successData} onOpenChange={() => setSuccessData(null)}>
        <DialogContent className="bg-[#f4ecd8] border-[#8b7355] w-[95vw] md:max-w-2xl text-[#4a3728] rounded-none p-0 overflow-hidden outline-none shadow-2xl border-2 z-[110]">
          <div className="relative p-6 md:p-14 flex flex-col justify-center items-center text-center w-full max-h-[90svh] overflow-y-auto custom-scrollbar">
            {/* Background Decorativo Fixo */}
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/parchment.png')] z-0" />
            <div className="absolute inset-4 border border-[#8b7355]/30 pointer-events-none z-0" />
            <div className="absolute inset-6 border-2 border-[#8b7355]/10 pointer-events-none z-0" />

            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="mb-8 relative flex justify-center animate-owl-arrival">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-portal-spin" />
                <div className="w-24 h-24 md:w-40 md:h-40 bg-[#e8dec0] border-2 border-[#8b7355]/40 flex items-center justify-center shadow-2xl rounded-full relative overflow-hidden">
                   <SacredOwl className="w-16 h-16 md:w-24 md:h-24 text-[#8b7355] animate-magical-float" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-10 md:h-10 text-primary/60 animate-bounce" />
              </div>

              <DialogHeader className="mb-6 md:mb-10 w-full">
                <DialogTitle className="text-2xl md:text-5xl font-headline text-[#4a3728] mb-4 leading-tight">
                  A Coruja Chegou.
                </DialogTitle>
                <div className="flex items-center justify-center gap-4 w-full">
                  <div className="h-[1px] flex-1 max-w-[60px] md:max-w-[100px] bg-[#8b7355]/30" />
                  <p className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#8b7355] font-bold whitespace-nowrap">Convite de Iniciação</p>
                  <div className="h-[1px] flex-1 max-w-[60px] md:max-w-[100px] bg-[#8b7355]/30" />
                </div>
              </DialogHeader>

              <div className="space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both w-full">
                <div className="relative p-6 md:p-14 bg-[#fffdf5]/70 border border-[#8b7355]/25 shadow-inner">
                  <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-20 md:h-20 bg-[#8b0000] rounded-full shadow-2xl flex items-center justify-center border-2 md:border-4 border-[#6b0000] rotate-12 z-20">
                    <span className="font-headline text-white text-base md:text-2xl opacity-95">CR</span>
                  </div>
                  
                  <div className="italic font-body text-sm md:text-xl leading-relaxed text-[#5c4a3a]">
                    {successData?.message}
                  </div>
                </div>
                
                <div className="pt-2 md:pt-4 w-full">
                  <Button 
                    onClick={handleJoinWhatsApp} 
                    className="w-full bg-[#1a2320] hover:bg-[#2a3330] text-primary h-14 md:h-18 rounded-none border border-primary/50 transition-all duration-700 shadow-2xl group relative overflow-hidden magic-pulse"
                  >
                    <div className="flex items-center justify-center gap-4 md:gap-6 relative z-10">
                      <MessageCircle className="h-5 w-5 md:h-7 md:h-7 animate-bounce" />
                      <span className="tracking-[0.2em] md:tracking-[0.5em] font-bold text-[10px] md:text-[12px]">ENTRAR NO GRUPO VIP (GRATUITO)</span>
                    </div>
                  </Button>
                </div>

                <p className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.8em] text-[#8b7355]/60 font-bold pb-4">
                  Sua herança linguística foi preservada.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
