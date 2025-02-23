import { type Character } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { api } from '~/trpc/react';

/**
 * キャラクター選択を管理するフック
 * @returns 選択されたキャラクター一覧と選択操作関数
 */
export function useSelectCaraters() {
  const { data: session } = useSession();
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const { data: characters = [], refetch: refetchCharacters } =
    api.character.getSelectedCharacters.useQuery();

  const characterSelectMutation = api.character.selectCharacter.useMutation({
    onSuccess: async () => {
      await refetchCharacters();
      setSelectedCharacters(characters);
    },
  });

  useEffect(() => {
    setSelectedCharacters(characters);
  }, [characters]);

  /**
   * キャラクター選択
   * @param character 選択するキャラクター
   */
  const handleCharacterSelect = (character: Character) => {
    if (!session?.user?.id) return;

    try {
      characterSelectMutation.mutate({
        characterId: character.id,
        priority: selectedCharacters.length + 1,
      });
    } catch (error) {
      console.error('キャラクター選択エラー:', error);
    }
  };

  return { selectedCharacters, handleCharacterSelect };
}
