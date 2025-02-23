'use client';

import CharacterList from './components/CharacterList';

/**
 * キャラクター一覧ページ
 * @returns キャラクター一覧ページ
 */
export default function CharactersPage() {
  return (
    <div className="p-4">
      <CharacterList />
    </div>
  );
}
