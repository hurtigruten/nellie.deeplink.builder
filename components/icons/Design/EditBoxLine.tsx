import { SVGAttributes } from 'react';

const SvgEditBoxLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z" />
  </svg>
);

export default SvgEditBoxLine;
