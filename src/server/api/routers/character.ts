import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const characterRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async ({ ctx }) => {
      const characters = await ctx.db.character.findMany();
      return characters;
    }),

  /**
   * 育成対象のキャラクターを取得
   * @returns 育成対象のキャラクター
   */
  getSelectedCharacters: protectedProcedure
    .query(async ({ ctx }) => {
      const userCharacters = await ctx.db.userCharacter.findMany({
        where: { userId: ctx.session.user.id },
        include: {
          character: true,
        },
      });
      return userCharacters.map(userCharacter => userCharacter.character);
    }),

  /**
   * 育成対象のキャラクターを選択
   * @param characterId キャラクターID
   * @param priority 優先度
   */
  selectCharacter: protectedProcedure
    .input(z.object({
      characterId: z.number(),
      priority: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.db.userCharacter.create({
        data: {
          userId: ctx.session.user.id,
          characterId: input.characterId,
          priority: input.priority,
        },
      });
      return result;
    }),
});
