import { SVGAttributes } from 'react';

const SvgPixelfedLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1.031 4.099c1.713 0 3.101 1.345 3.101 3.005s-1.388 3.005-3.1 3.005h-1.819L8.618 16.58V9.832c0-.957.801-1.733 1.79-1.733h2.623z" />
  </svg>
);

export default SvgPixelfedLine;