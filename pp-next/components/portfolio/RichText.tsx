import { Fragment, type ReactNode } from 'react';

/**
 * project.json 의 설명/Q&A 텍스트를 간단한 마크다운처럼 표시
 * - ```lang ... ``` → 코드 블록
 * - `code` → 인라인 코드, **굵게** → 굵게
 * - "[제목]", "✅ 제목", "문제/해결/결과" 처럼 한 줄짜리 소제목 → 굵게
 * - "- " 로 시작하는 줄 → 목록
 */
export default function RichText({ text, className = '' }: { text: string; className?: string }) {
  // ``` 기준으로 나누면 홀수 번째 조각이 코드
  const parts = text.split('```');

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {parts.map((part, i) =>
        i % 2 === 1 ? <CodeBlock key={i} raw={part} /> : <TextBlock key={i} text={part} />
      )}
    </div>
  );
}

function CodeBlock({ raw }: { raw: string }) {
  const newline = raw.indexOf('\n');
  const lang = newline === -1 ? '' : raw.slice(0, newline).trim();
  const code = (newline === -1 ? raw : raw.slice(newline + 1)).replace(/\s+$/, '');

  return (
    <div className='relative my-2 overflow-hidden rounded-[12px] bg-[#1d1d1f]'>
      {lang && (
        <span className='absolute top-2 right-3 text-[11px] font-semibold tracking-[0.06em] text-[#86868b] uppercase'>
          {lang}
        </span>
      )}
      <pre
        className={`m-0 overflow-x-auto px-5 pb-4 text-[13.5px] leading-[1.7] text-[#e5e5ea] ${lang ? 'pt-8' : 'pt-4'}`}
      >
        <code className={mono}>{code}</code>
      </pre>
    </div>
  );
}

/** 코드 글꼴 (전역 글꼴 규칙보다 우선하도록 code 요소에 직접 지정) */
const mono = '[font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace]';

const LABELED = /^- (문제|해결|결과):\s*(.*)$/;
const LABEL_TONE: Record<string, string> = {
  문제: 'bg-[#f5f5f7] text-[#6e6e73]',
  해결: 'bg-[#f3edfe] text-[#7c5cc4]',
  결과: 'bg-[#1d1d1f] text-white',
};

const HEADING = /^(\[.+\]|✅.+|\[?(문제|해결|결과)\]?:?)$/;

function TextBlock({ text }: { text: string }) {
  const lines = text
    .split('\n')
    .map((l) => l.trim())
    // 연속 빈 줄은 하나로
    .filter((l, i, arr) => l !== '' || (i > 0 && arr[i - 1] !== ''));

  return (
    <>
      {lines.map((line, i) => {
        if (line === '') return <div key={i} className='h-2' aria-hidden />;
        if (HEADING.test(line))
          return (
            <p key={i} className='m-0 mt-2 font-semibold text-[#1d1d1f] first:mt-0'>
              {/* "[제목]" 은 화면에서 대괄호 없이 표시 */}
              {inline(line.replace(/^\[(.+)\]$/, '$1'))}
            </p>
          );
        // "- 문제: ..." 처럼 라벨이 붙은 줄 → 라벨을 작은 배지로
        const labeled = line.match(LABELED);
        if (labeled)
          return (
            <p key={i} className='m-0 flex gap-3'>
              <span
                className={`mt-[3px] h-fit shrink-0 rounded-[6px] px-[7px] py-[1px] text-[12px] font-bold ${LABEL_TONE[labeled[1]]}`}
              >
                {labeled[1]}
              </span>
              <span>{inline(labeled[2])}</span>
            </p>
          );
        if (line.startsWith('- '))
          return (
            <p key={i} className='m-0 flex gap-2'>
              <span className='shrink-0 text-[#c8acfa]'>•</span>
              <span>{inline(line.slice(2))}</span>
            </p>
          );
        return (
          <p key={i} className='m-0'>
            {inline(line)}
          </p>
        );
      })}
    </>
  );
}

/** `code` 와 **굵게** 처리 */
function inline(line: string): ReactNode {
  return line.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((token, i) => {
    if (token.startsWith('`') && token.endsWith('`') && token.length > 2)
      return (
        <code
          key={i}
          className={`rounded-[6px] bg-[#f3edfe] px-[6px] py-[1px] text-[0.88em] text-[#7c5cc4] ${mono}`}
        >
          {token.slice(1, -1)}
        </code>
      );
    if (token.startsWith('**') && token.endsWith('**') && token.length > 4)
      return (
        <strong key={i} className='font-semibold text-[#1d1d1f]'>
          {token.slice(2, -2)}
        </strong>
      );
    return <Fragment key={i}>{token}</Fragment>;
  });
}
