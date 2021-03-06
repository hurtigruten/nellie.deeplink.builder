import { SVGAttributes } from 'react';

const SvgProjectorFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11.112 12a4.502 4.502 0 008.776 0H22v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h9.112zM5 16h2v2H5v-2zm10.5-2.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM11.112 10H2V4a1 1 0 011-1h18a1 1 0 011 1v6h-2.112a4.502 4.502 0 00-8.776 0z" />
  </svg>
);

export default SvgProjectorFill;
