import { SVGAttributes } from 'react';

const SvgFridgeLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 1a1 1 0 011 1v20a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h14zm-1 11H6v9h12v-9zm-8 2v4H8v-4h2zm8-11H6v7h12V3zm-8 2v3H8V5h2z" />
  </svg>
);

export default SvgFridgeLine;
