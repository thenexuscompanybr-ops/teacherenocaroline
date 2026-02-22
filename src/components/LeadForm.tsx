
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
import { Loader2, Wand2, Compass, Bird } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Sua identificação mística é necessária.' }),
  email: z.string().email({ message: 'A coruja exige um e-mail válido.' }),
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
        registrationSource: 'Santuário Safe & Sound',
        courseName: 'Safe & Sound: Habilidade Ativa',
        teacherName: 'Caroline Renó',
        courseGoal: 'Superar os Dementadores do Medo e as Trevas do Bloqueio Mental.',
        courseBenefits: 'Protego Mental, Defesa Contra Travas, Suporte via Coruja',
      });
      
      setSuccessData({ message: response.message, name: values.name });
    } catch (error) {
      console.error('Falha no ritual de inscrição:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full relative z-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-primary/60 uppercase tracking-[0.3em] text-[9px] font-bold">Identificação do Iniciado</FormLabel>
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
                <FormLabel className="text-primary/60 uppercase tracking-[0.3em] text-[9px] font-bold">Coruja Digital (E-mail)</FormLabel>
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
            className="w-full cta-button h-14 text-[10px] group gold-shimmer mt-4"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span className="tracking-[0.2em]">Invocando...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <span className="tracking-[0.2em]">Quero me inscrever gratuitamente</span>
                <Compass className="h-3 w-3 opacity-50 group-hover:rotate-45 transition-all" />
              </div>
            )}
          </Button>
        </form>
      </Form>

      <Dialog open={!!successData} onOpenChange={() => setSuccessData(null)}>
        <DialogContent className="bg-background border-primary/20 max-w-2xl text-foreground rounded-none p-0 overflow-hidden">
          <div className="relative p-10">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-1/2">
               <Image src="https://imgur.com/bQxd94N.png" alt="Seal" width={400} height={400} />
            </div>
            
            <DialogHeader>
              <DialogTitle className="flex items-center gap-4 text-3xl font-headline text-primary">
                <Bird className="w-8 h-8" />
                A Coruja chegou.
              </DialogTitle>
            </DialogHeader>
            <div className="mt-8 space-y-8 relative z-10">
              <div className="p-8 bg-card/40 border border-primary/10 italic text-base leading-relaxed text-muted-foreground font-body">
                {successData?.message}
              </div>
              <p className="text-center font-bold text-primary/60 text-[9px] uppercase tracking-[0.5em]">
                O Ritual Safe & Sound Começou.
              </p>
              <Button onClick={() => setSuccessData(null)} className="w-full bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20 h-12 uppercase tracking-[0.3em] text-[9px] font-bold rounded-none transition-all">
                Fechar Grimório
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
