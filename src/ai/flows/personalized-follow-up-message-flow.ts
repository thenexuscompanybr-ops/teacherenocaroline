'use server';
/**
 * @fileOverview A Genkit flow for generating personalized follow-up messages for new initiates of Safe & Sound.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedFollowUpMessageInputSchema = z.object({
  leadName: z.string().describe('The name of the new lead.'),
  leadEmail: z.string().email().describe('The email address of the new lead.'),
  registrationSource: z.string().describe('How the lead registered for the course.'),
  courseName: z.string().describe('The name of the course.'),
  teacherName: z.string().describe('The name of the course instructor.'),
  courseGoal: z.string().describe('The main goal of the course.'),
  courseBenefits: z.string().describe('Key benefits of the course, comma-separated.'),
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
  prompt: `You are the elegant and authoritative voice of the "Safe & Sound" Sanctuary.
Your task is to craft a deeply engaging, psychological, and prestigious follow-up message for a new student who has just requested entry to overcome their fear of speaking English.

The tone must be:
- Sophisticated and Academic (Modern Elite vibe).
- Empathetic but Dominant (Authority in Psychology).
- Nurturing of potential, but firm on the discipline required for mastery.
- Avoid all modern "marketing coach" clichés.

Lead Details:
Name: {{{leadName}}}
Course: {{{courseName}}}
Teacher: {{{teacherName}}}
Goal: {{{courseGoal}}}
Benefits: {{{courseBenefits}}}

Core Terminology to include:
- "Pânico Automático": The mental block they face.
- "Bloqueio Emocional": The root cause.
- "Protego Mental": The psychological shield/method.
- "Suporte via Coruja": The digital owl support (WhatsApp).

Requirements:
1. Address them by name with prestige.
2. Acknowledge the courage it takes to face the "Pânico Automático" and reclaim their voice.
3. Use metaphors related to "Santuário", "Alquimia Linguística", and "Vocal Authority".
4. Briefly explain that their voice is the most powerful tool in their professional arsenal.
5. Remind them that the first ritual (lesson) is approaching and they must be ready.
6. Mention that a messenger owl (Suporte via Coruja) will keep them informed via WhatsApp.
7. Keep it between 120-180 words.

The message should feel like a prestigious invitation to an elite society focused on personal and professional growth.
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
