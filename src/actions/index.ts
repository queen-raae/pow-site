import { defineAction } from "astro:actions"
import { z } from "astro:schema";

export const server = {
    newsletter: defineAction({
        accept: 'form',
        input: z.object({
            email: z.string().email(),
            terms: z.boolean(),
        }),
        handler: async ({ email, terms }) => {},
    }),
        getGreeting: defineAction({
        input: z.object({
            name: z.string()
        }),
        handler: async (input) => {
            return `Ahoy, ${input.name}!`
        }
    }),

}