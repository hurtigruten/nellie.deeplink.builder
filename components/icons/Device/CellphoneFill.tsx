import { SVGAttributes } from 'react';

const SvgCellphoneFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 2h11a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1V0h2v2zm0 2v5h10V4H7z" />
  </svg>
);

export default SvgCellphoneFill;
