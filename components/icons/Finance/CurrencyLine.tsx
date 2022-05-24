import { SVGAttributes } from 'react';

const SvgCurrencyLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 013 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 100-1h-3a2.5 2.5 0 110-5H9V9h2v1h2v2H8.5a.5.5 0 100 1h3a2.5 2.5 0 110 5H11v1H9v-1H7v-2z" />
  </svg>
);

export default SvgCurrencyLine;
