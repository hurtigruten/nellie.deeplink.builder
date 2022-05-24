import { SVGAttributes } from 'react';

const SvgCompass4Fill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.446-12.032a4.02 4.02 0 00-1.414-1.414l-5.478 5.478a4.02 4.02 0 001.414 1.414l5.478-5.478z" />
  </svg>
);

export default SvgCompass4Fill;
