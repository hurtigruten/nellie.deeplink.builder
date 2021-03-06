import { SVGAttributes } from 'react';

const SvgPercentLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17.5 21a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-11-9a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm12.571-4.485l1.414 1.414L4.93 20.485l-1.414-1.414L19.07 3.515z" />
  </svg>
);

export default SvgPercentLine;
