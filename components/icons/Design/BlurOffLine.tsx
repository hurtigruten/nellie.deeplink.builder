import { SVGAttributes } from 'react';

const SvgBlurOffLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18.154 19.568A9 9 0 015.432 6.846L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.038-3.04zM6.847 8.262a7 7 0 009.891 9.89l-9.89-9.89zM20.414 16.2l-1.599-1.599a6.995 6.995 0 00-1.865-6.55L12 3.1 9.657 5.443 8.243 4.03 12 .272l6.364 6.364a9.002 9.002 0 012.05 9.564z" />
  </svg>
);

export default SvgBlurOffLine;
