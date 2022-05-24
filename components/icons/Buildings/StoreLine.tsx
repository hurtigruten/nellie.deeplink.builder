import { SVGAttributes } from 'react';

const SvgStoreLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 11.646V21a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.354A3.985 3.985 0 012 9V3a1 1 0 011-1h18a1 1 0 011 1v6a3.99 3.99 0 01-1 2.646zm-2 1.228a4.007 4.007 0 01-4-1.228A3.99 3.99 0 0112 13a3.99 3.99 0 01-3-1.354 3.99 3.99 0 01-4 1.228V20h14v-7.126zM14 9a1 1 0 012 0 2 2 0 104 0V4H4v5a2 2 0 104 0 1 1 0 112 0 2 2 0 104 0z" />
  </svg>
);

export default SvgStoreLine;
