import SearchInput from "@/components/Forms/Search/SearchInput";
import Image from "next/image";
import React, { FC } from "react";
import HeroImg from  "@/public/hero.png"
import PrimaryButton from "@/components/Buttons/PrimaryButton";
interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="w-full flex justify-center text-black min-h-screen">
      <div className=" flex flex-col py-10 md:py-10 items-center sm:gap-4 md:gap-8 w-full max-w-screen-xl mx-5 md:mx-20">
        <div className="flex flex-col items-center w-full text-center gap-6 py-2">
          <div className="w-full flex justify-center flex-col items-center py-2">
            <p className="md:text-6xl md:text-center text-2xl">Phù Điêu Bê Tông <br/>  
            Trang Trí Nghệ Thuật</p>
            <p className="text-slate-700">
              Tinh Hoa Kiến Trúc Hiện Đại
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center py-2">
          <PrimaryButton text="Khám phá ngay"/>
        </div>
        <div className="w-full relative flex justify-center items-center mt-4 py-4">
          <div className="w-full border-black relative overflow-hidden">
            <Image
              className="rounded-lg object-cover w-full"
              src={"/hero.png"}
              width={0}
              height={0}
              sizes="100vw"
              alt="Hero IMG"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;