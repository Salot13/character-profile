import { AxiosResponse } from "axios";
import { Axios } from "../axios";
import {
  CHARCTER_GET_API_CALL,
  CHARCTER_INFO_GET_API_CALL,
} from "../../components/core-ui/utils/constants";
import {
  CharacterCardResponseType,
  CharacterResponseType,
} from "../../types/characterResponseType";

export const getAllCharacters = (page: number) =>
  Axios.get<null, AxiosResponse<CharacterResponseType>>(
    CHARCTER_GET_API_CALL.CHARACTER_API(page)
  );

export const getCharacterInfo = (id: string) =>
  Axios.get<null, AxiosResponse<CharacterCardResponseType>>(
    CHARCTER_INFO_GET_API_CALL.CHARACTER_INFO_API(id)
  );
