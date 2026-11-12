"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Image from "next/image";
import { BsEnvelope, BsGithub, BsPencilSquare } from "react-icons/bs";
import { LINKS, externalLinkProps } from "@/constants/links";

/** 사이드바에서 이동할 메인 페이지 섹션 (app/page.tsx 의 section id 와 일치) */
export const MAIN_SECTIONS = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "activity", label: "Activity" },
  { id: "education", label: "Education" },
  { id: "project", label: "Project" },
] as const;

const EMAIL = "thsudkcla7@naver.com";

export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const SOCIALS = [
  { label: "Github", href: LINKS.github, icon: BsGithub, external: true },
  { label: "Blog", href: LINKS.blog, icon: BsPencilSquare, external: true },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: BsEnvelope,
    external: false,
  },
];

interface SidebarProps {
  isOn: boolean;
  setIsOn: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isOn, setIsOn }: SidebarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 첫 화면을 지나면 섹션 탭을 왼쪽에 고정 (데스크톱)
      const triggerPosition = window.innerHeight - 100;
      if (window.scrollY > triggerPosition && window.innerWidth > 1024) {
        setScrolled(true);
        setIsOn(false);
      } else {
        setScrolled(false);
      }

      // 화면 위쪽 절반에 들어온 섹션을 활성 탭으로 표시
      MAIN_SECTIONS.forEach(({ id }) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (
          rect &&
          rect.top >= 0 &&
          rect.top < window.innerHeight / 2 &&
          window.innerWidth > 1100
        ) {
          setActiveId(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsOn]);

  // 모바일 서랍이 열려 있는 동안: 배경 스크롤 잠금 + ESC 로 닫기
  useEffect(() => {
    if (!isOn) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOn(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOn, setIsOn]);

  const onTabClick = (id: string) => {
    setIsOn(false);
    scrollToSection(id);
  };

  // 데스크톱: 첫 화면 왼쪽 패널 / 태블릿·모바일: 오른쪽 위 메뉴 버튼(isOn)을 누르면 오른쪽에서 들어오는 흰 서랍
  const asideClass = [
    "main-aside z-[100] box-border flex h-screen w-[20vw] max-w-[340px] min-w-[240px] flex-col justify-between px-10 py-12 text-left",
    "border-r border-white/70 bg-white/55 backdrop-blur-xl",
    "max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:right-0 max-[1024px]:h-[100dvh] max-[1024px]:w-[300px] max-[1024px]:max-w-[86vw] max-[1024px]:min-w-0 max-[1024px]:border-r-0 max-[1024px]:bg-white max-[1024px]:backdrop-blur-none max-[1024px]:px-7 max-[1024px]:pt-6 max-[1024px]:pb-8 max-[1024px]:shadow-[-16px_0_40px_rgba(0,0,0,0.12)] max-[1024px]:transition-[translate,visibility] max-[1024px]:duration-300 max-[1024px]:ease-[cubic-bezier(0.2,0.8,0.2,1)]",
    isOn ? "on max-[1024px]:translate-x-0" : "max-[1024px]:invisible max-[1024px]:translate-x-full",
  ].join(" ");

  return (
    <>
      {/* 모바일 서랍 뒤 어두운 막 — 누르면 닫힘 */}
      {isOn && (
        <div
          className="animate-fade-in fixed inset-0 z-[99] bg-black/35 min-[1025px]:hidden"
          onClick={() => setIsOn(false)}
          aria-hidden
        />
      )}
      <aside className={asideClass}>
        <div className="flex flex-col gap-12 max-[1024px]:gap-8">
          <button
            className="w-fit"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="맨 위로"
          >
            <Image
              src="/images/main/logo.webp"
              alt="LYE"
              width={597}
              height={501}
              className="h-auto w-[72px] max-[1024px]:w-[52px]"
            />
          </button>

          <nav aria-label="섹션 이동">
            <ul className="m-0 flex list-none flex-col gap-2 p-0 max-[1024px]:gap-0 max-[1024px]:border-t max-[1024px]:border-[#f0f0f3]">
              {MAIN_SECTIONS.map(({ id, label }, i) => (
                <li key={id}>
                  <button
                    onClick={() => onTabClick(id)}
                    className="group flex items-baseline gap-4 py-2 text-[24px] font-semibold text-[#1d1d1f] transition-transform duration-300 hover:translate-x-2 max-[1024px]:w-full max-[1024px]:border-b max-[1024px]:border-[#f0f0f3] max-[1024px]:py-[18px] max-[1024px]:text-[20px] max-[1024px]:hover:translate-x-0 max-[1024px]:active:bg-[#faf8ff]"
                  >
                    <span className="w-6 text-[13px] font-bold text-[#9778c9] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="transition-colors duration-300 group-hover:text-[#7c5cc4]">
                      {label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <ul className="m-0 flex list-none gap-2 p-0">
            {SOCIALS.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external ? externalLinkProps : {})}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1d1d1f] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-colors duration-200 hover:bg-[#1d1d1f] hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
          <div>
            <div className="text-[14px] text-[#424245]">{EMAIL}</div>
            <div className="mt-1 text-[12px] text-[#86868b]">
              Last update 2026.11
            </div>
          </div>
        </div>
      </aside>

      {/* 스크롤 후(데스크톱): 화면 왼쪽 가운데에 고정되는 섹션 인디케이터.
        aside 의 backdrop-filter 가 fixed 기준을 바꾸므로 aside 밖에 둠 */}
      {scrolled && (
        <nav aria-label="섹션 이동">
          <ul className="fixed top-1/2 left-8 z-10 m-0 flex -translate-y-1/2 list-none flex-col gap-1 rounded-[20px] bg-white/95 p-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            {MAIN_SECTIONS.map(({ id, label }) => {
              const active = activeId === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => onTabClick(id)}
                    aria-current={active ? "true" : undefined}
                    className={`group flex w-full items-center gap-3 rounded-[12px] px-3 py-2 text-[15px] font-semibold transition-colors duration-200 ${
                      active
                        ? "active bg-[#f3edfe] text-[#7c5cc4]"
                        : "text-[#86868b] hover:text-[#1d1d1f]"
                    }`}
                  >
                    <span
                      className={`h-[3px] rounded-full transition-all duration-300 ${
                        active
                          ? "w-6 bg-[#9778c9]"
                          : "w-3 bg-[#d2d2d7] group-hover:w-5 group-hover:bg-[#86868b]"
                      }`}
                    />
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
