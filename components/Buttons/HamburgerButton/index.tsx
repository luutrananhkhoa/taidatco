"use client";

import CloseIcon from "@/components/Icons/CloseIcon";
import HamburgerIcon from "@/components/Icons/HamburgerIcon";
import React, { FC } from "react";

interface HamburgerButtonProps {}

const HamburgerButton: FC<HamburgerButtonProps> = ({}) => {
    // const { mobileOpen, handleMobileOpen } = useLayoutStore();
  return (
    <div
      className="cursor-pointer"
    //   onClick={() => handleMobileOpen(!mobileOpen)}
    >
      {/* {mobileOpen ? <CloseIcon /> : <HamburgerIcon />} */}
      <HamburgerIcon />
    </div>
  );
};

export default HamburgerButton;