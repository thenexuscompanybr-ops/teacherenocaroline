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
import { Loader2, Compass, MessageCircle, Sparkles, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { SacredOwl } from '@/components/ui/sacred-owl';

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
        new Promise(resolve => setTimeout(() => resolve(null), 600))
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
        <DialogContent className="bg-[#f4ecd8] border-[#8b7355] w-[95vw] md:max-w-2xl text-[#4a3728] rounded-none p-0 overflow-hidden outline-none shadow-2xl sanctuary-glow border-2">
          {/* Botão de fechar customizado para o tema de pergaminho */}
          <DialogClose className="absolute right-4 top-4 z-[120] text-[#8b7355] hover:text-[#4a3728] transition-colors p-2 rounded-full hover:bg-black/5">
            <X className="h-6 w-6" />
            <span className="sr-only">Fechar</span>
          </DialogClose>

          <div className="relative p-6 md:p-12 min-h-[500px] flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]" />
            <div className="absolute inset-4 border border-[#8b7355]/30 pointer-events-none" />
            <div className="absolute inset-6 border-2 border-[#8b7355]/10 pointer-events-none" />

            <div className="relative z-10 w-full">
              <div className="mb-6 relative flex justify-center animate-owl-arrival">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-portal-spin" />
                <div className="w-28 h-28 md:w-36 md:h-36 bg-[#e8dec0] border-2 border-[#8b7355]/40 flex items-center justify-center shadow-xl rounded-full relative overflow-hidden">
                   <SacredOwl className="w-16 h-16 md:w-20 h-20 text-[#8b7355] animate-magical-float" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary/60 animate-bounce" />
              </div>

              <DialogHeader className="mb-6">
                <DialogTitle className="text-3xl md:text-5xl font-headline text-[#4a3728] mb-2">
                  A Coruja Chegou.
                </DialogTitle>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-12 bg-[#8b7355]/30" />
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b7355] font-bold">Convite de Iniciação</p>
                  <div className="h-[1px] w-12 bg-[#8b7355]/30" />
                </div>
              </DialogHeader>

              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100 fill-mode-both">
                <div className="relative p-6 md:p-10 bg-[#fffdf5]/50 border border-[#8b7355]/20 shadow-inner">
                  <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-[#8b0000] rounded-full shadow-lg flex items-center justify-center border-4 border-[#6b0000] rotate-12 z-20">
                    <span className="font-headline text-white text-lg md:text-xl opacity-80">CR</span>
                  </div>
                  
                  <div className="max-h-[25vh] overflow-y-auto custom-scrollbar italic font-body text-base md:text-lg leading-relaxed text-[#5c4a3a]">
                    {successData?.message}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    onClick={handleJoinWhatsApp} 
                    className="w-full bg-[#1a2320] hover:bg-[#2a3330] text-primary h-14 rounded-none border border-primary/30 transition-all duration-500 shadow-xl group relative overflow-hidden magic-pulse"
                  >
                    <div className="flex items-center justify-center gap-4 relative z-10">
                      <MessageCircle className="h-5 w-5 animate-bounce" />
                      <span className="tracking-[0.3em] font-bold text-[10px]">ENTRAR NO GRUPO VIP (GRATUITO)</span>
                    </div>
                  </Button>
                </div>

                <p className="text-[9px] uppercase tracking-[0.6em] text-[#8b7355]/40 font-bold">
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
