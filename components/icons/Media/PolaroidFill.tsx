import { SVGAttributes } from 'react';

const SvgPolaroidFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20.659 10a6 6 0 100 4H21v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v6h-.341zM5 6v3h2V6H5zm10 10a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

export default SvgPolaroidFill;
