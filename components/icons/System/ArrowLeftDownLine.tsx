import { SVGAttributes } from 'react';

const SvgArrowLeftDownLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 13.59l8.607-8.607 1.414 1.414-8.607 8.607H18v2H7v-11h2v7.585z" />
  </svg>
);

export default SvgArrowLeftDownLine;
