import { SVGAttributes } from 'react';

const SvgDeviceLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 8h2a1 1 0 011 1v12a1 1 0 01-1 1h-8a1 1 0 01-1-1v-1H4a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v5zm-2 0V4H5v14h7V9a1 1 0 011-1h4zm-3 2v10h6V10h-6z" />
  </svg>
);

export default SvgDeviceLine;
