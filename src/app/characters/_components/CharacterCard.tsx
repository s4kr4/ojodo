'use client';

import { Character } from '@prisma/client';
import { useIsLoggedIn } from '~/app/_hooks/useIsLoggedIn';
import CharacterSelectButton from './CharacterSelectButton';

type CharacterCardProps = {
  character: Character;
};

/**
 * キャラクターカード
 * @param props.character キャラクター
 * @returns キャラクターカード
 */
export default function CharacterCard({ character }: CharacterCardProps) {
  const isLoggedIn = useIsLoggedIn();

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-bold">{character.name_jp}</h3>
      <div className="text-sm text-gray-600">
        <p>レアリティ: {'★'.repeat(character.rarity)}</p>
        <p>元素: {character.element}</p>
        <p>武器: {character.weapon_type}</p>
      </div>
      {isLoggedIn && <CharacterSelectButton character={character} />}
    </div>
  );
}
