import { SVGAttributes } from 'react';

const SvgCopyrightFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 5c-2.76 0-5 2.24-5 5a5.002 5.002 0 009.288 2.572l-1.715-1.028A3 3 0 1112 9c1.093 0 2.05.584 2.574 1.457l1.714-1.03A4.999 4.999 0 0012 7z" />
  </svg>
);

export default SvgCopyrightFill;
