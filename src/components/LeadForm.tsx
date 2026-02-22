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
import { Loader2, Sparkles, CheckCircle2, Wand2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
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
        registrationSource: 'Ritual de Inscrição Dark',
        courseName: 'Habilidade Ativa: O Despertar',
        teacherName: 'Mestra Caroline Renó',
        courseGoal: 'Transmutar o medo em fluência absoluta e autoridade profissional.',
        courseBenefits: '3 lições secretas, Metodologia de psicologia transmutativa, Santuário de prática seguro',
      });
      
      setSuccessData({ message: response.message, name: values.name });
    } catch (error) {
      console.error('Iniciação falhou:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Identificação</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Como você é conhecido(a)?" 
                    {...field} 
                    className="h-12 bg-card/40 border-primary/20 focus:border-primary/60 transition-all rounded-sm placeholder:text-muted-foreground/40" 
                  />
                </FormControl>
                <FormMessage className="text-[10px] text-accent font-bold" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Endereço de Coruja Digital</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="seu@grimorio.com" 
                    {...field} 
                    className="h-12 bg-card/40 border-primary/20 focus:border-primary/60 transition-all rounded-sm placeholder:text-muted-foreground/40" 
                  />
                </FormControl>
                <FormMessage className="text-[10px] text-accent font-bold" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full cta-button h-14 text-sm font-bold group relative overflow-hidden"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin text-background" />
                <span className="tracking-[0.2em]">Iniciando Ritual...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <span className="tracking-[0.2em]">Reclamar Meu Lugar</span>
                <Sparkles className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            )}
          </Button>
        </form>
      </Form>

      <Dialog open={!!successData} onOpenChange={() => setSuccessData(null)}>
        <DialogContent className="bg-card border-primary/30 max-w-2xl text-foreground">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl font-headline text-primary">
              <Wand2 className="w-6 h-6" />
              Bem-vindo à Ordem, {successData?.name}!
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6 space-y-6">
            <div className="p-8 bg-black/40 border border-primary/10 rounded-sm italic text-lg leading-relaxed text-muted-foreground relative">
              <span className="absolute -top-4 -left-2 text-6xl text-primary/10 font-serif">"</span>
              {successData?.message}
            </div>
            <p className="text-center font-bold text-primary text-sm uppercase tracking-widest">
              Sua primeira coruja está a caminho.
            </p>
            <Button onClick={() => setSuccessData(null)} className="w-full bg-primary/20 hover:bg-primary/40 text-primary border border-primary/30 h-12 uppercase tracking-widest text-xs font-bold">
              Prosseguir com Cuidado
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}