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
  registrationSource: z.string().describe('How the lead registered for the course.'),
  courseName: z.string().describe('The name of the mini-course.'),
  teacherName: z.string().describe('The name of the course instructor.'),
  courseGoal: z.string().describe('The main goal of the mini-course.'),
  courseBenefits: z.string().describe('Key benefits of the mini-course, comma-separated.'),
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
  prompt: `You are the elegant and authoritative voice of the "Order of Active Ability" (Habilidade Ativa).
Your task is to craft a deeply engaging, psychological, and slightly mystical follow-up message for a new initiate (lead).

The tone must be:
- Sophisticated and Academic (Oxford/Sonserina vibe).
- Empathetic but Dominant (Authority in Psychology).
- Nurturing of potential, but firm on the discipline required for mastery.
- Avoid all modern "marketing coach" clichés.

Lead Details:
Name: {{{leadName}}}
Source: {{{registrationSource}}}
Course: {{{courseName}}}
Master: {{{teacherName}}}
Alchemy Goal: {{{courseGoal}}}
Rites of Passage: {{{courseBenefits}}}

Requirements:
1. Address them by name with prestige.
2. Acknowledge the courage it takes to break the "Curse of Silence".
3. Use metaphors related to "Unlocking chambers", "Transmuting fear", and "Vocal Authority".
4. Briefly explain that their voice is the most powerful tool in their career arsenal.
5. Remind them that the first ritual (lesson) is approaching and they must be ready.
6. Keep it between 120-180 words.

The message should feel like an invitation to a secret society of elite professionals.
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
