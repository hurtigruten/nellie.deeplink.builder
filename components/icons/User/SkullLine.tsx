import { SVGAttributes } from 'react';

const SvgSkullLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 12a8 8 0 10-16 0v4h3a1 1 0 011 1v3h8v-3a1 1 0 011-1h3v-4zm-2 6v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3H3a1 1 0 01-1-1v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5a1 1 0 01-1 1h-3zM7.5 14a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
  </svg>
);

export default SvgSkullLine;
