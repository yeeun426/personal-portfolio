import React from "react";
import Image from "next/image";

const MainHero = () => {
  return (
    <div
      className="flex flex-col items-center h-screen w-full px-4 py-8 break-keep
                    justify-center gap-6
                    lg:justify-center lg:gap-8 lg:px-8 lg:py-12
                    md:justify-center md:gap-4 md:px-4 md:py-8"
    >
      <h2
        className="text-black text-4xl text-center
                     lg:text-3xl
                     md:text-2xl
                     animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        프론트엔드 개발자 <strong className="font-black">이예은</strong>입니다.
      </h2>

      <p
        className="text-xl text-center leading-relaxed
                    lg:text-lg
                    md:text-base md:leading-relaxed
                    animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        사용자 만족을 동력으로 삼아 더 나은 개발을 합니다.
        <br />
        기술이 발전할 수록 사용자의 진짜 니즈를 놓치지 않으려 노력합니다.
      </p>

      <div
        className="relative w-full max-w-2xl h-auto flex-1 max-h-[60vh]
                      lg:max-h-[50vh]
                      md:max-h-[40vh] md:flex-none
                      animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <Image
          src="/images/main/leeyeeun.webp"
          alt="leeyeeun"
          width={800}
          height={800}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default MainHero;
