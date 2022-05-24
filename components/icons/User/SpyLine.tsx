import { SVGAttributes } from 'react';

const SvgSpyLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 13a4 4 0 11-4 4h-2a4 4 0 11-.535-2h3.07A3.998 3.998 0 0117 13zM7 15a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zM16 3a4 4 0 014 4v3h2v2H2v-2h2V7a4 4 0 014-4h8zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2z" />
  </svg>
);

export default SvgSpyLine;
