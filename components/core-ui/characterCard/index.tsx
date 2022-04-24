import { useRouter } from "next/router";
import { CharacterCardResponseType } from "../../../types/characterResponseType";
import { Image } from "../../image";
import { MOCK_IMAGES } from "../utils/constants";

function CharacterCard({
  id,
  image,
  gender,
  species,
  name,
  status,
  location,
  episode,
}: CharacterCardResponseType) {
  const router = useRouter();
  return (
    <div className="w-full lg:w-1/2 px-2 mb-6 transform hover:-translate-y-1 hover:scale-90 duration-500">
      <div
        className="w-full shadow-xl rounded-md min-h-full p-2 mt-3 bg-gradient-to-r from-gray-900 to-gray-400 cursor-pointer"
        onClick={() => router.push(`/character/${id}`)}
      >
        <div className="md:flex md:justify-between xl:justify-start">
          <div className="transform hover:-translate-y-1 hover:scale-90 duration-500">
            <Image
              src={image || MOCK_IMAGES.MOCK_IMAGE_150}
              className="w-full lg:w-44 xl:w-11/12 h-52 xl:h-9/12 rounded-xl"
              alt="character image"
            />
          </div>
          <div className="px-8 py-8 lg:py-0 flex flex-col md:w-3/5 w-full">
            <span className="text-3xl text-gray-200 hover:text-yellow-400 text-opacity-90">
              {name}
            </span>
            <span className="text-lg font-semibold text-white">
              {status} - {species}
            </span>
            <span className=" text-white text-lg justify-center font-semibold">
              {gender}
            </span>
            <span className="text-lg font-semibold text-white">
              Total Episodes: {episode?.length}
            </span>
            <span className="text-lg font-bold text-blue-300">
              Last Location:
            </span>
            <span className="text-lg font-bold text-white">
              {location?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
