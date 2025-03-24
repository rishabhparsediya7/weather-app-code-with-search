import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function SearchBar({
  searchCity,
  setCity,
  city,
  loading,
}: {
  searchCity: any;
  setCity: Dispatch<SetStateAction<string>>;
  city: string;
  loading: boolean;
}) {
  return (
    <div className="flex justify-end items-center relative">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchCity();
          }
        }}
        className="px-2 w-2/3 py-3 outline-none rounded-lg  bg-[#1a1b1d] placeholder:text-zinc-600 text-sm text-zinc-300 placeholder:text-sm"
        placeholder="Search location"
      />
      <Search
        size={20}
        onClick={searchCity}
        className="absolute right-3 hover:cursor-pointer"
      />
    </div>
  );
}
