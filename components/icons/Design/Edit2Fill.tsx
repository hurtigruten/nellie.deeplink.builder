import { SVGAttributes } from 'react';

const SvgEdit2Fill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414l-2.122 2.121-4.242-4.242z" />
  </svg>
);

export default SvgEdit2Fill;
