import { SVGAttributes } from 'react';

const SvgSkipForwardFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 12.667L5.777 19.482A.5.5 0 015 19.066V4.934a.5.5 0 01.777-.416L16 11.333V5a1 1 0 012 0v14a1 1 0 01-2 0v-6.333z" />
  </svg>
);

export default SvgSkipForwardFill;
