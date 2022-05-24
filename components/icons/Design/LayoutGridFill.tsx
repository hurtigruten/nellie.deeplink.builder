import { SVGAttributes } from 'react';

const SvgLayoutGridFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 12.999V20a1 1 0 01-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 01-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 011-1h8zm10 0a1 1 0 011 1v6.999h-9V3h8z" />
  </svg>
);

export default SvgLayoutGridFill;
