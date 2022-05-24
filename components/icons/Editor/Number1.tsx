import { SVGAttributes } from 'react';

const SvgNumber1 = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z" />
  </svg>
);

export default SvgNumber1;
