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
import { Loader2, Sparkles, Wand2 } from 'lucide-react';
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
        registrationSource: 'Landing Page Oficial Caroline Renó',
        courseName: 'Habilidade Ativa: O Despertar',
        teacherName: 'Caroline Renó',
        courseGoal: 'Transmutar o medo em fluência absoluta e autoridade profissional.',
        courseBenefits: '3 lições práticas, Metodologia de psicologia, Suporte VIP',
      });
      
      setSuccessData({ message: response.message, name: values.name });
    } catch (error) {
      console.error('Falha na inscrição:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-muted-foreground uppercase tracking-widest text-[9px] font-bold">Identificação</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome completo" 
                    {...field} 
                    className="h-12 bg-card/60 border-primary/20 focus:border-primary/50 transition-all rounded-sm placeholder:text-muted-foreground/30 text-sm" 
                  />
                </FormControl>
                <FormMessage className="text-[10px] text-primary/80 font-medium" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-muted-foreground uppercase tracking-widest text-[9px] font-bold">Coruja Digital (E-mail)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="seu@email.com" 
                    {...field} 
                    className="h-12 bg-card/60 border-primary/20 focus:border-primary/50 transition-all rounded-sm placeholder:text-muted-foreground/30 text-sm" 
                  />
                </FormControl>
                <FormMessage className="text-[10px] text-primary/80 font-medium" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full cta-button h-14 text-xs group"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Processando...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <span>Quero Garantir Minha Vaga</span>
                <Sparkles className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
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
              Boas-vindas, {successData?.name}!
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6 space-y-6">
            <div className="p-8 bg-black/20 border border-primary/10 rounded-sm italic text-base leading-relaxed text-muted-foreground relative font-serif">
              {successData?.message}
            </div>
            <p className="text-center font-bold text-primary text-[10px] uppercase tracking-[0.3em]">
              Sua primeira lição chegará em breve.
            </p>
            <Button onClick={() => setSuccessData(null)} className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 h-12 uppercase tracking-widest text-[10px] font-bold">
              Fechar Grimório
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
