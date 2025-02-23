import { Character, PrismaClient, UserCharacter } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function useSelectCaraters() {
  const { data: session } = useSession();
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const prisma = new PrismaClient();
  
  useEffect(() => {
    if (session?.user?.id) {
      prisma.userCharacter.findMany({
        where: {
          userId: session.user.id,
        },
        include: {
          character: true,
        },
      }).then(data => {
        const sortedData = data.sort((a: UserCharacter, b: UserCharacter) => a.priority - b.priority);
        setSelectedCharacters(sortedData.map(userChar => userChar.character));
      });
    }
  }, [session]);

  const handleCharacterSelect = async (character: Character) => {
    if (!session?.user?.id) return;

    try {
      await prisma.userCharacter.create({
        data: {
          userId: session.user.id,
          characterId: character.id,
          priority: selectedCharacters.length + 1,
        },
      });
      setSelectedCharacters([...selectedCharacters, character]);
    } catch (error) {
      console.error('キャラクター選択エラー:', error);
    }
  };

  return { selectedCharacters, handleCharacterSelect };
}
