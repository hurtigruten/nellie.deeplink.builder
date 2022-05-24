import { SVGAttributes } from 'react';

const SvgUmbrellaFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 2.05c5.053.501 9 4.765 9 9.95v1h-9v6a2 2 0 104 0v-1h2v1a4 4 0 11-8 0v-6H2v-1c0-5.185 3.947-9.449 9-9.95V2a1 1 0 012 0v.05z" />
  </svg>
);

export default SvgUmbrellaFill;
