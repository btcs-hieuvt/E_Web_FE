import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import ResultSearch from "./ResultSearch";
import { useSearch } from "@/context/searchContext";
import { useRouter } from "next/navigation";

interface Props {
  //   setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
function SeacrhBar(props: Props) {
  //   const { setShowSearch } = props;
  const router = useRouter();
  const [showResult, setShowResult] = useState<boolean>(false);
  const { setTextSearch, textSearch, dataResultSeacrh, loadingsearch } =
    useSearch();

  useEffect(() => {
    if (textSearch.trim()) {
      setShowResult(true);
    }
  }, [textSearch]);
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && textSearch.trim()) {
      router.push(`/search/${textSearch}`);
      setTextSearch("");
    }
  };

  const handleSeemore = () => {
    router.push(`/search/${textSearch}`);
    setTextSearch("");
    setShowResult(false);
    // setShowSearch(false);
  };
  return (
    <div className="relative">
      <div className=" relative h-[58px] bg-[#222] flex items-center justify-between px-6">
        <div className="flex items-center w-[500px]">
          <BsSearch />
          <input
            className=" bg-[#222] w-[70%] px-[20px] text-[#fff] outline-none text-base placeholder:text-[#888] tracking-wider"
            type="text"
            value={textSearch}
            placeholder="Search razer.com"
            onChange={(e) => setTextSearch(e.target.value)}
            autoFocus
            maxLength={30}
            onKeyPress={(e) => handleSearch(e)}
          />
        </div>
        <AiOutlineClose
          className="cursor-pointer hover:text-[#fff]"
          //   onClick={() => setShowSearch(false)}
        />
        {showResult ? (
          <div
            className="absolute top-[60px] left-0 w-full bg-[#222] rounded-sm z-20"
            onBlur={() => setShowResult(false)}
          >
            <ResultSearch
              resultSearch={dataResultSeacrh}
              isLoadingSearch={loadingsearch}
              handleSeemore={handleSeemore}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SeacrhBar;
