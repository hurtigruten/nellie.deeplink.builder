import { SVGAttributes } from 'react';

const SvgLock2Fill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 8h2a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2V7a6 6 0 1112 0v1zm-7 7.732V18h2v-2.268a2 2 0 10-2 0zM16 8V7a4 4 0 10-8 0v1h8z" />
  </svg>
);

export default SvgLock2Fill;
