import { Links } from "../core-ui/link";

export const Header = () => {
  return (
    <div className="items-center py-2 bg-secondary w-full h-16 flex justify-center">
      <Links link="/" className="text-white text-xl italic font-bold">
        Characters Profiles
      </Links>
    </div>
  );
};
