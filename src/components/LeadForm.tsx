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
import { Loader2, Compass, Bird, MessageCircle, Sparkles, Wand2 } from 'lucide-react';
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

      // 2. Invoca a Inteligência para a Mensagem Personalizada
      const response = await generatePersonalizedFollowUpMessage({
        leadName: values.name,
        leadEmail: values.email,
        registrationSource: 'Santuário Safe & Sound',
        courseName: 'Safe & Sound: Habilidade Ativa',
        teacherName: 'Caroline Renó',
        courseGoal: 'Superar os Dementadores do Medo e as Trevas do Bloqueio Mental.',
        courseBenefits: 'Protego Mental, Defesa Contra Travas, Suporte via Coruja',
      });
      
      if (response && response.message) {
        setSuccessData({ message: response.message, name: values.name });
      } else {
        throw new Error("A coruja se perdeu no caminho.");
      }
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
          <div className="relative p-6 md:p-10 min-h-[500px] flex flex-col justify-center">
            {/* Fundo de Portal Místico */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
               <div className="w-[800px] h-[800px] border-[2px] border-dashed border-primary rounded-full animate-portal-spin" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Animação da Coruja Chegando */}
              <div className="mb-8 relative animate-owl-arrival">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse" />
                <div className="w-24 h-24 md:w-32 md:h-32 bg-card/60 border-2 border-primary/30 flex items-center justify-center sanctuary-glow relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/10 animate-pulse" />
                   <Bird className="w-12 h-12 md:w-16 md:h-16 text-primary animate-magical-float" />
                </div>
                {/* Partículas ao redor da Coruja */}
                <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-primary/60 animate-bounce" />
                <Wand2 className="absolute -bottom-2 -left-6 w-5 h-5 text-primary/40 rotate-12" />
              </div>

              <DialogHeader className="text-center w-full">
                <DialogTitle className="text-3xl md:text-4xl font-headline text-primary text-center mb-2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  A Coruja Chegou.
                </DialogTitle>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary/40 font-bold mb-6">Convite Preservado em Pergaminho</p>
              </DialogHeader>

              <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
                <div className="p-6 md:p-10 bg-card/60 border border-primary/20 italic text-sm md:text-base leading-relaxed text-muted-foreground font-body max-h-[35vh] overflow-y-auto selection-sonserina custom-scrollbar relative">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30" />
                  {successData?.message}
                </div>
                
                <div className="space-y-4">
                  <p className="text-center font-bold text-primary/80 text-[10px] md:text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    Atravessar o Portal Final
                    <Sparkles className="w-3 h-3 animate-pulse" />
                  </p>
                  <Button 
                    onClick={handleJoinWhatsApp} 
                    className="w-full cta-button h-16 text-[10px] md:text-[12px] group gold-shimmer bg-primary hover:bg-primary/90 magic-pulse shadow-[0_0_40px_-10px_hsla(45,33%,40%,0.8)]"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <MessageCircle className="h-5 w-5 animate-bounce" />
                      <span className="tracking-[0.2em] font-bold">ENTRAR NO GRUPO VIP (GRATUITO)</span>
                    </div>
                  </Button>
                </div>

                <p className="text-center text-[8px] uppercase tracking-[0.5em] text-muted-foreground/30 font-bold">
                  Sua herança linguística espera por você.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
