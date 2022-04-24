import { useMemo } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Accordion } from "../../components/core-ui/accordion";
import SliderBlackArrowIcon from "../../components/core-ui/icons/SliderBlackArrowIcon";
import Loader from "../../components/core-ui/loader";
import { MESSAGE, MOCK_IMAGES } from "../../components/core-ui/utils/constants";
import { Image } from "../../components/image";
import useGetCharacterInfo from "../../hooks/useGetCharacterInfo";
import { CharacterCardResponseType } from "../../types/characterResponseType";

const CharacterInfo: NextPage = () => {
  const router = useRouter();
  const { uid } = router.query;
  const {
    data: charactersInfo,
    isLoading,
    isFetched,
  } = useGetCharacterInfo(uid as string);

  const characterData = useMemo(() => {
    if (charactersInfo && charactersInfo.data) {
      const allCharactersData: CharacterCardResponseType =
        charactersInfo && charactersInfo.data;
      return allCharactersData;
    } else return undefined;
  }, [charactersInfo]);

  return (
    <div className="w-full px-2 mb-6">
      {<Loader isLoading={isLoading} />}
      {!isLoading && (
        <>
          <div
            onClick={() => router.push("/")}
            className="mb-6 flex cursor-pointer"
          >
            <SliderBlackArrowIcon />
            <div className="ml-2 mt-1 bold text-blue-400">
              Back to all Character
            </div>
          </div>
          <div className="md:flex">
            <Image
              src={characterData?.image || MOCK_IMAGES.MOCK_IMAGE_150}
              className="w-full lg:w-44 xl:w-72 h-52 md:h-96 xl:h-64 rounded-xl  transform hover:-translate-y-1 hover:scale-90 duration-500"
              alt="character image"
            />
            <div className="w-full ml-0 md:ml-8 mt-12 md:mt-0 shadow-xl rounded-md min-h-full p-2 bg-gradient-to-r from-gray-900 to-gray-400 cursor-pointer">
              <div className="px-8 py-8 lg:py-0 flex flex-col w-full">
                <span className="text-3xl text-gray-200 hover:text-yellow-400 text-opacity-90">
                  {characterData?.name}
                </span>
                <span className="text-lg font-semibold text-white">
                  {characterData?.status} - {characterData?.species}
                </span>
                <span className=" text-white text-lg justify-center font-semibold">
                  {characterData?.gender}
                </span>
                <span className="text-lg font-semibold text-white">
                  Total Episodes: {characterData?.episode?.length}
                </span>
                <span className="text-lg font-bold text-blue-300">
                  Last Location:
                </span>
                <span className="text-lg font-bold text-white">
                  {characterData?.location?.name}
                </span>
                <span className="text-lg font-bold text-blue-300">Origin</span>
                <span className="text-lg font-bold text-white">
                  {characterData?.origin?.name}
                </span>
              </div>
            </div>
          </div>
          <div>
            <Accordion
              title="Episodes List"
              content={characterData?.episode || []}
            />
          </div>
        </>
      )}
      {!isLoading && isFetched && characterData === undefined && (
        <div className="h-32 flex flex-1 justify-center items-center order-1">
          {MESSAGE.data_not_available.dataTitle("Character information")}
        </div>
      )}
    </div>
  );
};

export default CharacterInfo;
