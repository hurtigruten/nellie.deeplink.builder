import { SVGAttributes } from 'react';

const SvgMacLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 18v2l2 1v1H8l-.004-.996L10 20v-2H2.992A.998.998 0 012 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H14zM4 5v9h16V5H4z" />
  </svg>
);

export default SvgMacLine;
