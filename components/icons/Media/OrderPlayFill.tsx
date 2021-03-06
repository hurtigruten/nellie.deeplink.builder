import { SVGAttributes } from 'react';

const SvgOrderPlayFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 4V2.068a.5.5 0 01.82-.385l4.12 3.433a.5.5 0 01-.321.884H2V4h15zM2 18h20v2H2v-2zm0-7h20v2H2v-2z" />
  </svg>
);

export default SvgOrderPlayFill;
