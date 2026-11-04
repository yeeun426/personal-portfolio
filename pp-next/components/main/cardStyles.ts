/**
 * Education / Career 섹션 공통 카드 스타일 (기존 React 버전 Education 카드)
 * 화면 중앙에 온 카드만 선명하게 확대되고, 나머지는 흐리게 보임
 */

/** 섹션 배경 */
export const cardSection = 'relative bg-[#f5f5f7]';

/** 카드 목록 래퍼 (세로 정렬). 패딩/최소 높이는 섹션마다 달라서 따로 지정 */
export const cardWrapper =
  'box-border mx-auto flex w-full max-w-[1100px] flex-col items-start gap-[50px] px-6 break-keep max-[801px]:static max-[801px]:transform-none max-[801px]:gap-[100px]';

/** 카드 한 장 */
export const card = (active: boolean) =>
  [
    'relative flex h-[clamp(250px,50vw,375px)] w-full place-content-center items-center rounded-[20px] transition-transform duration-300 ease-[ease]',
    'max-[801px]:m-auto max-[801px]:h-auto max-[801px]:w-[70%] max-[801px]:flex-col max-[501px]:w-[90%]',
    active ? 'scale-110 bg-white filter-none' : 'bg-[rgb(108_108_108/21%)] blur-[3px]',
  ].join(' ');

/** 카드 오른쪽 위 태그 (#Education 등) */
export const cardTag =
  'absolute top-[3%] right-[2%] rounded-[20px] bg-[#c8acfa] px-[15px] py-[5px] text-[15px] text-white';

/** 카드 좌/우 칸. p-12 는 기존 bootstrap .p-5 (3rem) */
export const cardItem = 'h-full w-1/2 p-12 text-left max-[801px]:w-full';

/** 회색 배경 칸 */
export const cardGray = 'bg-[#3737371a]';

/** 칸 위치별 모서리 (데스크톱: 좌우 칸 / 모바일: 위아래 칸) */
export const cardGrayRight =
  'rounded-[0px_20px_20px_0px] max-[801px]:rounded-[0px_0px_20px_20px]';
export const cardGrayLeft =
  'rounded-[20px_0px_0px_20px] max-[801px]:rounded-[20px_20px_0px_0px]';

/** 카드 안 텍스트 */
export const cardName =
  'font-bold leading-[140%] text-[length:max(calc(1rem+1vw),30px)]';
export const cardSub = 'mb-[25px] text-[20px]';
export const cardList = 'm-0 flex flex-col gap-[10px] pl-4';
export const cardListItem = 'list-disc text-[18px]';
