import { SVGAttributes } from 'react';

const SvgPrinterCloudFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10.566 17A4.737 4.737 0 0010 19.25c0 1.023.324 1.973.877 2.75H7v-5h3.566zm6.934-4a3.5 3.5 0 013.5 3.5l-.001.103a2.75 2.75 0 01-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 01-.579-5.392L14 16.5a3.5 3.5 0 013.5-3.5zM21 8a1 1 0 011 1l.001 4.346A5.482 5.482 0 0017.5 11l-.221.004A5.503 5.503 0 0012.207 15H5v5H3a1 1 0 01-1-1V9a1 1 0 011-1h18zM8 10H5v2h3v-2zm9-8a1 1 0 011 1v3H6V3a1 1 0 011-1h10z" />
  </svg>
);

export default SvgPrinterCloudFill;
