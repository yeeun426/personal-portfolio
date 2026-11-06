/** Career / Activity 섹션 제목 */
export default function SectionTitle({ en, ko }: { en: string; ko: string }) {
  return (
    <div className='mb-16 flex items-baseline gap-4 max-[501px]:mb-10'>
      <h2 className='m-0 text-[length:max(calc(1rem+1.5vw),32px)] font-extrabold text-[#1d1d1f]'>
        {en}
      </h2>
      <span className='text-[18px] text-[#86868b]'>{ko}</span>
    </div>
  );
}
