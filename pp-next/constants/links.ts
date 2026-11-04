export const LINKS = {
  github: 'https://github.com/yeeun426',
  blog: 'https://yeeun426.github.io/',
  instagram: 'https://www.instagram.com/thsudkcla7/',
  feedbackForm: 'https://forms.gle/iPCqwKgThEsvLpRc9',
  resume: '/files/yeeun.pdf',
} as const;

/** 새 탭으로 여는 외부 링크 공통 속성 */
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
