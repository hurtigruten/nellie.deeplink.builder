import { SVGAttributes } from 'react';

const SvgMeteorFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 1v12A9 9 0 117.375 5.278L14 1.453v2.77L21 1zm-9 7a5 5 0 100 10 5 5 0 000-10z" />
  </svg>
);

export default SvgMeteorFill;
