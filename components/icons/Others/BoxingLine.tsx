import { SVGAttributes } from 'react';

const SvgBoxingLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16.5 2A5.5 5.5 0 0122 7.5V10a2.99 2.99 0 01-1 2.235V17a3.001 3.001 0 01-2 2.829V21a1 1 0 01-1 1H6a1 1 0 01-1-1v-1.17A3.001 3.001 0 013 17V6a4 4 0 014-4h9.5zm-7 9H5v6a1 1 0 00.883.993L6 18h12a1 1 0 00.993-.883L19 17v-4h-6.036A3.5 3.5 0 019.5 16H6v-2h3.5a1.5 1.5 0 001.493-1.356L11 12.5a1.5 1.5 0 00-1.356-1.493L9.5 11zm7-7H7a2 2 0 00-1.995 1.85L5 6v3h4.5a3.5 3.5 0 013.163 2H19a1 1 0 00.993-.883L20 10V7.5a3.5 3.5 0 00-3.308-3.495L16.5 4z" />
  </svg>
);

export default SvgBoxingLine;
