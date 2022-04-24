import { AxiosResponse } from "axios";
import { Axios } from "../axios";
import {
  CHARCTER_GET_API_CALL,
  CHARCTER_INFO_GET_API_CALL,
} from "../../Component/core-ui/utils/constants";
import { CharacterResponseType } from "../../types/characterResponseType";

export const getAllCharachter = (page: number) =>
  Axios.get<null, AxiosResponse<CharacterResponseType>>(
    CHARCTER_GET_API_CALL.CHARACTER_API(page)
  );

export const getCharachterInfo = (id: string) =>
  Axios.get<null, AxiosResponse<CharacterResponseType>>(
    CHARCTER_INFO_GET_API_CALL.CHARACTER_INFO_API(id)
  );
