import { SVGAttributes } from 'react';

const SvgLayoutLeftFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H9V3h12zM7 21H3a1 1 0 01-1-1V4a1 1 0 011-1h4v18z" />
  </svg>
);

export default SvgLayoutLeftFill;
