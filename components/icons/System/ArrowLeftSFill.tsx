import { SVGAttributes } from 'react';

const SvgArrowLeftSFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 12l6-6v12z" />
  </svg>
);

export default SvgArrowLeftSFill;
