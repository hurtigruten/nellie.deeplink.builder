import { SVGAttributes } from 'react';

const SvgPlayListLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 18h10v2H2v-2zm0-7h14v2H2v-2zm0-7h20v2H2V4zm17 11.17V9h5v2h-3v7a3 3 0 11-2-2.83zM18 19a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

export default SvgPlayListLine;
