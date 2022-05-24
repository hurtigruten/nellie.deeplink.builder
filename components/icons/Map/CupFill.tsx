import { SVGAttributes } from 'react';

const SvgCupFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 3h15a2 2 0 012 2v3a2 2 0 01-2 2h-2v3a4 4 0 01-4 4H8a4 4 0 01-4-4V4a1 1 0 011-1zm13 2v3h2V5h-2zM2 19h18v2H2v-2z" />
  </svg>
);

export default SvgCupFill;
