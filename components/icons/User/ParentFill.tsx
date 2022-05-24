import { SVGAttributes } from 'react';

const SvgParentFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 11a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm10.5 4a4 4 0 110-8 4 4 0 010 8zm0 1a4.5 4.5 0 014.5 4.5v.5h-9v-.5a4.5 4.5 0 014.5-4.5zM7 12a5 5 0 015 5v4H2v-4a5 5 0 015-5z" />
  </svg>
);

export default SvgParentFill;
