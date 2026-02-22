'use server';
/**
 * @fileOverview A Genkit flow for generating personalized follow-up messages for new leads.
 *
 * - generatePersonalizedFollowUpMessage - A function that generates a personalized follow-up message.
 * - PersonalizedFollowUpMessageInput - The input type for the generatePersonalizedFollowUpMessage function.
 * - PersonalizedFollowUpMessageOutput - The return type for the generatePersonalizedFollowUpMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedFollowUpMessageInputSchema = z.object({
  leadName: z.string().describe('The name of the new lead.'),
  leadEmail: z.string().email().describe('The email address of the new lead.'),
  registrationSource: z.string().describe('How the lead registered for the course (e.g., "WhatsApp", "Landing Page Form").'),
  courseName: z.string().default('Habilidade Ativa').describe('The name of the mini-course.'),
  teacherName: z.string().default('Teacher Caroline Renó').describe('The name of the course instructor.'),
  courseGoal: z.string().default('Fale inglês sem medo e destrave sua carreira.').describe('The main goal or promise of the mini-course.'),
  courseBenefits: z.string().default('3 aulas práticas via WhatsApp, Método baseado em psicologia, Sem julgamento ou pressão').describe('Key benefits of the mini-course, comma-separated.'),
});
export type PersonalizedFollowUpMessageInput = z.infer<typeof PersonalizedFollowUpMessageInputSchema>;

const PersonalizedFollowUpMessageOutputSchema = z.object({
  message: z.string().describe('The personalized follow-up message for the lead.'),
});
export type PersonalizedFollowUpMessageOutput = z.infer<typeof PersonalizedFollowUpMessageOutputSchema>;

export async function generatePersonalizedFollowUpMessage(input: PersonalizedFollowUpMessageInput): Promise<PersonalizedFollowUpMessageOutput> {
  return personalizedFollowUpMessageFlow(input);
}

const followUpMessagePrompt = ai.definePrompt({
  name: 'followUpMessagePrompt',
  input: { schema: PersonalizedFollowUpMessageInputSchema },
  output: { schema: PersonalizedFollowUpMessageOutputSchema },
  prompt: `You are a helpful and elegant assistant for the course administrator of the "Habilidade Ativa" mini-course.
Your task is to craft a personalized and highly engaging follow-up message for a new lead who has just registered.
The message should nurture their interest and encourage full participation in the course.

The tone should be professional, welcoming, and inspiring, reflecting an atmosphere of modern elegance and subtle magic, similar to an academic wizarding world. Do not infantilize the language.

Here are the details of the lead and the course:
Lead Name: {{{leadName}}}
Lead Email: {{{leadEmail}}}
Registration Source: {{{registrationSource}}}
Course Name: {{{courseName}}}
Teacher Name: {{{teacherName}}}
Course Goal: {{{courseGoal}}}
Course Benefits: {{{courseBenefits}}}

Craft a compelling message that:
1. Greets the lead by name.
2. Acknowledges their registration and the source.
3. Briefly reiterates the main goal of the course.
4. Highlights 1-2 key benefits relevant to overcoming fear and unlocking potential.
5. Emphasizes the unique approach (e.g., psychology-based, supportive environment).
6. Encourages them to look forward to the first lesson and provides clear next steps if applicable (e.g., checking WhatsApp).
7. Concludes with an encouraging and professional closing.

The message should be concise, around 150-250 words. Focus on building excitement and trust.
`,
});

const personalizedFollowUpMessageFlow = ai.defineFlow(
  {
    name: 'personalizedFollowUpMessageFlow',
    inputSchema: PersonalizedFollowUpMessageInputSchema,
    outputSchema: PersonalizedFollowUpMessageOutputSchema,
  },
  async (input) => {
    const { output } = await followUpMessagePrompt(input);
    return output!;
  }
);
