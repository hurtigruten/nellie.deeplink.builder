import { SVGAttributes } from 'react';

const SvgMapLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 5l7-3 6 3 6.303-2.701a.5.5 0 01.697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 01-.697-.46V5zm12.935 2.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17z" />
  </svg>
);

export default SvgMapLine;
