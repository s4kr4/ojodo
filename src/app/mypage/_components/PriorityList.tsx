'use client';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSelectCaraters } from '../../characters/_hooks/useSelectCharaters';
import SortableCharacterItem from './SortableCharacterItem';

/**
 * 育成優先順位リスト
 * @returns 育成優先順位リスト
 */
export default function PriorityList() {
  const { selectedCharacters } = useSelectCaraters();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    console.log(event);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">育成優先順位</h2>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={selectedCharacters.map((char) => char.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-2">
            {selectedCharacters.map((character, index) => (
              <SortableCharacterItem key={character.id} character={character} index={index} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
