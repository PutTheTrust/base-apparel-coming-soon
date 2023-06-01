"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const Input = () => {
  const [email, setEmail] = useState("");
  const [isError, setError] = useState(false);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleClick = () => {
    if (!emailPattern.test(email) || email === "") {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <>
      <div
        className={clsx(
          "border border-gray-red flex  pl-6 rounded-3xl justify-between h-[44px] mt-10 relative",
          isError && "border-soft-red"
        )}
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
        />

        {isError && (
          <Image
            className="absolute right-20 flex items-center top-0 bottom-0 my-auto"
            src="/images/icon-error.svg"
            alt="error icon"
            height={20}
            width={20}
          />
        )}
        <button
          onClick={handleClick}
          className="bg-desaturated-red w-12 flex items-center justify-center rounded-3xl"
        >
          <Image
            src="/images/icon-arrow.svg"
            alt="submit"
            width={20}
            height={20}
            className="w-auto"
          />
        </button>
      </div>
      {isError && (
        <p className="text-xs pl-6 text-desaturated-red mt-2">
          Please provide a valid email
        </p>
      )}
    </>
  );
};

export default Input;
