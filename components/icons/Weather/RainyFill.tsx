import { SVGAttributes } from 'react';

const SvgRainyFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.86 18l-3.153-3.153a1 1 0 00-1.414 0L8.18 17.96a8.001 8.001 0 117.8-11.873A6 6 0 1117 18h-1.139zm-5.628.732L12 16.964l1.768 1.768a2.5 2.5 0 11-3.536 0z" />
  </svg>
);

export default SvgRainyFill;
