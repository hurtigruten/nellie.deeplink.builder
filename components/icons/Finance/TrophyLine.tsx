import { SVGAttributes } from 'react';

const SvgTrophyLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 16.938V19h5v2H6v-2h5v-2.062A8.001 8.001 0 014 9V3h16v6a8.001 8.001 0 01-7 7.938zM6 5v4a6 6 0 1012 0V5H6zM1 5h2v4H1V5zm20 0h2v4h-2V5z" />
  </svg>
);

export default SvgTrophyLine;
