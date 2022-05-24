import { SVGAttributes } from 'react';

const SvgLayoutBottomFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 16v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4h20zM21 3a1 1 0 011 1v10H2V4a1 1 0 011-1h18z" />
  </svg>
);

export default SvgLayoutBottomFill;
