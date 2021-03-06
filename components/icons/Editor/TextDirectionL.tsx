import { SVGAttributes } from 'react';

const SvgTextDirectionL = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 5v10H9v-4a4 4 0 110-8h8v2h-2v10h-2V5h-2zM9 5a2 2 0 100 4V5zm8 12v-2.5l4 3.5-4 3.5V19H5v-2h12z" />
  </svg>
);

export default SvgTextDirectionL;
