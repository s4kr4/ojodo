'use client';

import { useCharacters } from '../_hooks/useCharacters';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const { characters } = useCharacters();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">キャラクター一覧</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
