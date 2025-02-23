import { api } from "~/trpc/react";

/**
 * キャラクター一覧を取得する
 * @returns キャラクター一覧
 */
export function useCharacters() {
  const { data: characters = [] } = api.character.getAll.useQuery();

  return { characters };
}
