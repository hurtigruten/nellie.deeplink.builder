import { SVGAttributes } from 'react';

const SvgLiveLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 4a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 01.215.062l4.355 2.772a.4.4 0 010 .674L7.615 15.11A.4.4 0 017 14.77V9.23a.4.4 0 01.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z" />
  </svg>
);

export default SvgLiveLine;
