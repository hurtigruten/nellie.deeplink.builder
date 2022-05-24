import { SVGAttributes } from 'react';

const SvgMapPinTimeLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16.95 15.95a7 7 0 10-9.9 0L12 20.9l4.95-4.95zM12 23.728l-6.364-6.364a9 9 0 1112.728 0L12 23.728zM13 11h4v2h-6V6h2v5z" />
  </svg>
);

export default SvgMapPinTimeLine;
