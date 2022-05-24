import { SVGAttributes } from 'react';

const SvgFoggyLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M1.584 13.007a8 8 0 0114.873-5.908 5.5 5.5 0 016.52 5.908h-2.013A3.5 3.5 0 0015 10.05V10a6 6 0 10-11.193 3.007H1.584zM4 19h17v2H4v-2zm-2-4h21v2H2v-2z" />
  </svg>
);

export default SvgFoggyLine;
