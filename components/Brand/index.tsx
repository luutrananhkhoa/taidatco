import React, { FC } from "react";

interface BrandProps {}

const Brand: FC<BrandProps> = ({}) => {
  return (
    <div className="flex gap-3 items-center w-40">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="54" height="54" fill="url(#pattern0_2_21)"/>
                <defs>
                <pattern id="pattern0_2_21" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use transform="scale(0.00462963)"/>
                </pattern>
                <image id="image0_2_21" width="216" height="216"/>
                </defs>
            </svg>
        </svg>
      <h1 className="text-black text-2xl font-bold">Taidatco</h1>
    </div>
  );
};

export default Brand;