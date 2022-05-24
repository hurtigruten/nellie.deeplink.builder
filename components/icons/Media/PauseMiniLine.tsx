import { SVGAttributes } from 'react';

const SvgPauseMiniLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 7a1 1 0 012 0v10a1 1 0 11-2 0V7zM7 7a1 1 0 112 0v10a1 1 0 11-2 0V7z" />
  </svg>
);

export default SvgPauseMiniLine;
