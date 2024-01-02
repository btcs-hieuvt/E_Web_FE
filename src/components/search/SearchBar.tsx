import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearch } from "@/context/searchContext";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  //   setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
function SeacrhBar(props: Props) {
  //   const { setShowSearch } = props;
  const router = useRouter();
  const [showResult, setShowResult] = useState<boolean>(false);
  const {
    setTextSearch,
    textSearch,
    dataResultSeacrh,
    loadingsearch,
    handleSearch,
  } = useSearch();

  useEffect(() => {
    if (textSearch.trim()) {
      setShowResult(true);
    }
  }, [textSearch]);
  const handleEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && textSearch.trim()) {
      handleSearch();
      router.push(`/search/${textSearch}`);
      setTextSearch("");
    }
  };

  // const handleSeemore = () => {
  //   router.push(`/search/${textSearch}`);
  //   setTextSearch("");
  //   setShowResult(false);
  //   // setShowSearch(false);
  // };
  return (
    <div className="relative">
      <div className="relative h-[40px] bg-[#222] flex items-center justify-between rounded">
        <div className="flex items-center w-[500px]">
          <input
            className=" bg-[#222] w-[70%] px-[20px] text-[#fff] outline-none text-base placeholder:text-[#888] tracking-wider"
            type="text"
            value={textSearch}
            placeholder="Search"
            onChange={(e) => setTextSearch(e.target.value)}
            autoFocus
            maxLength={30}
            onKeyPress={(e) => handleEnterSearch(e)}
          />
        </div>
        <div
          className="cursor-pointer mr-2"
          onClick={() => {
            handleSearch();
            router.push(`/search/${textSearch}`);
            setTextSearch("");
          }}
        >
          <IoSearchOutline />
        </div>
      </div>
    </div>
  );
}

export default SeacrhBar;
