import { api } from "~/trpc/react";

export function useCharacters() {
  const { data: characters = [] } = api.character.getAll.useQuery();

  return { characters };
}
