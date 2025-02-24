import { Character } from '@prisma/client';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useSelectCaraters } from '~/app/characters/_hooks/useSelectCharaters';

type SortableCharacterItemProps = {
  character: Character;
  index: number;
};

/**
 * 育成優先順位リストのアイテム
 * @param character キャラクター
 * @param index インデックス
 * @returns 育成優先順位リストのアイテム
 */
export default function SortableCharacterItem({ character, index }: SortableCharacterItemProps) {
  const { handleCharacterRemove } = useSelectCaraters();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: character.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
    >
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold">{index + 1}</span>
        <div>
          <h3 className="font-bold">{character.name_jp}</h3>
          <p className="text-sm text-gray-600">
            {'★'.repeat(character.rarity)} | {character.element}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleCharacterRemove(character)}
        className="text-red-500 hover:text-red-700"
      >
        削除
      </button>
    </div>
  );
}
