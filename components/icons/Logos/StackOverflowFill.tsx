import { SVGAttributes } from 'react';

const SvgStackOverflowFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 20.002V14.67h2v7.333H4V14.67h2v5.333h12zM7.599 14.736l.313-1.98 8.837 1.7-.113 1.586-9.037-1.306zm1.2-4.532l.732-1.6 7.998 3.733-.733 1.599-7.998-3.732zm2.265-3.932l1.133-1.333 6.798 5.665-1.133 1.333-6.798-5.665zm4.332-4.132l5.265 7.064-1.4 1.067-5.264-7.065 1.4-1.066zM7.332 18.668v-2h9.33v2h-9.33z" />
  </svg>
);

export default SvgStackOverflowFill;
