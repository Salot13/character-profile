import { useQuery } from "react-query";
import { getAllCharacters } from "../../data-shared/api";

export default function useGetAllCharacter(page: number) {
  return useQuery(["allCharacter", page], async () => {
    return getAllCharacters(page);
  });
}
