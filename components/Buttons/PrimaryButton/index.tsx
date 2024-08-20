"use client";
import Spinner from "@/components/Spinner";
import React, { FC } from "react";
import { useFormStatus } from "react-dom";

interface PrimaryButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  className,
  type,
  onClick,
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-primaryColor flex justify-center items-center px-4 py-4 md:py-4 md:px-6 text-lg md:text-md text-white ${className} `}
    >
      {pending ? <Spinner></Spinner> : text}
    </button>
  );
};

export default PrimaryButton;