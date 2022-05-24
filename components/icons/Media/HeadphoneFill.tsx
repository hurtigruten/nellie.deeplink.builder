import { SVGAttributes } from 'react';

const SvgHeadphoneFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 12h3a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 01-2 2h-3a2 2 0 01-2-2v-5a2 2 0 012-2h3a8 8 0 10-16 0z" />
  </svg>
);

export default SvgHeadphoneFill;
