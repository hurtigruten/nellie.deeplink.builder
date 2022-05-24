import { SVGAttributes } from 'react';

const SvgContactsBookLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 016 0h-6zm3-4a2 2 0 110-4 2 2 0 010 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z" />
  </svg>
);

export default SvgContactsBookLine;
