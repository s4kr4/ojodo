'use client';

import { Character } from '@prisma/client';
import { useSelectCaraters } from '../_hooks/useSelectCharaters';

type CharacterSelectButtonProps = {
  character: Character;
};

/**
 * キャラクター選択ボタン
 * @param props.character キャラクター
 * @returns キャラクター選択ボタン
 */
export default function CharacterSelectButton({ character }: CharacterSelectButtonProps) {
  const { handleCharacterSelect } = useSelectCaraters();

  return (
    <button
      onClick={() => handleCharacterSelect(character)}
      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      育成リストに追加
    </button>
  );
}
