import { SVGAttributes } from 'react';

const SvgFlagFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3h9.382a1 1 0 01.894.553L14 5h6a1 1 0 011 1v11a1 1 0 01-1 1h-6.382a1 1 0 01-.894-.553L12 16H5v6H3V3z" />
  </svg>
);

export default SvgFlagFill;
