import { useQuery } from "react-query";
import { getCharachterInfo } from "../../data-shared/api";

export default function useGetAllCharacter(id: string) {
  return useQuery(["Character Info", id], async () => {
    return await getCharachterInfo(id);
  });
}
