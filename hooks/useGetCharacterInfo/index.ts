import { useQuery } from "react-query";
import { getCharacterInfo } from "../../data-shared/api";

export default function useGetAllCharacter(id: string) {
  return useQuery(["Character Info", id], async () => {
    return getCharacterInfo(id);
  });
}
