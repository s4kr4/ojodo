import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const characterRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async ({ ctx }) => {
      const characters = await ctx.db.character.findMany();
      return characters;
    }),
});
