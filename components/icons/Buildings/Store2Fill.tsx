import { SVGAttributes } from 'react';

const SvgStore2Fill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 20v2H2v-2h1v-6.758A4.496 4.496 0 011 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 01.866-.5H18.79a1 1 0 01.866.5l2.702 4.682A4.496 4.496 0 0121 13.242V20h1zM5.789 4L3.356 8.213a2.5 2.5 0 004.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 004.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 104.457-2.232L18.21 4H5.79z" />
  </svg>
);

export default SvgStore2Fill;
