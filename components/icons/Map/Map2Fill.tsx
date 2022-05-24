import { SVGAttributes } from 'react';

const SvgMap2Fill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 5l7-3 6 3 6.303-2.701a.5.5 0 01.697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 01-.697-.46V5zm13 14.764V7.176l-.065.028L9 4.236v12.588l.065-.028L15 19.764z" />
  </svg>
);

export default SvgMap2Fill;
