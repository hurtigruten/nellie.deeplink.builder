import { SVGAttributes } from 'react';

const SvgShoppingCartLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 16V4H2V2h3a1 1 0 011 1v12h12.438l2-8H8V5h13.72a1 1 0 01.97 1.243l-2.5 10a1 1 0 01-.97.757H5a1 1 0 01-1-1zm2 7a2 2 0 110-4 2 2 0 010 4zm12 0a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

export default SvgShoppingCartLine;
