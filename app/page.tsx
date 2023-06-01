import Image from "next/image";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import Input from "./components/Input";

export default function Home() {
  return (
    <main className="">
      <div className="h-[84px] flex items-center md:hidden px-8">
        <Header />
      </div>
      <div>
        <div>
          <HeroImage />
        </div>

        <div className="mt-16 mx-8">
          <h1 className="text-5xl uppercase font-semibold text-center">
            <span className="font-light text-desaturated-red">We're</span>
            <br /> coming
            <br /> soon
          </h1>

          <p className="text-center text-sm mt-8 text-desaturated-red">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <Input />
        </div>
      </div>
    </main>
  );
}
