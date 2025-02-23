import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelectCaraters } from '../../characters/_hooks/useSelectCharaters';

export default function PriorityList() {
  const { selectedCharacters } = useSelectCaraters();
  const handleDragEnd = (result: any) => {
    console.log(result);
  };
  const handleRemoveCharacter = (id: number) => {
    console.log(id);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">育成優先順位</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable
          droppableId="characters"
          type="character"
          isDropDisabled={false}
          isCombineEnabled={false}
          ignoreContainerClipping={false}
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {selectedCharacters.map((userChar, index) => (
                <Draggable
                  key={userChar.id}
                  draggableId={userChar.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-bold">{index + 1}</span>
                        <div>
                          <h3 className="font-bold">{userChar.name_jp}</h3>
                          <p className="text-sm text-gray-600">
                            {'★'.repeat(userChar.rarity)} | {userChar.element}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveCharacter(userChar.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        削除
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
} 