import { SVGAttributes } from 'react';

const SvgDirectionFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 10a1 1 0 00-1 1v4h2v-3h3v2.5l3.5-3.5L13 7.5V10H9zm3.707-8.607l9.9 9.9a1 1 0 010 1.414l-9.9 9.9a1 1 0 01-1.414 0l-9.9-9.9a1 1 0 010-1.414l9.9-9.9a1 1 0 011.414 0z" />
  </svg>
);

export default SvgDirectionFill;
