import { SVGAttributes } from 'react';

const SvgDoorClosedFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 21v-2h2V4a1 1 0 011-1h12a1 1 0 011 1v15h2v2H3zm12-10h-2v2h2v-2z" />
  </svg>
);

export default SvgDoorClosedFill;
