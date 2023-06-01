import Image from "next/image";

const Input = () => {
  return (
    <>
      <div className="border border-gray-red flex  pl-6 rounded-3xl justify-between h-[44px] mt-10">
        <input type="email" placeholder="Email Address" />
        <button className="bg-desaturated-red w-12 flex items-center justify-center rounded-3xl">
          <Image
            src="/images/icon-arrow.svg"
            alt="submit"
            width={20}
            height={20}
            className="w-auto"
          />
        </button>
      </div>
    </>
  );
};

export default Input;
