import { SVGAttributes } from 'react';

const SvgLayoutMasonryFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 9.999V20a1 1 0 01-1 1h-8V9.999h9zm-11 6V21H3a1 1 0 01-1-1v-4.001h9zM11 3v10.999H2V4a1 1 0 011-1h8zm10 0a1 1 0 011 1v3.999h-9V3h8z" />
  </svg>
);

export default SvgLayoutMasonryFill;
