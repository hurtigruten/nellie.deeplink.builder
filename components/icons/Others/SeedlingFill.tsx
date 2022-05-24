import { SVGAttributes } from 'react';

const SvgSeedlingFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 7v2.5a6.5 6.5 0 01-6.5 6.5H13v5h-2v-7l.019-1A6.5 6.5 0 0117.5 7H22zM6 3a7.004 7.004 0 016.643 4.786A7.477 7.477 0 0010.016 13H9a7 7 0 01-7-7V3h4z" />
  </svg>
);

export default SvgSeedlingFill;
