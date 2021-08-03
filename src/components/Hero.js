import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between items-center bg-bg-green py-10">
      <div className="text-text-white pl-16">
        <h1 className="text-[42px] font-bold">メインタイトル</h1>
        <p className="text-[28px] pt-1">サブタイトル</p>
      </div>
      <div className="pr-10">
        <Image src="/img/hero.png" alt="ロゴ" width={585} height={498} />
      </div>
    </div>
  );
};
export default Hero
