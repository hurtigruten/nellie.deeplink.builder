import { SVGAttributes } from 'react';

const SvgArrowDownFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 12h7l-8 8-8-8h7V4h2z" />
  </svg>
);

export default SvgArrowDownFill;
