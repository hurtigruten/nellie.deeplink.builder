import { SVGAttributes } from 'react';

const SvgGenderlessFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 7.066V1h2v6.066A7.501 7.501 0 0112 22a7.5 7.5 0 01-1-14.934z" />
  </svg>
);

export default SvgGenderlessFill;
