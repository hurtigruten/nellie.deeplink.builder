import { SVGAttributes } from 'react';

const SvgArrowRightSFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 12l-6 6V6z" />
  </svg>
);

export default SvgArrowRightSFill;
