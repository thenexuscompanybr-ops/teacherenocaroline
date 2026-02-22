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
import { Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
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
      // AI Flow call
      const response = await generatePersonalizedFollowUpMessage({
        leadName: values.name,
        leadEmail: values.email,
        registrationSource: 'Landing Page Form',
        courseName: 'Habilidade Ativa',
        teacherName: 'Teacher Caroline Renó',
        courseGoal: 'Fale inglês sem medo e destrave sua carreira.',
        courseBenefits: '3 aulas práticas via WhatsApp, Método baseado em psicologia, Sem julgamento ou pressão',
      });
      
      setSuccessData({ message: response.message, name: values.name });
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary font-semibold">Seu Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Como podemos te chamar?" {...field} className="bg-white/50 border-primary/20" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary font-semibold">Seu Melhor E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} className="bg-white/50 border-primary/20" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full cta-button h-12 text-lg font-bold group"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Preparando sua jornada...
              </>
            ) : (
              <>
                Quero participar gratuitamente
                <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </>
            )}
          </Button>
        </form>
      </Form>

      <Dialog open={!!successData} onOpenChange={() => setSuccessData(null)}>
        <DialogContent className="bg-[#f5f1e8] border-primary/30 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl font-headline text-secondary">
              <CheckCircle2 className="text-green-600" />
              Bem-vindo(a), {successData?.name}!
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="p-6 bg-white/40 border border-primary/10 rounded-lg italic text-lg leading-relaxed text-secondary/80">
              {successData?.message}
            </div>
            <p className="text-center font-semibold text-secondary">
              Verifique seu e-mail e WhatsApp para os próximos passos.
            </p>
            <Button onClick={() => setSuccessData(null)} className="w-full bg-primary hover:bg-primary/90">
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
