import Image from "next/image";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import Input from "./components/Input";

export default function Home() {
  return (
    <main>
      <div className="h-[84px] flex items-center md:hidden px-8">
        <Header />
      </div>
      <div className="md:flex flex-row-reverse">
        <div className=" md:block md:w-2/5">
          <HeroImage />
        </div>

        <div className="md:ml-[167px] md:flex-1">
          <div className="mt-16 mx-8">
            <div className="hidden md:block mb-[138px]">
              <Header />
            </div>
            <h1 className="text-5xl uppercase font-semibold text-center md:text-start md:text-8xl">
              <span className="font-light text-desaturated-red">We're</span>
              <br /> coming
              <br /> soon
            </h1>

            <p className="text-center text-sm mt-8 text-desaturated-red md:max-w-[425px] md:text-start">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>

            <div className="md:max-w-[425px] ">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
