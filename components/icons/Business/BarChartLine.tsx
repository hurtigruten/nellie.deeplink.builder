import { SVGAttributes } from 'react';

const SvgBarChartLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 12h2v9H3v-9zm16-4h2v13h-2V8zm-8-6h2v19h-2V2z" />
  </svg>
);

export default SvgBarChartLine;
