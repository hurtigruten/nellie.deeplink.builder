import { SVGAttributes } from 'react';

const SvgBarChartFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 12h4v9H3v-9zm14-4h4v13h-4V8zm-7-6h4v19h-4V2z" />
  </svg>
);

export default SvgBarChartFill;
