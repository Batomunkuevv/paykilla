import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const linkClasses =
  "text-[24px] leading-[100%] font-bold uppercase pb-[4px] px-[4px] pt-[1px] border-[1px] border-orange text-t-black transition-all hover:text-orange  [&.active]:pointer-events-none [&.active]:bg-orange [&.active]:text-t-white xl:text-[18px] px-[3px] pb-[3px] pt-0 tb:h-[45px] tb:basis-1/2 tb:text-t-white tb:flex tb:items-center tb:justify-center sm:text-[16px]";

export default function LanguageBar() {
  const [isPageEng, setIsPageEng] = useState(true);

  useEffect(() => {
    setIsPageEng(!location.pathname.includes("/ru"));
  }, []);
  return (
    <div className="flex items-center gap-[8px] tb:gap-[11px]">
      <Link className={clsx(linkClasses, { active: isPageEng })} href={"/"}>
        EN
      </Link>
      <Link className={clsx(linkClasses, { active: !isPageEng })} href={"/ru"}>
        RU
      </Link>
    </div>
  );
}
