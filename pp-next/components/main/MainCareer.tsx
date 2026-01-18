import { careers } from "@/constants/career";
import React, { useState } from "react";

const MainCareer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section place-items-center flex flex-col">
      <div className="md:w-3xl">
        <div className="text-center mb-16">
          <h1 className="section-eyebrow">경력 사항</h1>
          <h2 className="section-title">
            다양한 업무와 프로젝트를 통해
            <br />
            경험과 노하우를 쌓고 있습니다.
          </h2>
        </div>

        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">
              업무 경험
            </span>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="flex flex-col gap-8">
          {careers.map((exp, index) => (
            <div key={index} className="flex gap-6">
              {/* Left: Period with icon */}
              <div className="shrink-0 w-42">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{exp.periodIcon}</span>
                  <span className="text-base text-gray-400 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col gap-1 pb-8">
                {/* Company Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {exp.company}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-3">{exp.description}</p>

                {/* Tech Stack Icons */}
                <div className="flex gap-2 mb-3">
                  {exp.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center"
                      title={tech}
                    >
                      <span className="text-xs font-medium text-gray-700">
                        {tech === "React"
                          ? "⚛️"
                          : tech === "Next.js"
                            ? "▲"
                            : "TS"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleOpen(index)}
                  className="flex items-center gap-1 text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  <span
                    className={`transform transition-transform ${openIndex === index ? "rotate-90" : ""}`}
                  >
                    ›
                  </span>
                  주요 업무 내용 보기
                </button>

                {/* Collapsible Tasks */}
                {openIndex === index && (
                  <div className="mt-4 space-y-2 animate-fadeIn">
                    {exp.tasks.map((task, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5 text-sm">✓</span>
                        <span className="text-sm text-gray-700">{task}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCareer;
