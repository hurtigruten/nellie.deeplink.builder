import { SVGAttributes } from 'react';

const SvgMenFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18.586 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 11-1.414-1.414L18.586 5z" />
  </svg>
);

export default SvgMenFill;
