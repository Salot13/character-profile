import { useQuery } from "react-query";
import { getAllCharachter } from "../../data-shared/api";

export default function useGetAllCharacter(page: number) {
  return useQuery(["allCharacter", page], async () => {
    return await getAllCharachter(page);
  });
}
