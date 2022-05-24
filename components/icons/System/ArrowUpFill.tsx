import { SVGAttributes } from 'react';

const SvgArrowUpFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 12v8h-2v-8H4l8-8 8 8z" />
  </svg>
);

export default SvgArrowUpFill;
