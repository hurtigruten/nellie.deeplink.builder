import { SVGAttributes } from 'react';

const SvgRefundLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 8V5H4v3h16zm0 2H4v9h16v-9zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm8 11h6v2H6.5l4.5-4.5V14z" />
  </svg>
);

export default SvgRefundLine;
