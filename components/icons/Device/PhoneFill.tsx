import { SVGAttributes } from 'react';

const SvgPhoneFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 16.42v3.536a1 1 0 01-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 014.044 3H7.58a.5.5 0 01.498.45c.023.23.044.413.064.552A13.901 13.901 0 009.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 006.844 6.844l1.54-2.154a.462.462 0 01.573-.149 13.901 13.901 0 004 1.205c.139.02.322.042.55.064a.5.5 0 01.449.498z" />
  </svg>
);

export default SvgPhoneFill;
