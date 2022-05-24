import { SVGAttributes } from 'react';

const SvgArrowUpSFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 8l6 6H6z" />
  </svg>
);

export default SvgArrowUpSFill;
