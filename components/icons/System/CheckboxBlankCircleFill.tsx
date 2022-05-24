import { SVGAttributes } from 'react';

const SvgCheckboxBlankCircleFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgCheckboxBlankCircleFill;
