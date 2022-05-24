import { SVGAttributes } from 'react';

const SvgCompassDiscoverLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-5-8.5L16 8l-3.5 9.002L11 13l-4-1.5z" />
  </svg>
);

export default SvgCompassDiscoverLine;
