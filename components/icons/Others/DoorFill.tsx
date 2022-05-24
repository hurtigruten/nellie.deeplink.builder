import { SVGAttributes } from 'react';

const SvgDoorFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 3a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1h12zm-4 8a1 1 0 100 2 1 1 0 000-2z" />
  </svg>
);

export default SvgDoorFill;
