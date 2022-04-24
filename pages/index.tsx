import { useMemo, useState } from "react";
import type { NextPage } from "next";
import CharacterCard from "../Component/core-ui/characterCard";
import Loader from "../Component/core-ui/loader";
import { MESSAGE } from "../Component/core-ui/utils/constants";
import { Pagination } from "../Component/pagination";
import useGetAllCharacter from "../hooks/useGetAllCharacter";
import {
  CharacterResponseType,
  paginationType,
} from "../types/characterResponseType";

const Home: NextPage = () => {
  const [pagination, setPagination] = useState<number>(1);
  const [paginationInfo, setPaginationInfo] = useState<paginationType>({
    count: 0,
    pages: 0,
  });
  const [currentPaginationData, setCurrentPaginationData] = useState({
    toCharacterData: 1,
    fromCharacterData: 20,
  });
  const {
    data: allCharachter,
    isLoading,
    isFetched,
  } = useGetAllCharacter(pagination);

  const characterData = useMemo(() => {
    if (allCharachter && allCharachter.data) {
      const {
        results: allCharachterData,
        info: paginationInfo,
      }: CharacterResponseType = allCharachter && allCharachter.data;
      setPaginationInfo(paginationInfo);
      return allCharachterData;
    } else return [];
  }, [allCharachter]);

  const onPaginationNextButtonClick = () => {
    setPagination(pagination + 1);
    setCurrentPaginationData({
      toCharacterData: currentPaginationData?.fromCharacterData + 1,
      fromCharacterData: currentPaginationData?.fromCharacterData + 20,
    });
  };

  const onPaginationPrevButtonClick = () => {
    setPagination(pagination - 1);
    setCurrentPaginationData({
      toCharacterData: currentPaginationData?.toCharacterData - 20,
      fromCharacterData: currentPaginationData?.fromCharacterData - 20,
    });
  };

  return (
    <div className="my-8">
      <div className="flex flex-wrap justify-items-center w-full justify-end">
        {<Loader isLoading={isLoading} />}
        {!isLoading &&
          characterData?.length > 0 &&
          characterData?.map(
            (
              { id, image, name, species, gender, status, location, episode },
              index: number
            ) => (
              <CharacterCard
                id={id}
                key={index}
                image={image}
                name={name}
                species={species}
                gender={gender}
                status={status}
                location={location}
                episode={episode}
              />
            )
          )}
        {!isLoading && (
          <div className="justify-end">
            <Pagination
              totalPages={paginationInfo?.count}
              activePage={pagination}
              nextButtonClick={onPaginationNextButtonClick}
              prevButtonClick={onPaginationPrevButtonClick}
              currentPaginationData={currentPaginationData}
            />
          </div>
        )}
        {!isLoading && isFetched && characterData?.length === 0 && (
          <div className="h-32 flex flex-1 justify-center items-center order-1">
            {MESSAGE.data_not_available.dataTitle("Character")}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
