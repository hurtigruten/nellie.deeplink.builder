import { SVGAttributes } from 'react';

const SvgDoorOpenFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 21v-2h2V4.835a1 1 0 01.821-.984l9.472-1.722a.599.599 0 01.707.59v1.28L19 4a1 1 0 011 1v14h2v2h-4V6h-3v15H2zm10-10h-2v2h2v-2z" />
  </svg>
);

export default SvgDoorOpenFill;
