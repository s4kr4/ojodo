'use client';

import { Character } from '@prisma/client';
import { useSelectCaraters } from '../_hooks/useSelectCharaters';
import { useIsLoggedIn } from '~/app/_hooks/useIsLoggedIn';

type CharacterCardProps = {
  character: Character;
};

/**
 * キャラクターカード
 * @param props.character キャラクター
 * @returns キャラクターカード
 */
export default function CharacterCard({ character }: CharacterCardProps) {
  const { handleCharacterSelect } = useSelectCaraters();
  const isLoggedIn = useIsLoggedIn();

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-bold">{character.name_jp}</h3>
      <div className="text-sm text-gray-600">
        <p>レアリティ: {'★'.repeat(character.rarity)}</p>
        <p>元素: {character.element}</p>
        <p>武器: {character.weapon_type}</p>
      </div>
      {isLoggedIn && (
        <button
          onClick={() => handleCharacterSelect(character)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          育成リストに追加
        </button>
      )}
    </div>
  );
}
