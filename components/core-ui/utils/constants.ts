export const CHARCTER_GET_API_CALL = {
  CHARACTER_API: (page: number) => `character?page=${page}`,
};

export const CHARCTER_INFO_GET_API_CALL = {
  CHARACTER_INFO_API: (id: string) => `character/${id}`,
};

export const MESSAGE = {
  data_not_available: {
    dataTitle: (messageTitle: string) => `${messageTitle} data not available `,
  },
};

export enum MOCK_IMAGES {
  MOCK_IMAGE_150 = "https://via.placeholder.com/150",
}
