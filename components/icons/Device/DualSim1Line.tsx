import { SVGAttributes } from 'react';

const SvgDualSim1Line = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 2l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h10zm-.829 2H6v16h12V7.829L14.171 4zM13 16h-2v-6h-1V8h3v8z" />
  </svg>
);

export default SvgDualSim1Line;
