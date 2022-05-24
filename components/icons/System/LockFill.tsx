import { SVGAttributes } from 'react';

const SvgLockFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 1114 0v1zm-2 0V9A5 5 0 007 9v1h10zm-6 4v4h2v-4h-2z" />
  </svg>
);

export default SvgLockFill;
