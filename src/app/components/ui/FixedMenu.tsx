"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { headerMenu } from "@data";
import { MenuItem } from "./MenuItem";
import Link from "next/link";
import LanguageBar from "./LanguageBar";

export const FixedMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isEndPage, setIsEndPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".site-footer");

      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY > 300) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }

      if (scrollY + windowHeight > footerTop) {
        setIsEndPage(true);
      } else {
        setIsEndPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed left-1/2 z-[100] -translate-x-1/2 border-[2px] border-gray w-full max-w-[1365px] flex  bg-white xl:max-w-[1044px] tb:hidden translate-y-[100%] bottom-0 transition-all duration-500 ",
        { "[&]:translate-y-[0%] bottom-[30px]": showMenu },
        { "opacity-0 pointer-events-none": isEndPage }
      )}
    >
      <ul
        className={clsx(
          "py-[13px] pl-[21px] pr-[16px]  flex gap-[20.7px] xl:px-[22px] xl:pr-[15px]"
        )}
      >
        {headerMenu.map((item, i) => (
          <MenuItem
            className={clsx(
              "!m-0 [&_a]:pb-0 [&_a]:border-0 uppercase last:after:hidden relative",
              "after:content-'' after:absolute after:top-[2px] after:bottom-[2px] after:left-[calc(100%+11px)] after:w-[2px] after:bg-orange"
            )}
            key={i}
            isActive={false}
            href={item.href}
            label={item.label}
          />
        ))}
      </ul>
      <LanguageBar></LanguageBar>
    </div>
  );
};
