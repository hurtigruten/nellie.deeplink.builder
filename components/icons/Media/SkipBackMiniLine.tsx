import { SVGAttributes } from 'react';

const SvgSkipBackMiniLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 6a1 1 0 011 1v10a1 1 0 01-2 0V7a1 1 0 011-1zm8 8.14V9.86L11.968 12 15 14.14zm-5.921-1.732a.5.5 0 010-.816l7.133-5.036a.5.5 0 01.788.409v10.07a.5.5 0 01-.788.409l-7.133-5.036z" />
  </svg>
);

export default SvgSkipBackMiniLine;
