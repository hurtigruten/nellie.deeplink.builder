import { SVGAttributes } from 'react';

const SvgRestaurantFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 2v20h-2v-8h-3V7a5 5 0 015-5zM9 13.9V22H7v-8.1A5.002 5.002 0 013 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 01-4 4.9z" />
  </svg>
);

export default SvgRestaurantFill;
