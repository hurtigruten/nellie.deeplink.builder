import { SVGAttributes } from 'react';

const SvgSwapBoxFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm12 4v2h-4v2h4v2l3.5-3L15 7zM9 17v-2h4v-2H9v-2l-3.5 3L9 17z" />
  </svg>
);

export default SvgSwapBoxFill;
