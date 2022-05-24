import { SVGAttributes } from 'react';

const SvgTableAltFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 14V3H3a1 1 0 00-1 1v10h5zm8 0V3H9v11h6zm7 0V4a1 1 0 00-1-1h-4v11h5zm-1 7a1 1 0 001-1v-4H2v4a1 1 0 001 1h18z" />
  </svg>
);

export default SvgTableAltFill;
