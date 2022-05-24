import { SVGAttributes } from 'react';

const SvgShapeFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 8a3 3 0 110-6 3 3 0 010 6zm14 0a3 3 0 110-6 3 3 0 010 6zm0 14a3 3 0 110-6 3 3 0 010 6zM5 22a3 3 0 110-6 3 3 0 010 6zM9 4h6v2H9V4zm0 14h6v2H9v-2zM4 9h2v6H4V9zm14 0h2v6h-2V9z" />
  </svg>
);

export default SvgShapeFill;
