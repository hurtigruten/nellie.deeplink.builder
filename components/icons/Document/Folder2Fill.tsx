import { SVGAttributes } from 'react';

const SvgFolder2Fill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 11v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9h20zm0-2H2V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v3z" />
  </svg>
);

export default SvgFolder2Fill;
