import { SVGAttributes } from 'react';

const SvgCalendarFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 11h20v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9zm15-8h4a1 1 0 011 1v5H2V4a1 1 0 011-1h4V1h2v2h6V1h2v2z" />
  </svg>
);

export default SvgCalendarFill;
