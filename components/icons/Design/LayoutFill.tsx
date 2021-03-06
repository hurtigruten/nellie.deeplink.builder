import { SVGAttributes } from 'react';

const SvgLayoutFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 21V10h5v10a1 1 0 01-1 1h-4zm-2 0H4a1 1 0 01-1-1V10h11v11zm7-13H3V4a1 1 0 011-1h16a1 1 0 011 1v4z" />
  </svg>
);

export default SvgLayoutFill;
