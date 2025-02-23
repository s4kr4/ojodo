'use client';

import { useCharacters } from '../hooks/useCharacters';
import { useSelectCaraters } from '../hooks/useSelectCharaters';

export default function CharacterList() {
  const { characters } = useCharacters();
  const { handleCharacterSelect } = useSelectCaraters();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">キャラクター一覧</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="p-4 border rounded-lg">
            <h3 className="font-bold">{character.name_jp}</h3>
            <div className="text-sm text-gray-600">
              <p>レアリティ: {'★'.repeat(character.rarity)}</p>
              <p>元素: {character.element}</p>
              <p>武器: {character.weapon_type}</p>
            </div>
            <button
              onClick={() => handleCharacterSelect(character)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              育成リストに追加
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 