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
import { Loader2, Sparkles, Wand2, Compass } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const formSchema = z.object({
  name: z.string().min(2, { message: 'A identificação deve ser autêntica.' }),
  email: z.string().email({ message: 'A coruja digital exige um e-mail válido.' }),
});

export function LeadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ message: string; name: string } | null>(null);

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
      const response = await generatePersonalizedFollowUpMessage({
        leadName: values.name,
        leadEmail: values.email,
        registrationSource: 'Santuário Oficial Caroline Renó',
        courseName: 'Habilidade Ativa: O Despertar da Autoridade',
        teacherName: 'Caroline Renó',
        courseGoal: 'Transmutar o silêncio profissional em fluência absoluta e maestria verbal.',
        courseBenefits: '3 lições de autoridade, Psicologia das Sombras, Mentorias VIP',
      });
      
      setSuccessData({ message: response.message, name: values.name });
    } catch (error) {
      console.error('Falha no ritual:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto relative z-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-primary/70 uppercase tracking-[0.4em] text-[10px] font-bold">Identificação Profissional</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome completo" 
                    {...field} 
                    className="h-12 bg-card/40 border-primary/20 focus:border-primary/60 transition-all rounded-none placeholder:text-muted-foreground/30 text-sm font-medium tracking-wide" 
                  />
                </FormControl>
                <FormMessage className="text-[10px] text-primary/80 font-bold tracking-widest uppercase" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-primary/70 uppercase tracking-[0.4em] text-[10px] font-bold">Coruja Digital (E-mail)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="seu@email.com" 
                    {...field} 
                    className="h-12 bg-card/40 border-primary/20 focus:border-primary/60 transition-all rounded-none placeholder:text-muted-foreground/30 text-sm font-medium tracking-wide" 
                  />
                </FormControl>
                <FormMessage className="text-[10px] text-primary/80 font-bold tracking-widest uppercase" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full cta-button h-14 text-xs group gold-shimmer"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="tracking-[0.3em]">Calibrando Frequência...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <span className="tracking-[0.3em]">Garantir Acesso à Ordem</span>
                <Compass className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
              </div>
            )}
          </Button>
        </form>
      </Form>

      <Dialog open={!!successData} onOpenChange={() => setSuccessData(null)}>
        <DialogContent className="bg-background border-primary/30 max-w-2xl text-foreground rounded-none p-0 overflow-hidden">
          <div className="relative p-10">
            {/* Gráfico oficial de fundo no modal */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-1/2">
               <Image src="https://imgur.com/bQxd94N.png" alt="Seal" width={400} height={400} />
            </div>
            
            <DialogHeader>
              <DialogTitle className="flex items-center gap-4 text-3xl font-headline text-primary">
                <Wand2 className="w-8 h-8" />
                Boas-vindas, {successData?.name}.
              </DialogTitle>
            </DialogHeader>
            <div className="mt-8 space-y-8 relative z-10">
              <div className="p-8 bg-card/60 border border-primary/20 italic text-base leading-relaxed text-muted-foreground relative font-body shadow-inner">
                {successData?.message}
              </div>
              <p className="text-center font-bold text-primary text-[10px] uppercase tracking-[0.5em]">
                O Ritual de Ascensão Começou.
              </p>
              <Button onClick={() => setSuccessData(null)} className="w-full bg-primary/5 hover:bg-primary/10 text-primary border border-primary/30 h-12 uppercase tracking-[0.4em] text-[10px] font-bold rounded-none transition-all">
                Fechar Grimório
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}